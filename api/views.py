from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import User, Movie, WatchlistEntry
from .serializers import (
    MyTokenObtainPairSerializer,
    UserSerializer,
    MovieSerializer,
    WatchlistEntrySerializer,
    WatchlistDataSerializer,
)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    def create(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=request.data["username"])
            tokens = serializer.get_tokens(user)
            return Response({"access": tokens["access"], "refresh": tokens["refresh"]})

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MovieList(generics.ListCreateAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


class ListCreateWatchlistView(generics.ListCreateAPIView):
    def get_serializer_class(self):
        if self.request.method == "GET":
            return WatchlistDataSerializer
        return WatchlistEntrySerializer

    def get_queryset(self):
        return WatchlistEntry.objects.filter(user=self.kwargs["user"])

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class DestroyWatchlistDetailView(generics.DestroyAPIView):
    serializer_class = WatchlistEntrySerializer
    queryset = WatchlistEntry.objects.all()

    def destroy(self, request, *args, **kwargs):
        print(request.user)
        watchlist_entry = WatchlistEntry.objects.get(pk=self.kwargs["pk"])
        if request.user == watchlist_entry.user:
            return super().destroy(request, *args, **kwargs)

        return Response(
            self.serializer_class.errors, status=status.HTTP_401_UNAUTHORIZED
        )

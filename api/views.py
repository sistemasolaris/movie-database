from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import User, Movie, WatchlistEntry
from .serializers import (
    MyTokenObtainPairSerializer,
    UserSerializer,
    MovieSerializer,
    WatchlistEntrySerializer,
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


class WatchlistAPI(generics.ListCreateAPIView):
    serializer_class = WatchlistEntrySerializer
    lookup_field = "user"

    def get_queryset(self):
        return WatchlistEntry.objects.filter(user=self.kwargs["user"])

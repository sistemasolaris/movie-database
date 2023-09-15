from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Movie, WatchlistEntry
from .serializers import (
    MyTokenObtainPairSerializer,
    MovieSerializer,
    WatchlistEntrySerializer,
)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class MovieList(generics.ListCreateAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


class WatchlistAPI(generics.ListCreateAPIView):
    serializer_class = WatchlistEntrySerializer
    queryset = WatchlistEntry.objects.all()

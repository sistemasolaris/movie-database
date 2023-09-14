from rest_framework import generics, viewsets
from .models import Movie, WatchlistEntry
from .serializers import MovieSerializer, WatchlistEntrySerializer


class MovieList(generics.ListCreateAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


class WatchlistViewSet(viewsets.ModelViewSet):
    serializer_class = WatchlistEntrySerializer
    queryset = WatchlistEntry.objects.all()

from rest_framework import serializers
from .models import Movie, User, WatchlistEntry


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ("id", "title", "poster", "year")


class WatchlistEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchlistEntry
        fields = ("id", "user", "movie")

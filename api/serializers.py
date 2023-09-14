from rest_framework import serializers
from .models import Movie, User


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ("id", "title", "poster", "year")


class UserSerializer(serializers.ModelSerializer):
    watchlist = MovieSerializer(many=True, read_only=False)

    class Meta:
        model = User
        fields = ("id", "username", "watchlist")

    def update(self, instance, validated_data):
        watchlist_data = validated_data.pop("watchlist")
        instance = super(UserSerializer, self).update(instance, validated_data)

        for movie_data in watchlist_data:
            movie = Movie.objects.get(id=movie_data["id"])
            instance.watchlist.add(movie)

        return instance

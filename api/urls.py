from django.urls import path
from .views import MovieList, MovieDetail, WatchlistAPI

urlpatterns = [
    path("movie/", MovieList.as_view()),
    path("movie/<int:pk>", MovieDetail.as_view()),
    path("watchlist/", WatchlistAPI.as_view()),
]

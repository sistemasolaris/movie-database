from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import MovieList, MovieDetail, WatchlistAPI

urlpatterns = [
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("movie/", MovieList.as_view()),
    path("movie/<int:pk>", MovieDetail.as_view()),
    path("watchlist/", WatchlistAPI.as_view()),
]

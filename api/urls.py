from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import *

urlpatterns = [
    path("signup/", RegisterView.as_view()),
    path("token/", MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("movie/", MovieList.as_view()),
    path("movie/<int:pk>/", MovieDetail.as_view()),
    path("watchlist/<int:user>/", ListCreateWatchlistView.as_view()),
    path("watchlist/detail/<int:pk>/", DestroyWatchlistDetailView.as_view()),
]

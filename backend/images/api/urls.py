from django.urls import path, include
from .views import ImageViewSet

urlpatterns = [
    path('api/images/', ImageViewSet.as_view())
]

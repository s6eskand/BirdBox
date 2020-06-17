from ..models import Image
from rest_framework import viewsets, permissions
from .serializers import ImageSerializer
from rest_framework.generics import ListCreateAPIView


class ImageViewSet(ListCreateAPIView):

    # Only allows for authenticated users
    # To access this endpoint add "Authorization": "Token" + <token> to request headers
    # Invalid token will result in 401 error
    permission_classes = [
        permissions.IsAuthenticated
    ]

    queryset = Image.objects.all()
    serializer_class = ImageSerializer

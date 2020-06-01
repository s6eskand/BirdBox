from ..models import Image
from rest_framework import viewsets, permissions
from .serializers import ImageSerializer
from rest_framework.response import Response


class ImageViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ImageSerializer

    def get(self):
        return self.request.user.images.all()

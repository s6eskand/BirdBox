from ..models import Image
from rest_framework import viewsets, permissions
from .serializers import ImageSerializer


class ImageViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ImageSerializer

    def get_queryset(self):
        return self.request.user.images.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

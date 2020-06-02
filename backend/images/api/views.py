from ..models import Image
from rest_framework import viewsets, permissions
from .serializers import ImageSerializer
from rest_framework.generics import ListCreateAPIView


class ImageViewSet(ListCreateAPIView):

    # just allow any for now until I set up redux and private routes on client side
    # if you cant retrieve data from here/are getting 403 Errors, ensure CORS is enabled on whichever server youre using
    permission_classes = [
        permissions.AllowAny
    ]

    queryset = Image.objects.all()
    serializer_class = ImageSerializer

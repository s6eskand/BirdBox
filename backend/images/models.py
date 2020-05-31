from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Image(models.Model):
    image = models.ImageField()
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(
        User,
        related_name="images",
        on_delete=models.CASCADE,
        null=True
    )
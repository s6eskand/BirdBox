# Generated by Django 3.0.2 on 2020-05-31 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.TextField(max_length=10000),
        ),
    ]

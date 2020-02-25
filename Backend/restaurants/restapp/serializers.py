from rest_framework import serializers
from .models import Recipes


class RecipesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = ['pk', 'name', 'image', 'discription']

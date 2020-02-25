from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from .models import Recipes
from .serializers import RecipesListSerializer


# Create your views here.


class RecipesListAPIView(ListAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipesListSerializer


class RecipesPostAPIView(CreateAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipesListSerializer


class RecipesUpdateAPIView(UpdateAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipesListSerializer
    lookup_field = 'pk'


class RecipesDeleteAPIView(DestroyAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipesListSerializer
    lookup_field = 'pk'

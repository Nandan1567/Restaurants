from django.urls import path
from .views import RecipesListAPIView,RecipesPostAPIView,RecipesDeleteAPIView,RecipesUpdateAPIView
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [

    path('recipes/',RecipesListAPIView.as_view(),name='recipes'),
    path('recipes/post',RecipesPostAPIView.as_view(),name='recipespost'),
    path('recipes/delete/<int:pk>/',RecipesDeleteAPIView.as_view(),name='recipesdelete'),
    path('recipes/update/<int:pk>/',RecipesUpdateAPIView.as_view(),name='recipesupdate')
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
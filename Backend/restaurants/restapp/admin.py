from django.contrib import admin
from .models import Recipes

# Register your models here.




class RecipesAdmin(admin.ModelAdmin):
    list_display = ('name','image','discription')

admin.site.register(Recipes,RecipesAdmin)

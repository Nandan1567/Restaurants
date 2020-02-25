from django.db import models


class Recipes(models.Model):
    image=models.ImageField(default='recipes_image/default.jpg', upload_to='recipes_image')
    name=models.CharField(max_length=50)
    discription=models.TextField(max_length=500)


    def __str__(self):
        return self.name


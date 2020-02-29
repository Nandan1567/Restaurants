from django.db import models


class Recipes(models.Model):
    image=models.ImageField(default='recipes_image/default.jpg', upload_to='recipes_image')
    name=models.CharField(max_length=50)
    discription=models.TextField(max_length=500)


    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Recipes"

    def get_image(self):
        return 'http://127.0.0.1:8000/'+self.image.url 

    def get_discription(self):
        return 'http://127.0.0.1:8000/'+self.discription.url

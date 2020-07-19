from django.shortcuts import render


# Create your views here.

def index(request):
    context = {"message": 'sample'}
    return render(request, "mbtmi/index.html", context)

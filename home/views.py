from django.shortcuts import render

# Create your views here.

def HelloMockView(request):
       return render(request,template_name='home.html')
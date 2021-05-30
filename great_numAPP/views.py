from django import http
from django.shortcuts import render,redirect,HttpResponse
import random

def index(request):
    request.session['rnum']= random.randint(1,100)
    context = {
        'random_number':request.session['rnum']
    }
    return render(request,"index.html",context)
def try_again(request):
    request.session['number'] = request.POST['number']
    if request.session['number']:
        if int(request.session['number']) > int(request.session['rnum']):
            request.session['try_value']="Smaller"
        elif int(request.session['number']) < int(request.session['rnum']):
            request.session['try_value']="Bigger"  
        else: request.session['try_value']="BINGO"
    else:request.session['try_value']="please enter a number"
    context = {
        'number_try': request.session['number'],
        'random_number':request.session['rnum'],
        'result':request.session['try_value']
    }
    
    
    return render(request,"index.html",context)
from django.shortcuts import render
from database.models import Book, BookForm
from database.models import Magazine, MagazineForm
from .forms import SearchForm
from django.db.models import Q
from django.http import JsonResponse
from django.contrib.auth.forms import AuthenticationForm ,UserCreationForm
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required



@login_required
def home (request):
    return render (request,'index.html')

@login_required
def book (request):
    return render (request,'book.html')

@login_required
def magazine (request):
    return render (request,'magazine.html')

@login_required
def about (request):
    return render (request,'about.html')

@login_required
def book_create(request):
    if request.method == 'POST':
        form = BookForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            return JsonResponse({'errors': form.errors}, status=400)
    else:
        form = BookForm()
    return render (request, 'book-create.html',{'form': form})

@login_required
def magazine_create(request):
    if request.method == 'POST':
        form = MagazineForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            return JsonResponse({'errors': form.errors}, status=400)
    else:
        form = MagazineForm()
    return render (request, 'magazine-create.html',{'form': form})

@login_required
def book_read(request):
    data = Book.objects.all()
    return render(request, 'book-read.html', {'data': data})

@login_required
def magazine_read(request):
    data = Magazine.objects.all()
    return render(request, 'magazine-read.html', {'data': data})

@login_required
def book_search(request):
    if request.method=='POST':
        kw = request.POST.get('name','')
        form = SearchForm(request.POST, initial={'name': kw})
    else:
        kw = request.GET.get('name','')
        form = SearchForm(initial={'name': kw})
    data = Book.objects.filter(Q(firstname__contains=kw)|Q(lastname__contains=kw))[:10]
    return render(request, 'book-search.html',{'form': form, 'data': data})

@login_required
def magazine_search(request):
    if request.method=='POST':
        kw = request.POST.get('name','')
        form = SearchForm(request.POST, initial={'name': kw})
    else:
        kw = request.GET.get('name','')
        form = SearchForm(initial={'name': kw})
    data = Magazine.objects.filter(Q(firstname__contains=kw)|Q(lastname__contains=kw))[:10]
    return render(request, 'magazine-search.html',{'form': form, 'data': data})

@login_required
def book_edit(request):
    data = Book.objects.all()
    return render(request,'book-edit.html',
                  {'data': data})

@login_required
def magazine_edit(request):
    data = Magazine.objects.all()
    return render(request,'magazine-edit.html',
                  {'data': data})

@login_required
def book_update(request, id):
    if request.method == 'POST':
        row = Book.objects.get(id=id)
        form = BookForm(instance=row, data=request.POST)
        if form.is_valid():
            form.save()
    else:
        row = Book.objects.get(id=id)
        form = BookForm(initial=row.__dict__)
    return render(request,'book-update.html',
                      {'form': form})

@login_required
def magazine_update(request, id):
    if request.method == 'POST':
        row = Magazine.objects.get(id=id)
        form = MagazineForm(instance=row, data=request.POST)
        if form.is_valid():
            form.save()
    else:
        row = Magazine.objects.get(id=id)
        form = MagazineForm(initial=row.__dict__)
    return render(request,'magazine-update.html',
                      {'form': form})

@login_required   
def book_delete(request, id):
    Book.objects.get(id=id).delete()
    data = Book.objects.filter()[:10]
    return render(request, 'book-edit.html',
                  {'data': data})

@login_required
def magazine_delete(request, id):
    Magazine.objects.get(id=id).delete()
    data = Magazine.objects.filter()[:10]
    return render(request, 'magazine-edit.html',
                  {'data': data})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request,user)
            return render (request,'index.html')
    else:
        form = AuthenticationForm()
    return render (request, 'account/login.html',{
        'form':form})

def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(data=request.POST)
        if form.is_valid():
            user = form.save()
            login(request,user)
            return render (request,'account/login.html')
    else:
        form = UserCreationForm()
    return render (request, 'account/signup.html',{
        'form':form})

def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return render (request,'account/login.html')

    

from django.core.mail import EmailMessage

def email(request):
    subject = 'TK Park'
    body = '''
<style>
    /* Reset CSS */
    body, h1, p {
        margin: 0;
        padding: 0;}
    body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;}
    .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);}
    h1 {
        color: #ffeb3b; /* Yellow color */
        margin-bottom: 10px;}
    .black-text {
        color: #000; /* Black color */}
    .red-text {
        color: #ff0000; /* Red color */}
    .heart-icon {
        color: #ff0000; /* Red color */
        vertical-align: middle;}
</style></head>
<body>
    <div class="container">
        <h1 style="color: #FF6600;">📚 TK Park <span class="book-icon">&#128214;</span></h1>
        <p>แก้ไขข้อมูลของท่านเรียบร้อยแล้วค่ะ มีปัญหาอะไร ติดต่อเราได้ตลอด 24 ชม. TK Park ยินดี ให้บริการ<p>
        <p>ขอบคุณที่ใช้บริการ TK Park <span class="icon">&#128522;</span></p>
        <div class="footer">
            <p><span class="heart-icon">&#10084;</span>
            <span class="heart-icon">&#10084;</span>
            <span class="heart-icon">&#10084;</span>
            TK Park Co., Ltd. | Thank you
            <span class="heart-icon">&#10084;</span>
            <span class="heart-icon">&#10084;</span>
            <span class="heart-icon">&#10084;</span>
            </p>
        </div>
    </div>
</body></html></body>'''
    email = EmailMessage(subject=subject, body=body, to=['panatda.nn46@gmail.com'])
    email.content_subtype = 'html'
    email.send()
    return render (request,'about.html')

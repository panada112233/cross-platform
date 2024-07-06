from django.db import models
from django import forms

class Book(models.Model):
    no1 = models.CharField(max_length=1000, unique=True)
    type = models.CharField(max_length=100)
    borrowingdate = models.DateField()
    date_of_return = models.DateField()
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    address = models.TextField()
    phone = models.CharField(max_length=10, unique=True)
    addition_note = models.CharField(max_length=50)

class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = '__all__'
        labels = {
            'no1':'ลำดับที่',
            'type':'ชื่อหนังสือ',
            'borrowingdate':'วันที่ยืม',
            'date_of_return': 'วันที่คืน',
            'firstname': 'ชื่อ',
            'lastname': 'นามสกุล',
            'address': 'ที่อยู่',
            'phone': 'โทรศัพท์',
            'addition_note':'อีเมล',
        }
        widgets = {
            'borrowingdate': forms.DateInput(attrs={'type':'date'}),
            'date_of_return': forms.DateInput(attrs={'type':'date'}),
            'address': forms.Textarea(attrs={'rows':'3'}),
            'addition_note': forms.Textarea(attrs={'rows':'3'}),
        }

class Magazine(models.Model):
    no1 = models.CharField(max_length=1000, unique=True)
    type = models.CharField(max_length=100)
    borrowingdate = models.DateField()
    date_of_return = models.DateField()
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    address = models.TextField()
    phone = models.CharField(max_length=10, unique=True)
    addition_note = models.CharField(max_length=50)

class MagazineForm(forms.ModelForm):
    class Meta:
        model = Magazine
        fields = '__all__'
        labels = {
            'no1':'ลำดับที่',
            'type':'ชื่อนิตยสาร',
            'borrowingdate':'วันที่ยืม',
            'date_of_return': 'วันที่คืน',
            'firstname': 'ชื่อ',
            'lastname': 'นามสกุล',
            'address': 'ที่อยู่',
            'phone': 'โทรศัพท์',
            'addition_note':'อีเมล',
        }
        widgets = {
            'borrowingdate': forms.DateInput(attrs={'type':'date'}),
            'date_of_return': forms.DateInput(attrs={'type':'date'}),
            'address': forms.Textarea(attrs={'rows':'3'}),
            'addition_note': forms.Textarea(attrs={'rows':'3'}),
        }
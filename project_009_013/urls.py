from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    
    path('home/', views.home,name='index'),
    path('about/', views.about,name='about'),
    path('book/', views.book,name='book'),
    path('magazine/', views.magazine,name='magazine'),
    path('book/create/', views.book_create,name='book_create'),
    path('book/read/',views.book_read),
    path('book/search/',views.book_search),
    path('book/edit/',
        views.book_edit, name='book_edit'),
    path('book/update/<int:id>/',
        views.book_update, name='book_update'),
    path('book/delete/<int:id>/',
        views.book_delete, name='book_delete'),
    path('magazine/create/', views.magazine_create,name='magazine_create'),
    path('magazine/read/',views.magazine_read),
    path('magazine/search/',views.magazine_search),
    path('magazine/edit/',
        views.magazine_edit, name='magazine_edit'),
    path('magazine/update/<int:id>/',
        views.magazine_update, name='magazine_update'),
    path('borrow/delete/<int:id>/',
        views.magazine_delete, name='magazine_delete'),


    path('login/', views.login_view,name='login'),
    path('signup/', views.signup_view,name='signup'),
    path('logout/', views.logout_view,name='logout'),
    path('email/', views.email,name='email'),



    path('password_reset/',auth_views.PasswordResetView.as_view(),name='password_reset'),
    path('password_reset/done/',auth_views.PasswordResetDoneView.as_view(),name='password_reset_done'),
    path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(),name='password_reset_confir m'),
    path('reset/done/',auth_views.PasswordResetCompleteView.as_view(),name='password_reset_complete'),
    
]
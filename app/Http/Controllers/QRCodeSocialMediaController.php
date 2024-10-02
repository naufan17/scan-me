<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QRCodeSocialMediaController extends Controller
{
    public function index()
    {
      return Inertia::render('FormSocialMedia/Index');    
    }  

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QRCodeEmailController extends Controller
{
  public function index()
  {
    return Inertia::render('FormEmail/Index');    
  }  
}

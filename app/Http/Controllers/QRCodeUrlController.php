<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QRCodeUrlController extends Controller
{
    public function index()
  {
    return Inertia::render('FormUrl/Index');    
  }
}

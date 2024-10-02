<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QRCodeTextController extends Controller
{
    public function index()
  {
    return Inertia::render('FormText/Index');    
  }
}

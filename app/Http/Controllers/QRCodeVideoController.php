<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QRCodeVideoController extends Controller
{
    public function index()
    {
      return Inertia::render('FormVideo/Index');    
    }  
}

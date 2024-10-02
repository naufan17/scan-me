<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QRCodeDocumentController extends Controller
{
    public function index()
    {
      return Inertia::render('FormDocument/Index');    
    }  
}

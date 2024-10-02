<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QRCodeWhatsappController extends Controller
{
    public function index()
  {
    return Inertia::render('FormWhatsapp/Index');    
  }
}

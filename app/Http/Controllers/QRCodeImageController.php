<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QRCodeImageController extends Controller
{
    public function index()
    {
      return Inertia::render('FormImage/Index');    
    }  

}

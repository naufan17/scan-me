<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
/**
 * Display home page.
 *
 * @return \Inertia\Response
 */
public function index()
  {
    return Inertia::render('Home');    
  }
}

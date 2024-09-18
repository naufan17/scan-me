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
    return Inertia::render('Home', [
      'title' => 'Welcome to the Home Page',
      'description' => 'Welcome to your Inertia.js powered by React!',
    ]);    
  }
}

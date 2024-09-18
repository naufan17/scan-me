<?php

use App\Http\Controllers\HomeController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//   return view('welcome');
// });

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::fallback(function () {
  return Inertia::render('NotFound', props: [
    'title' => '404 - Page Not Found',
    'description' => "The page you're looking for does not exist.",
  ]);
});
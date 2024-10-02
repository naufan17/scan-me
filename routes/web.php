<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\QRCodeController;
use App\Http\Controllers\QRCodeUrlController;
use App\Http\Controllers\QRCodeTextController;
use App\Http\Controllers\QRCodeEmailController;
use App\Http\Controllers\QRCodeWhatsappController;
use App\Http\Controllers\QRCodeSocialMediaController;
use App\Http\Controllers\QRCodeDocumentController;
use App\Http\Controllers\QRCodeImageController;
use App\Http\Controllers\QRCodeVideoController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//   return view('welcome');
// });

Route::get('/', [HomeController::class, 'index'])->name('home-page');
Route::get('/generate-qrcode', [QRCodeController::class, 'generateQRCode'])->name('Generate QR Code Page');
Route::get('/url', [QRCodeUrlController::class, 'index'])->name('generate-qrcode-url');
Route::get('/text', [QRCodeTextController::class, 'index'])->name('generate-qrcode-text');
Route::get('/email', [QRCodeEmailController::class, 'index'])->name('generate-qrcode-email');
Route::get('/whatsapp', [QRCodeWhatsappController::class, 'index'])->name('generate-qrcode-whatsapp');
Route::get('/social-media', [QRCodeSocialMediaController::class, 'index'])->name('generate-qrcode-social-media');
Route::get('/document', [QRCodeDocumentController::class, 'index'])->name('generate-qrcode-document');
Route::get('/image', [QRCodeImageController::class, 'index'])->name('generate-qrcode-image');
Route::get('/video', [QRCodeVideoController::class, 'index'])->name('generate-qrcode-video');

Route::fallback(function () {
  return Inertia::render('NotFound', props: [
    'title' => '404 - Page Not Found',
    'description' => "The page you're looking for does not exist.",
  ]);
});
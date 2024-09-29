<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\QRCodeController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//   return view('welcome');
// });

Route::get('/', [HomeController::class, 'index'])->name('Home');
Route::get('/generate-qrcode', [QRCodeController::class, 'generateQRCode'])->name('Generate QR Code');
Route::post('/generate-qrcode/url', [QRCodeController::class, 'generateUrlQRCode'])->name('Generate QR Code Url');
Route::post('/generate-qrcode/text', [QRCodeController::class, 'generateTextQRCode'])->name('Generate QR Code Text');
Route::post('/generate-qrcode/email', [QRCodeController::class, 'generateEmailQRCode'])->name('Generate QR Code Email');
Route::post('/generate-qrcode/whatsapp', [QRCodeController::class, 'generateWhatsappQRCode'])->name('Generate QR Code Whatsapp');

Route::fallback(function () {
  return Inertia::render('NotFound', props: [
    'title' => '404 - Page Not Found',
    'description' => "The page you're looking for does not exist.",
  ]);
});
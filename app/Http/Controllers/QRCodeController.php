<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QRCodeController extends Controller
{

    public function generateQRCode(){
        $qrcode = QRCode::format('png')
                        ->size(300)
                        ->margin(1)
                        ->generate("Hello World");

        return response($qrcode)->header("Content-Type","image/png");
    }
    
    public function generateUrlQRCode(Request $request){
        $request->validate(['url' => 'required|url']);

        $qrcode = QRCode::format('png')
                        ->size(300)
                        ->margin(1)
                        ->generate($request->url);

        return response($qrcode, 200)->header("Content-Type","image/png");
    }

    public function generateTextQRCode(Request $request){
        $request->validate(['text' => 'required|string']);

        $qrcode = QRCode::format('png')
                        ->size(300)
                        ->margin(1)
                        ->generate($request->text);

        return response($qrcode, 200)->header("Content-Type","image/png");
    }

    public function generateEmailQRCode(Request $request){
        $request->validate(["email"=> "required|email"]);

        $qrcode = QRCode::format('png')
                        ->size(300)
                        ->margin(1)
                        ->email($request->email);

        return response($qrcode, 200)->header("Content-Type","image/png");
    }

    public function generateWhatsappQRCode(Request $request){
        $request->validate(['phone_number' => "required|regex:/^08[0-9]{8,12}$/|max:14|min:10"]);

        $whatsapp = 'https://wa.me/' . '628' . substr($request->phone_number, 2);
        $qrcode = QRCode::format('png')
                        ->size(300)
                        ->margin(1)
                        ->generate($whatsapp);

        return response($qrcode, 200)->header("Content-Type","image/png");
    }
}

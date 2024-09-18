<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,200..800;1,200..800&display=swap"/>

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    @vite('resources/js/app.tsx')
    @vite('resources/css/app.css')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>

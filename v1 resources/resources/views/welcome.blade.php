<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>STL</title>
        <!-- <link rel="icon" href="{{ URL::asset('public/favicon.ico') }}" type="image/gif"> -->
        <!-- Fonts -->    
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        
        <!--Import materialize.css-->
        <link rel="stylesheet" href="{{ URL::asset('public/css/select.dataTables.min.css') }}">

        <link rel="stylesheet" href="{{ URL::asset('public/css/materialize.min.css') }}">
        <script src="{{ URL::asset('public/js/jquery3.3.1.min.js') }}"></script>
        <script src="{{ URL::asset('public/js/materialize.min.js') }}"></script>
        
        

        
        <script src="{{ URL::asset('public/js/jquery.dataTables.min.js') }}"></script>
        <script src="{{ URL::asset('public/js/dataTables.select.min.js') }}"></script>
        <script src="{{ URL::asset('public/js/dataTables.buttons.min.js') }}"></script>
        <script src="{{ URL::asset('public/js/buttons.print.min.js') }}"></script>

        
        <script src="{{ URL::asset('public/js/jszip.min.js') }}"></script>
        <script src="{{ URL::asset('public/js/buttons.html5.min.js') }}"></script>



        <script src="https://maps.google.com/maps/api/js?sensor=false"></script>
        <script src="{{ URL::asset('public/js/Chart.js') }}"></script>
        
        <script src="{{ URL::asset('public/js/md5.js') }} "></script>
        <script src="{{ URL::asset('public/js/aes.js') }} "></script>
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script> -->

        <!-- <script src="{{ URL::asset('public/js/moment2.22.2.min.js') }}"></script> -->
        <script src="https://momentjs.com/downloads/moment.min.js"></script>
        <script src="https://momentjs.com/downloads/moment-timezone-with-data.js"></script>
        <!-- <script src="https://unpkg.com/axios/dist/axios.min.js"></script> -->
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.js"></script> -->


        <link rel="stylesheet" href="{{ URL::asset('public/css/app.css') }}">
        
        
        
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div class="flex-center position-ref full-height" id="root"></div>
    </body>
        <script src="{{ URL::asset('public/js/index.js') }}"></script>
        
</html>

<?php
Route::route('api/log',function(Request $req){
    $myfile = fopen('log.txt', 'a');
    fwrite($myfile, '\n');
    fclose($myfile);
})



<?php

    

	$dns="mysql:host=localhost;dbname=dayininc_ev_kayit";
	$kullanici_adi='dayininc_admin';
	$parola='PAwUNs5hEww8g8G';
    try {
        $db= new PDO($dns,$kullanici_adi,$parola);
        #Türçe karakter
        $db->exec("SET NAMES 'utf8'; SET CHARSET 'utf8'");
    }
    #hata yakalama
    catch (PDOExpception $e) {
        echo $e->getMessage();
    }
?>
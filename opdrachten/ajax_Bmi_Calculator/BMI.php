<?php
$gewicht = $_GET["gewicht"];
$lengte = $_GET["lengte_cm"];
    BMIcalc ($gewicht,$lengte);

function BMIcalc($gewicht,$lengte){
    $lengte = $lengte/100; // naar meters omrekenen
    $bmi = round($gewicht / ($lengte * $lengte),1);
    //test
    switch ($bmi){
        case $bmi<= 18.5:
            echo "Je bmi is $bmi dit betekend dat je ondergewicht hebt";
            break;
        case $bmi<= 25:
            echo "Je bmi is $bmi dit betekend dat je normaal/gezond bent";
            break;
        case $bmi<= 27:
            echo "Je bmi is $bmi dit betekend dat je licht overgewicht hebt";
            break;
        case $bmi<= 30:
            echo "Je bmi is $bmi dit betekend dat je matig overgewicht hebt";
            break;
        case $bmi<= 40:
            echo "Je bmi is $bmi dit betekend dat je obesitas hebt";
            break;
        case $bmi> 40 :
            echo "Je bmi is $bmi dit betekend dat je morbide obesitas hebt";
            break;
    }
}
?>
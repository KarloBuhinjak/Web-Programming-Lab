<?php
$myfile = fopen("text.txt", "r") or die("Unable to open file!");
$str_tekst =  fread($myfile,filesize("text.txt"));
fclose($myfile);
echo "<h1>$str_tekst</h1>";
echo "<br>";
$izrezani_tekst = str_replace(' ', '', $str_tekst);
echo $izrezani_tekst;
echo "<br>";
$myarray = explode(' ', $str_tekst);
echo "$myarray[0]";
$myfile = fopen("text.txt", "a") or die("Unable to open file!");
$str_tekst =  fread($myfile,filesize("text.txt"));
for ($x = 0; $x <= count($myarray); $x++) {
    $rijec = $myarray[$x];
    fwrite($myfile, $rijec.PHP_EOL);

}
fclose($myfile);
$k = substr_count($str_tekst,'k');
echo "<br>";
echo "<h2>Broj pojavljivanja slova k: $k</h2>";
echo "<br>";
$pozicijaK = strpos($str_tekst,"k");
echo "<h2>Pozicija prvog slova k: $pozicijaK</h2>";

?>

<!DOCTYPE html>
<html>
<body>

<?php
$colors = array("Karlo", "Buhinjak", "13124124", "232","3");

foreach ($colors as $value) {
    echo "$value <br>";
}

$cars = array(
    "Citroen" => array(
        "tip-automobila" => "karavan",
        "kubikaža" => 85,
        "boja" => "crvena",
        "godina-proizvodnje" => 2001,
        "motor" => "benzin"
    ),

    "Mercedes" => array(
        "tip-automobila" => "limuzina",
        "kubikaža" => 100,
        "boja" => "crna",
        "godina-proizvodnje" => 2009,
        "motor" => "dizel"
    )
);

foreach ( $cars['Citroen'] as $car  ) {
    echo "$car \n";
}


echo "<br>";

echo $cars['Mercedes']['tip-automobila'] . "\n";
echo $cars['Mercedes']['kubikaža'] . "\n";
echo $cars['Mercedes']['boja'] . "\n";
echo $cars['Mercedes']['godina-proizvodnje'] . "\n";
echo $cars['Mercedes']['motor'] . "\n";

echo "<br>";

$broj = 3;
function kvadrat($number) {

    echo $number*$number;
}
kvadrat($broj);

class Kupac {
    public $name;
    public $prezime;

    function __construct($name, $prezime) {
        $this->name = $name;
        $this->prezime = $prezime;
    }
    function get_name() {
        return $this->name;
    }
    function get_prezime() {
        return $this->prezime;
    }

    function set_name($name) {
        $this->name = $name;
    }
    function set_prezime($prezime) {
        $this->prezime = $prezime;
    }

    function ispis(){
        echo "Kupac je: "." ".$this->name." ".$this->prezime;
    }
}

echo "<br>";

$kupac1 = new Kupac("Karlo", "Buhinjak");
echo $kupac1->get_name();
echo "<br>";
echo $kupac1->get_prezime();
echo "<br>";
echo $kupac1->ispis();


?>


</body>
</html>
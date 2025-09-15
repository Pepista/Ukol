<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "pedr_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $jmeno = $conn->real_escape_string($_POST["jmeno"]);
    $email = $conn->real_escape_string($_POST["email"]);
    $barva = $conn->real_escape_string($_POST["barva"]);

    $sql = "INSERT INTO uzivatele (jmeno, email, barva) VALUES ('$jmeno', '$email', '$barva')";

    if ($conn->query($sql) === TRUE) {
        echo "<h1>Díky za odeslání, $jmeno!</h1>";
        echo "<p>Uložili jsme tvůj e-mail: <strong>$email</strong> a oblíbenou barvu: <strong>$barva</strong>.</p>";
        echo '<p><a href="form.html">Zpět na formulář</a></p>';
    } else {
        echo "Chyba: " . $conn->error;
    }
} else {
    echo "<p>Formulář nebyl odeslán správně.</p>";
}

$conn->close();
?>

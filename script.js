<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ukázka Smooth Scroll</title>
    <style>
        html {
            scroll-behavior: smooth;
        }
        #text {
            transition: opacity 0.5s ease;
        }
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }
        th, td {
            padding: 8px 12px;
        }
        #scroll-info {
            position: fixed;
            top: 0;
            right: 0;
            background: #eee;
            padding: 5px 10px;
            font-family: Arial, sans-serif;
            border-bottom-left-radius: 5px;
            box-shadow: 0 0 5px rgba(0,0,0,0.1);
        }
        body {
            min-height: 1500px; /* aby byl dostatek scrollu pro test */
            font-family: Arial, sans-serif;
            padding: 20px;
        }
    </style>
</head>
<body>

    <h1 id="demo">Původní text</h1>

    <img id="obrazek" src="img/image1.jpg" alt="Obrázek" width="200" style="cursor:pointer;" onclick="zmenObrazek()" />

    <p id="text">Toto je text, který lze schovat.</p>
    <button onclick="zmenText()">Změnit text</button>
    <button onclick="schovejText()">Schovat text</button>

    <form onsubmit="return kontrolaFormulare()">
        <label for="jmeno">Jméno:</label>
        <input type="text" id="jmeno" name="jmeno" /><br /><br />
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" /><br /><br />
        <label for="heslo">Heslo:</label>
        <input type="password" id="heslo" name="heslo" /><br /><br />
        <input type="submit" value="Odeslat" />
    </form>

    <br />

    <table id="gamesTable">
        <tr>
            <th>#</th>
            <th>Název hry</th>
            <th>Žánr</th>
            <th>Hodnocení</th>
        </tr>
    </table>
    <button onclick="pridatRadek()">Přidat řádek</button>

    <div id="scroll-info">Aktuální pozice scrollu: 0px</div>

    <br /><br />
    <button onclick="scrollNahoru()">Scroll nahoru</button>

<script>
    function zmenObrazek() {
        var obrazek = document.getElementById("obrazek");

        if (obrazek.src.includes("image1.jpg")) {
            obrazek.src = "img/image2.jpg";
        } else {
            obrazek.src = "img/image1.jpg";
        }
    }

    function zmenText() {
        document.getElementById("demo").innerText = "Text se změnil!";
    }

    function schovejText() {
        let text = document.getElementById("text");
        text.style.opacity = 0;

        setTimeout(() => {
            text.style.display = "none";
        }, 500);
    }

    function kontrolaFormulare() {
        let jmeno = document.getElementById("jmeno").value;
        let email = document.getElementById("email").value;
        let heslo = document.getElementById("heslo").value;

        if (jmeno == "") {
            alert("Zadejte prosím jméno!");
            return false;
        }

        if (!email.includes("@")) {
            alert("Zadejte prosím platný e-mail!");
            return false;
        }

        if (heslo.length < 6) {
            alert("Heslo musí mít alespoň 8 znaků!");
            return false;
        }

        return true;
    }

    function pridatRadek() {
        let table = document.getElementById("gamesTable");
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerText = table.rows.length - 1;
        cell2.innerText = "Nová hra";
        cell3.innerText = "Žánr";
        cell4.innerText = "Hodnocení";
    }

    window.addEventListener("scroll", function() {
        let scrollPos = window.scrollY;
        document.getElementById("scroll-info").innerText = "Aktuální pozice scrollu: " + scrollPos + "px";
    });

    function scrollNahoru() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
</script>

</body>
</html>

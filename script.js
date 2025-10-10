function zmenObrazek() {
    var obrazek = document.getElementById("obrazek");

    
    obrazek.style.transition = "opacity 0.5s";
    obrazek.style.opacity = 0;

    setTimeout(function() {
        if (obrazek.src.includes("image1.jpg")) {
            obrazek.src = "img/image2.jpg";
        } else {
            obrazek.src = "img/image1.jpg";
        }

        obrazek.style.opacity = 1;
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
        alert("Heslo musí mít alespoň 6 znaků!");
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
    cell2.innerHTML = '<input type="text" placeholder="Název hry">';
    cell3.innerHTML = '<input type="text" placeholder="Žánr">';
    cell4.innerHTML = '<input type="text" placeholder="Hodnocení">';

    
    let inputs = row.getElementsByTagName("input");
    Array.from(inputs).forEach(input => {
        input.addEventListener("blur", function() {
            let columnIndex = input.parentElement.cellIndex;
            table.rows[row.rowIndex].cells[columnIndex].innerText = input.value;
        });
    });
}

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    document.getElementById("scroll-info").innerText = "Aktuální pozice scrollu: " + scrollPos + "px";

    
    if (scrollPos > 200) {
        document.getElementById("scrollUpButton").style.display = "block";
    } else {
        document.getElementById("scrollUpButton").style.display = "none";
    }
});

function scrollNahoru() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

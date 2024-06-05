// Sparar dot:arna i variabler (dot id:et med)
var dot = document.querySelector("#dot");
var dot1 = document.querySelector("#dot1");
var dot2 = document.querySelector("#dot2");
var dot3 = document.querySelector("#dot3");
var dot4 = document.querySelector("#dot4");
var dot5 = document.querySelector("#dot5");
var dot6 = document.querySelector("#dot6");

// Andra variabler
var reg = document.querySelector("#reg");
var conterner = document.querySelector(".conterner");
var kalkulator = document.querySelector("#kalkulator");
var kalkulatorJaEllerNej = document.querySelector("#kalkulator_ja_eller_nej");
var areey_promt_resultat = document.querySelector("#reselutat");
// vanlig js
/* Kalkulator */
{
    // tal 1
    var promptInt_Tal1;
    do {
        var userInput = window.prompt("Kalkulator tal 1 (endast heltal):");
        promptInt_Tal1 = parseInt(userInput);
    } while (isNaN(promptInt_Tal1));

    // tal 2
    var promptInt_Tal2;
    do {
        var userInput = window.prompt("Kalkulator tal 2 (endast heltal):");
        promptInt_Tal2 = parseInt(userInput);
    } while (isNaN(promptInt_Tal2));

    var kalkulerrings_consols_logs_text = "Ditt tal kommer att komma i 10-tal eller mer.";
    var console_log_kalkulerring = console.log(kalkulerrings_consols_logs_text);
    var promptInt_Tal1_kalkulering = promptInt_Tal1;
    var promptInt_Tal2_kalkulering = promptInt_Tal2;
    var tal1PlussTal2 = promptInt_Tal1_kalkulering + promptInt_Tal2_kalkulering;

    var utSkrivning = kalkulator.innerHTML = tal1PlussTal2;
    var kalkulatorsTextInnan = "Ditt tal är ";

    if (tal1PlussTal2 > 100) {
        var JaEllerNejTextJa = kalkulatorsTextInnan + tal1PlussTal2 + " är mer än 100.";
        kalkulatorJaEllerNej.innerHTML = JaEllerNejTextJa;
    } else if (tal1PlussTal2 === 0 && tal1PlussTal2 < 100) {
        var JaEllerNejText0 = kalkulatorsTextInnan + tal1PlussTal2 + "  0 är bara 0" + "0 är mindre än 100.";
        kalkulatorJaEllerNej.innerHTML = JaEllerNejText0;
    } else if (tal1PlussTal2 === 0) {
        var JaEllerNejTextFinsInte = kalkulatorsTextInnan + tal1PlussTal2 + " Oj du lyckades!"
        kalkulatorJaEllerNej.innerHTML = JaEllerNejTextFinsInte + "(De ska inte gå)"
    } else if (tal1PlussTal2 < 100) {
        var JaEllerNejTextNej = kalkulatorsTextInnan + tal1PlussTal2 + " är mindre än 100.";
        kalkulatorJaEllerNej.innerHTML = JaEllerNejTextNej;
    } else if (tal1PlussTal2 === 100) {
        var JaEllerNejTextJaNej = kalkulatorsTextInnan + tal1PlussTal2 + " är lika med 100.";
        kalkulatorJaEllerNej.innerHTML = JaEllerNejTextJaNej;
    } 
    
};
// kalkulator slut

dot1.addEventListener('click', function() {
var dot_windows_url_text = "https://feue.webber.se";
var dot_dot1_windows_url_andring = window.location.href = dot_windows_url_text;
});
// areey
function areey() {
  // Skapa en tom array för att lagra användarens inmatningar
var userInputArray = [];

// Loopa för att fortsätta fråga användaren om inmatning
while (true) {
    var userInput = window.prompt("Skriv in något (klicka på Avbryt för att avsluta):");

    // Om användaren klickar på "Avbryt" eller inte skriver något, bryt loopen
    if (userInput === null || userInput === "") {
        break;
    }

    // Lägg till användarens inmatning till arrayen
    userInputArray.push(userInput);
}

// Visa arrayen i en alert
if (userInputArray.length > 0) {
    var alertMessage = "Du skrev in följande:\n" + userInputArray.join("\n");
    alert(alertMessage);
} else {
    alert("Ingen inmatning gjordes.");
}  
}


// areey slut
var while_lopp = 1;
while (while_lopp < 101) {
    console.log(while_lopp)
    while_lopp++;
}

const themeSwitch = document.getElementById('theme-switch');

// Lyssna på ändringar i switchen
themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        // Om switchen är markerad, ändra till mörkt tema
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        // Annars, ändra till ljust tema
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
});

dot2.addEventListener("click", function() {
    dot2.classList.toggle("dot2");
});
// Lägg till en händelselyssnare för tangenttryckningar på dokumentet
document.addEventListener('keydown', function(event) {
    // Hämta teckenkoden för den tryckta tangenten
    var key = event.key;

    // Visa teckenkoden i konsolen
    console.log('Tangent tryckt:', key);

    // Exempel: Kontrollera om användaren trycker på Enter-tangenten
    if (key === 'Enter') {
        // Gör något när Enter-tangenten trycks, t.ex. skicka formuläret
        console.log('Enter-tangenten tryckt!');
    }
});
// Lägg till en händelselyssnare för muspekarens rörelse på dokumentet
document.addEventListener('mousemove', function(event) {
    console.log('Muspekaren är vid position X:', event.clientX, 'och Y:', event.clientY);
});
// Lägg till en händelselyssnare för fulstendig laddning
window.addEventListener("load", function () {
    var laddning = console.log("Siddan har laddas färdigt.");
});

// Funktion för att skapa en cookie baserat på formulärdata
function createCookie(event) {
    event.preventDefault(); // Förhindra att formuläret skickas

    // Hämta formulärdata
    var cookieName = document.getElementById("cookieName").value;
    var cookieValue = document.getElementById("cookieValue").value;

    // Skapa cookiesträngen
    var cookieString = cookieName + "=" + cookieValue + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";

    // Sätt cookien
    document.cookie = cookieString;

    // Meddela användaren att cookien har skapats
    alert("Cookie skapad! Namn: " + cookieName + ", Värde: " + cookieValue);
}

// Lägg till en händelselyssnare för formuläret
var form = document.getElementById("cookieForm");
form.addEventListener("submit", createCookie);
const { ifError } = require('assert');
const { connect } = require('http2');
const { WritableStreamDefaultController } = require('node:stream/web');
const { Script } = require('vm');

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




var FE = confirm("Är FE ägare av dena sida?  Tryck på Ok= ja Avbryt=nej.")
if (FE == true) {
    document.querySelector(".rattFE").innerHTML= "dena sidas ägare är FE. Du tryckte på Ok du svara rätt!";
}

else if (FE == false) {
    document.querySelector(".rattFE").innerHTML= "Dena hemsida ägs av FE. Du svara fel";
    
}

// Kontrollera webbläsarstöd
if ('getUserMedia' in navigator.mediaDevices) {
    console.log('getUserMedia stöds.');

    let mediaRecorder;
    let audioChunks = [];

    // Funktion för att starta inspelningen
    function startRecording() {
        audioChunks = [];
        mediaRecorder = new MediaRecorder(window.stream);

        mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            const downloadLink = document.createElement('a');

            downloadLink.href = audioUrl;
            downloadLink.download = 'inspelning.wav';
            downloadLink.click();
        });

        mediaRecorder.start();
    }

    // Funktion för att stoppa inspelningen
    function stopRecording() {
        mediaRecorder.stop();
    }

    // Åtkomst till mikrofonen
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
        window.stream = stream;
    })
    .catch(function(err) {
        console.error('Fel vid åtkomst till mikrofonen:', err);
    });
document.addEventListener('DOMContentLoaded', function() {
  var element = document.querySelector('.element');

  // Lägger till klasser för att aktivera animationerna
  element.classList.add('scaleRotate');
  element.classList.add('colorChange');
  element.classList.add('blurText');
  element.classList.add('shadowMove');
});
    // Lyssnare för knappar
    document.getElementById('startRecording').addEventListener('click', startRecording);
    document.getElementById('stopRecording').addEventListener('click', stopRecording);

} else {
    console.error('getUserMedia stöds inte i denna webbläsare.');
}
document.addEventListener("DOMContentLoaded", function () {
ftf.initialize()
    documentEdit.log()

})


var documentEdit = (function () {
    function log() {
        console.log("Hej")

        console.log("Hej då")
    }
    return {
        log
    }
})()

var ftf = (function () {
    function initialize(){
        var you = document.getElementById("you")
    you.addEventListener("click", on)

        
} 
function on(){
    var input = document.getElementById("textarea")
var editText = document.getElementById("edit-text")
editText.innerText = input.value

var startBTN = document.getElementById("timer")
startBTN.addEventListener("click", Start)
}
function Start(){
var BTNstart = 10

setInterval(function(){
    document.write("BTNstart")
    BTNstart = BTNstart -1
}, 1000)
}

return{
   initialize
}
})()

function  Hejhejhej(){
alert("Hej");
}
function getInfo() {
    var url = new URL(window.location.href);
    var tjo = url.searchParams.get("tjo");
    console.log(tjo);

}

function feuefeue(){
    var feKakor = confirm("tilåter du kakor")
getElementById("test")
}

function BTN_Start2(){ 
    var FEstart = input("Är du redo för detta formulär?")
}


function Google () {
    confirm("Tilåter du att de google-konto du är på nu loggas in meds på dena FE-loggin sida?")
}

function Facebook () {
    confirm("Tilåter du att ditt facebook-konto loggas in med på dena FE-loggin sida?")
}

function helow() {
var feueuefe = confirm("om du trykoer 'OK' kommer duatt säga ja till ALLA saker som man kan säga ja och nej till e.x  kakor och inloggnings altenativ som man kan ha tillgång till. Om du du tryker på 'Avbryt' kommer inget att henda. ")
    

}

function Hjälp() {
    confirm("Hjälp hitar du på Hjälp.html.")
    console.log("Hjälp hitar du på Hjälp.html.")
}

if (Hjälp == true) {
alert("Du tryckte på 'OK' Hjälp.html.")
}

else if (Hjälp == false) {
alert("Du trykte på 'Avbryt'.")
}

function submitForm() {
    var query = document.getElementById("searchQuery").value;
    if (query) {
        window.location.href = "https://www.bing.com/search?q=" + encodeURIComponent(query);
    }
    return false; // Förhindra formuläret från att skickas med traditionell HTTP POST-metod
}

/*det jag kommer att skriva är att om man klickar på en längk som är kopat till dena funktion med "onclick"
 kommandot som man kan anroppa en eller flera funtioner och kan man göra skacker men HTML och Javascript 
 tillsamans*/

 function functionIJavascript() {
    document.querySelector(".Javascript2").InnerHTML = "Du klicka på längken!"
 }

 function fu1() {
    confirm("Vill du skicka in detta till FEH nu (Tryck OK om du vill det, tryck Avbryt om du inte vill det.)")
 }




function fu6() {
    function kodaMeddelande(meddelande, nyckel) {
        meddelande = meddelande.toLowerCase();
        var kodatMeddelande = "";
        for (var i = 0; i < meddelande.length; i++) {
            var bokstav = meddelande[i];
            if (nyckel.hasOwnProperty(bokstav)) {
                kodatMeddelande += nyckel[bokstav];
            } else {
                kodatMeddelande += bokstav;
            }
        }
        return kodatMeddelande;
    }
    
    function avkodaMeddelande(kodatMeddelande, nyckel) {
        var avkodatMeddelande = "";
        for (var i = 0; i < kodatMeddelande.length; i++) {
            var kodadBokstav = kodatMeddelande[i];
            var avkodadBokstav = "";
            for (var bokstav in nyckel) {
                if (nyckel[bokstav] === kodadBokstav) {
                    avkodadBokstav = bokstav;
                    break;
                }
            }
            avkodatMeddelande += avkodadBokstav;
        }
        return avkodatMeddelande;
    }
    
    var nyckel = {
        "a": "x",
        "b": "y",
        "c": "z"
    };
    
    var meddelandeAttKoda = "hej";
    var kodatMeddelande = kodaMeddelande(meddelandeAttKoda, nyckel);
    console.log("Kodat meddelande:", kodatMeddelande);
    
    var avkodatMeddelande = avkodaMeddelande(kodatMeddelande, nyckel);
    console.log("Avkodat meddelande:", avkodatMeddelande);
    
}
function fu7() {
    var var5 = confirm("hej det är ett test")
}
if (fu7 == true) {
    // Välj elementet med id "minElement"
var element = document.getElementById("minElement");

// Tilldela en CSS-klass till elementet
element.classList.add("HEJclasen");
}

else if (fu7 == false) {

}
var element2 = document.getElementById("minElement");
element.classList.remove("HEJclasen")

/* detta är kod för att göra en knapp med funtioner och document.addEventListener */
if (FE == true) {
function btnbtnbtn() {
    document.addEventListener("click", onclick3)
}
function onclick3() {
    document.querySelector("btn4").innerHTML= "Kola i consolen";
    console.log("Detta kan JavaScript göra med HTML")
    if (btnbtnbtn == true) {
        var var45 = confirm("Allt med JavaScript")
    }

    else if (btnbtnbtn == false) {
        var var46 = alert("Allt med JavaScript")
    }

    do {
        console.log("Du har tryckt OK eller Avbryt när du trykte på Ctrl+R")
    } while (FE == true);
}
}

/* detta är slutet för att göra en knapp med funtioner och document.addEventListener */
/* Windows uppgrderings test med HTML, CSS och JavaScript som vi använder som ett språk i FE som heter FE-HCJ */
var confirmShown = false;
var confirmed = false;

function showConfirm() {
    if (!confirmShown || confirmed) {
        confirmShown = true;
        confirmed = false;
        var result = confirm("Din uppgradering är klar");
        if (result) {
            confirmed = true;
            // Kör din kod här om bekräftelsen godkänns
            console.log("Bekräftelsen godkänd.");
        } else {
            // Inaktivera knappen
            disableConfirmButton();
            // Kör din kod här om bekräftelsen inte godkänns
            console.log("Bekräftelsen inte godkänd.");
        }
        confirmShown = false;
    }
}

function disableConfirmButton() {
    // Hitta knappen och inaktivera den
    var confirmButton = document.getElementById("confirmButton");
    confirmButton.disabled = true;

    // Efter en viss tidsgräns (t.ex. 5 sekunder) kan du aktivera knappen igen
    setTimeout(function() {
        confirmButton.disabled = false;
    }, 8640000); // 86400000 millisekunder = en dag
}



/* här slutar Windows uppgraderings testet som man kan göra i FE-HCJ*/

function login5() {
    console.log("Nu är du inlogad när du uppdaterar sidan kommer du bli utlogad eller om en timme")
}

function rubrik() {
   var var47 = document.getElementById("rubrik2");
    var47.addEventListener("mouseover", function rubrik3() {
        document.getElementById("rubrik2").classList("ny-class")
    })
}

function sparaText() {
    var textareaInnehall = document.getElementById("mittTextarea").value;
    if (textareaInnehall.trim() === "") {
        alert("Ingen text i fältet");
        return; // Avbryt funktionen om textarean är tom
    }
    var uppdeladText = uppdelapaText(textareaInnehall, 80);
    localStorage.setItem("sparadText", uppdeladText); // Spara uppdelad text i localStorage
}

function visaText() {
    var sparadText = localStorage.getItem("sparadText"); // Hämta sparad text från localStorage
    if (!sparadText) {
        alert("Ingen sparad text att visa");
        return; // Avbryt funktionen om det inte finns någon sparad text
    }
    document.getElementById("visatext").innerHTML = sparadText;
}

function uppdelapaText(text, limit) {
    var uppdeladText = "";
    for (var i = 0; i < text.length; i += limit) {
        uppdeladText += text.substring(i, i + limit) + "<br>";
    }
    return uppdeladText;
}

// Lyssna på textarea för att uppdatera tillståndet för Visa-knappen
document.getElementById("mittTextarea").addEventListener("input", function() {
    var visaKnapp = document.getElementById("visaKnapp");
    if (this.value.trim() === "") {
        visaKnapp.disabled = true;
    } else {
        visaKnapp.disabled = false;
    }
});
var memory = 0;

function saveToMemory() {
    memory = eval(document.getElementById('display').value);
}

function recallMemory() {
    document.getElementById('display').value = memory;
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    try {
      var result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  document.addEventListener('keydown', function(event) {
    var key = event.key;
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === ',') {
        appendToDisplay(',');
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        clearDisplay();
    } else if (key === 'Shift') {
        clearLastCharacter();
    }
    
});

// Skapa en variabel för att hålla reda på om funktionen är aktiverad eller inte
var functionEnabled = false;

// Funktionen som ska aktiveras och inaktiveras
function myFunction() {
    // Här kan du skriva koden för din funktion
    console.log("Funktionen körs");
}

// Funktion för att hantera tangenttryckningar
document.addEventListener('keydown', function(event) {
    // Kolla om tangenten "s" trycks
    if (event.key === 's') {
        // Om funktionen inte är aktiverad, aktivera den
        if (!functionEnabled) {
            functionEnabled = true;
            console.log("Funktionen aktiverad");
            myFunction(); // Anropa funktionen
        } else {
            // Om funktionen är aktiverad, inaktivera den
            functionEnabled = false;
            console.log("Funktionen inaktiverad");
        }
    }
});
 function myFunction() {
    document.getElementById('display').disabled = true;
 }


var history = [];

function calculate() {
    try {
        var expression = document.getElementById('display').value;
        var result = eval(expression);
        document.getElementById('display').value = result;
        history.push(expression + ' = ' + result);
        updateHistory();
    } catch  {
        
    }
}

function updateHistory() {
    var historyElement = document.getElementById('history');
    historyElement.innerHTML = '';
    for (var i = 0; i < history.length; i++) {
        var entry = document.createElement('div');
        entry.textContent = history[i];
        historyElement.appendChild(entry);
    }
}

function kollaKod() {
    var inmatadKod = document.getElementById("kodInput").value;
    var fordefinieradKod = "2333"; // Fördefinierad kod

    if (inmatadKod.trim() === "") {
        // Om fältet är tomt, gör inget
        return;
    }

    const express = require('express');
const app = express();

// Definiera din serverlogik här

const port = 2333; // Ange portnummer här

app.listen(port, () => {
    console.log(`Servern lyssnar på port ${port}`);
});

var kodvar = 2333;
    
        // Om inmatad kod är "2333", göm resultatet efter 2 sekunder
        if (inmatadKod === kodvar) {
            document.getElementById("resultat").innerHTML = "<h3>FE adimisratör (lätt) <img src='imgs/las.png'><p>Vi på FE adimisratör vi kan se sak som man inte kan se om man är medlem i FE. <br> <br> <h3>Till inlogning för adimisratör på FE (svår) <br> <br> <a href='login2.html' onclick='login2.html.com()'>login till adimisratör-sidan (svår)</p>"
            ;
        }
        
        let inputValid = false;

        while (!inputValid) {
            let input = prompt(int("Ange koden till inlogningen:"));
        
            if (input === "FE-2333") {
                inputValid = true;
                
            } else {
                window.href="FE.html";
                console.log("Fel kod.")
            }
        }
        

        if (inmatadKod === "2333") {
            setTimeout(function() {
                document.getElementById("kodInput").innerHTML = "";
            }, 3000);
        }
    }

// Hämta referensen till inmatningsfältet med id "kodInput"
const kodInputFält = document.getElementById("kodInput");

// Lägg till en händelselyssnare för inmatningsfältet som lyssnar på "input" -händelsen
kodInputFält.addEventListener("input", function() {
    // Hämta värdet från inmatningsfältet
    const inmatningsvärde = kodInputFält.value;
    
    // Utför åtgärder baserat på inmatningsvärdet
    console.log("Användaren skrev: " + inmatningsvärde);
    // Här kan du till exempel utföra en åtgärd som att konvertera inmatningsvärdet till stora bokstäver och visa det på sidan
    // document.getElementById("output").textContent = inmatningsvärde.toUpperCase();
});


function fu83() {
    var var67 = document.getElementById("minElement").addEventListener("scroll", function name() {
    alert("Du scrollar nu")
}).classList.add("ny-class2").var93 = 1;

if (var93 = 1) {
    document.querySelector("#minElement").innerHTML = ("<p> var96 = 1 </p> <a href='login.html'>till FE-login och Startsida</a>")
var93 = 2
}

else if (var93 = 2) {
    confirm("OJ")
}
}


window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-123456789-1');
function fu52() {
    // Hämta referensen till nedräkningsräknaren
var nedraknare = document.getElementById('nedraknare');

// Sätt startvärdet för nedräkningsräknaren
var sekunder = 100;

// Uppdatera nedräkningsräknaren varje sekund
var nedrakningsIntervall = setInterval(function() {
  // Visa antalet sekunder
  nedraknare.textContent = sekunder;

  // Minska sekunder med 1
  sekunder--;

  // Om nedräkningen är klar, visa "Klart!" och avbryt intervallen
  if (sekunder < 0) {
    nedraknare.textContent = "Klart!";
    clearInterval(nedrakningsIntervall);
  }
}, 1000); // Uppdatera varje sekund (1000 millisekunder)



}
  
function btnsifra() {
    var var038 = input("Skriven sifra")
}
document.getElementById("myForm").addEventListener("submit", function(event) {
    var checkBox = document.getElementById("checkBox");
    if (!checkBox.checked) {
      event.preventDefault(); // Förhindra att formuläret skickas om rutan inte är ikryssad
      alert("Du måste godkänna villkoren för att skicka formuläret.");
    }
  });

  
  function updateClock() {
    var hours = document.getElementById('hoursInput').value;
    var minutes = document.getElementById('minutesInput').value;
    var seconds = document.getElementById('secondsInput').value;
  
    // Format the time
    var timeString = hours.padStart(2, '0') + ':' + minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0');
  
    // Update the time display
    document.getElementById('time').innerText = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);

  function handleSubmit(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(event.target);
    
    // Convert form data to JSON
    const formJSON = Object.fromEntries(formData.entries());
    
    // Display form data
    console.log(formJSON);
    
    // Send form data to an email (requires server-side implementation)
    // Example: You would send this data to a server using fetch or XMLHttpRequest
    // and then the server would handle sending an email with this data.
    
    // For demonstration purposes, we'll just stringify the JSON and log it
    const jsonString = JSON.stringify(formJSON);
    console.log(jsonString);
    
    // Here you would send the form data to the server via AJAX or fetch
    // For example:
    // fetch('your-server-endpoint', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: jsonString,
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     console.log('Success:', data);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
}

// Funktion för att spara texten i en variabel
function sparaText() {
    var textInput = document.getElementById('textInput').value;
    // Spara texten i en global variabel
    window.sparadText = textInput;
}

// Funktion för att visa den sparade texten
function visaText() {
    var textContainer = document.getElementById('textContainer');
    var savedTextElement = document.getElementById('savedText');
    var errorMessageElement = document.getElementById('errorMessage');

    // Om det finns sparad text, visa den
    if (window.sparadText) {
        savedTextElement.textContent = window.sparadText;
        textContainer.style.display = 'block'; // Visa div-elementet
        errorMessageElement.style.display = 'none'; // Göm felmeddelandet
    } else {
        // Om ingen text finns, visa felmeddelande
        textContainer.style.display = 'none'; // Göm div-elementet
        errorMessageElement.style.display = 'block'; // Visa felmeddelandet
    }
}

// Hämta knappen för att uppdatera
var updateButton = document.getElementById('updateButton');

// Lägg till en händelselyssnare på knappen för att utföra uppdateringsfunktionen när den klickas på
updateButton.addEventListener('click', function() {
    // Plats för uppdateringsfunktionen
    location.reload(); // Exempel: Ladda om sidan för att uppdatera innehållet
});



// Hämta referens till lådan
var lada = document.getElementById("lada");

// Funktion för att flytta lådan uppåt
function flyttaUpp() {
  var nuvarandePosition = parseInt(lada.style.top) || 0;
  lada.style.top = (nuvarandePosition - 10) + "px";
}

// Funktion för att flytta lådan neråt
function flyttaNer() {
  var nuvarandePosition = parseInt(lada.style.top) || 0;
  lada.style.top = (nuvarandePosition + 10) + "px";
}

// Funktion för att flytta lådan åt vänster
function flyttaVanster() {
  var nuvarandePosition = parseInt(lada.style.left) || 0;
  lada.style.left = (nuvarandePosition - 10) + "px";
}

// Funktion för att flytta lådan åt höger
function flyttaHoger() {
  var nuvarandePosition = parseInt(lada.style.left) || 0;
  lada.style.left = (nuvarandePosition + 10) + "px";
}

// Check if user is logged in
function checkLogin() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Redirect to login page if user is not logged in
function redirectToLogin() {
    if (!checkLogin()) {
        window.location.href = 'login.html';
    }
}

// Redirect to admin page if user is logged in
function redirectToAdmin() {
    if (checkLogin()) {
        window.location.href = 'admin.html';
    }
}

// Login function
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example validation (replace with your own)
    if (username === 'admin' && password === 'password') {
        localStorage.setItem('isLoggedIn', 'true');
        redirectToAdmin();
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid username or password';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    redirectToLogin();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    redirectToAdmin();
    document.getElementById('loginForm').addEventListener('submit', login);
    document.getElementById('logoutBtn').addEventListener('click', logout);
});

// Check if user is logged in
function checkLogin() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Redirect to login page if user is not logged in
function redirectToLogin() {
    if (!checkLogin()) {
        window.location.href = 'login.html';
    }
}

// Redirect to admin page if user is logged in
function redirectToAdmin() {
    if (checkLogin()) {
        window.location.href = 'admin.html';
    }
}

// Login function
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

var var369 = document.getElementById("submit");
var369.addEventListener("click", function fu827() {
    // Example validation (replace with your own)
    if (username === '@FEUE' && password === 'FE_UE') {
        document.querySelector("#login123adim").innerHTML= "<a href='Adim.html'>Adimisratör-sida (svår)";
    } else {
        document.querySelector('#errorMessage').innerHTML = '<p>FEL användarnamn, lösenord och att du har godkänt villkoren.</p>';
    }
})

    
}





function logout2() {
var var928 = confirm("Är du säker att du vill loggaut nu?")

    if (var928 == true) {
        // Logout function

    localStorage.removeItem('isLoggedIn');
    redirectToIndex();

    } else {
        var var9793937 = document.querySelector("#login123adim");
        var9793937.innerHTML= "Du tryckte på Avbryt, tryck på OK om du vill loggaut från adimisratör-panelen."
    }
}



// Redirect to index page
function redirectToIndex() {
    window.location.href = 'login2.html';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    redirectToAdmin();
    document.getElementById('loginForm').addEventListener('click', login);
    document.getElementById('logoutBtn').addEventListener('click', logout);
});

function checkCredentials() {
    // Hämta användarnamn och lösenord från formulärfälten
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Kontrollera användarnamn och lösenord (här kan du ha en databas med giltiga användarnamn och lösenord)
    if (username === "FEUE" && password === "FE_UE") {
      // Om inloggningsuppgifterna är korrekta, omdirigera användaren till den nya sidan
      window.location.href = "Adim.html";
      return false; // Förhindra formuläret från att skickas
    } else {
      // Om inloggningsuppgifterna är felaktiga, visa ett felmeddelande
      alert("Fel användarnamn eller lösenord!");
      return false; // Förhindra formuläret från att skickas
    }
  }
  
  function loggaut() {
        // Ändra webbadressen till den nya sidan
        window.location.href = "FE.html";
  }

  function translate() {
    const inputText = document.getElementById('inputText').value;
    const language = document.getElementById('languageSelect').value;
    
    fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY&q=${inputText}&target=${language}`)
      .then(response => response.json())
      .then(data => {
        const translatedText = data.data.translations[0].translatedText;
        document.getElementById('translatedText').innerText = translatedText;
      })
      .catch(error => console.error('Error:', error));
    }  
var var37837 = document.querySelector("#minElement");

    var37837.addEventListener("keydown", function(event) {
        if (event.key === "§") {
            console.log;("§-tangenten trycktes ned. Du kan bli hackad");
        }
    });




    var savedValue;

function saveInput() {
    savedValue = document.getElementById('inputField').value;
    console.log(savedValue); // Du kan göra vad du vill med värdet här
    if (saveInput == "FE") {
        var var72839 = document.getElementById("menyBarKod");
        var72839.innerHTML = ""
    } else {
        var va6362787 = document.getElementById("menBarKod");
        va6362787.innerHTML = "<p>Fel kod som du har skrivit in</p>"
    }
}



function farg() {
    var var1 = 1;

if (var1 = 1) {
    var2 = document.querySelector(".pvpFE-com").value;
    var2.style.cssText = 'background-color: green;';
    var1 = 2;
}
}

function farg2() {
if (var1 = 2) {
   var2.style.cssText = 'background-color: red;';
   var1 = 1; 
}
} 
// Hämta referenser till HTML-elementen
const clickBtn = document.getElementById('clickBtn');
const inputField = document.getElementById('inputField');
const hoverDiv = document.getElementById('hoverDiv');

// Lägg till en klickhändelse på knappen
clickBtn.addEventListener('click', function() {
  alert('Knappen har klickats!');
});

// Lägg till en händelse för ändring av text i textfältet
inputField.addEventListener('input', function() {
  alert('Textfältets värde ändrades:', inputField.value);
});

// Lägg till händelser för när musen går över och lämnar en div
hoverDiv.addEventListener('mouseenter', function() {
  hoverDiv.style.backgroundColor = 'lightblue';
});

hoverDiv.addEventListener('mouseleave', function() {
  hoverDiv.style.backgroundColor = '';
});


// Vänta tills dokumentet har laddats
document.addEventListener('DOMContentLoaded', function() {
    // Hitta alla prickar
    var dots = document.querySelectorAll('.dot');
  
    // Loopa igenom alla prickar
    dots.forEach(function(dot, index) {
      // Skapa en fördröjning baserat på pricks ordningsnummer
      var delay = index * 0.6 + 1;
      // Använd setTimeout för att visa pricks fördröjning
      setTimeout(function() {
        dot.style.animationDelay = delay + 's';
      }, 0);
    });
  });
  

  document.getElementById('loginForm').addEventListener('submit', function(event) {
  if (!document.getElementById('myCheckbox').checked) {
    event.preventDefault(); // Förhindra att formuläret skickas om checkbox inte är markerad
  }
});
var css2 = document.querySelector("css");
var var93728 = document.querySelector("#checkbox2").value;

if (var93728.checked) {
    css2.style.setProperty("background-color", "blue");
} else {
    css2.style.setProperty("background-color", "black"
);
}

function mail() {
    var var2672628538 = confirm("Du får inte ta bort/lägga till text i medelandet för utom där det står lägg till text, (ditt mail-program kommer att öppanas).")
}

function abcabc() {
    alert("färdig");
}
document.getElementById('myForm123').addEventListener('submit', function(event) {
    event.preventDefault(); // Förhindra standardformulärskickning
  
    // Hämta värdet från namn- och e-postfälten
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    // Skapa en mailto-länk med e-postadressen och namnet
    var mailtoLink = 'mailto:' + email + '?subject=Meddelande från ' + name;
  
    // Hämta elementet där länken ska visas
    var mailtoContainer = document.getElementById('myForm123IdTillMailTo');
  
    // Skapa en <a>-tagg med mailto-länken
    var mailtoAnchor = document.createElement('a');
    mailtoAnchor.href = mailtoLink;
    mailtoAnchor.textContent = 'Skicka till dig';
  
    // Lägg till länken till containern
    mailtoContainer.appendChild(mailtoAnchor);
  });
  function generateDocument() {
    var inputValue = document.getElementById("inputField").value;
    var doc =  "" + inputValue + "";
    var dataUri = "data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64," + btoa(doc);
    var link = document.createElement("a");
    link.href = dataUri;
    link.download = "index.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function visaAlert(tangent) {
    alert("Du tryckte ned tangenten: " + tangent + "\nTryck OK för att fortsätta.");
    document.addEventListener('keyup', function(event) {
        if (event.key === tangent) {
            visaAlert(tangent); // Anropa funktionen igen om samma tangent släpps
        }
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ScrollLock') {
        visaAlert('Scroll Lock');
    } else if (event.key === 'Pause') {
        visaAlert('Pause');
    } else if (event.key === 'NumLock') {
        visaAlert('Num Lock');
    }
});
function windowsOpen() {
    var windowsOpen = window.open('https://www.feue.webber.se', '_blank');
}
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
function fu12 () {
var json_2 = confirmShown("jdsfghsjekh");
}
function label_confirm (){
    /* detta kommer att inehola lösenord till användare obehöriga kolla ej */
    var label_comfirm = 1;
    var label_comfirm_2 = "a";
    while (label_comfirm < 101){
        /* lösenorden */
        console.info("lösenorden:");
        var losenordLog = console.log(label_comfirm);
        label_comfirm++;
    }
    function ersättBokstav(sträng) {
        // Använd replace() metoden för att byta ut alla förekomster av "a" med "ö"
        var nySträng = sträng.replace(/a/g, "ö");
        return nySträng;
    }
    
    // Exempel på användning:
    var originalSträng = "Detta är en sträng med några a:or.";
    var ersattSträng = ersättBokstav(originalSträng);
    console.log(ersattSträng); // Resultatet kommer att vara: "Detto är en sträng med någrö ö:or."
    ersättBokstav();    
}

// Nu MOP interacktivitet
// allt att spara
var MOP = document.querySelector("#MOP");
var conterner = document.querySelector(".conterner");
var hiden_input_MOP = document.querySelector("#main_animation");
var canvas = document.querySelector(".canvas");
var h2_MOP = document.querySelector(".blue_MOP");
var textarea_MOP = document.querySelector("#textarea_MOP");
var main_Model_Of_Project = document.querySelector("#main_Model_Of_Project");
var main_MOP = document.querySelector("#main_MOP");
// till js kod med detta

MOP.addEventListener("click", function (){
    var text_MOP = '"Skriv om MOP"'
    var MOP_clicket = comfirm("Fyll i textarea:an och " + text_MOP);
});
var inner_var = {
    x: 50,
    y: 50,
    speed: 3,
    color: "red",
    size: 20
}
function inner_var() {
    var alert_inner_var = window.new.comfirm("Ja eller nej?");
    if (alert_inner_var == true) {
        var var9890 = inner_var.x;
        alert(var9890);
    }
}
inner_var();

function mic_min() {
    var min_save = document.querySelector(".min");
    var min_save_clicked = confirm("Detta är Windows loggan i svart och rött.");
    
    if (min_save_clicked == true) {
      alert("Du klickade på OK.");
    } else {
      alert("Du klickade på Avbryt.");
    };
  };
function Ladda_sidan() {
    

    document.getElementById('download-button').addEventListener('click', function() {
        // Förberedd HTML-kod
        const htmlContent = `
        <!-- Detta är historiskt att rad 1 är en kommentar 31/3-2024 13:02 Dalarna Ludvika -->
        <!Doctype html>
        <div id="main2">
        <html id="minElement">
        <head>
        <style>/* Detta är historiskt att rad 1 är en kommentar 31/3-2024 13:02 Dalarna Ludvika */
        body, html {
            border: 3px solid rgb(0, 0, 0);
            width: 700px;
            margin: 0 auto;
            background-color: rgb(17, 202, 131);
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: 10px;
            margin-right: 10px;
            padding-left: 15px;
            padding-top: 15px;
            padding-bottom: 15px;
            padding-right: 15px;
            
        }
        
        body:active {
            background-color: #000000;
            color: black;
        }
        
        .container {
            position: relative;
            width: 200px;
            height: 417px;
            text-indent: 30px;
            border: #000 solid 6px;
          }
          
          .box {
            width: 200px;
            height: 200px;
            background-color: blue;
            border: #000 solid 5px;
            transition: transform 0.3s ease-in-out;
          }
          
          .hidden-box {
            border: #000 solid 5px;
            width: 200px;
            height: 203px;
            background-color: red;
            position: absolute;
            top: 0;
            left: 0;
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
            visibility: hidden;
          }
          
          .container:hover .box {
            transform: translateY(100%);
          }
          
          .container:hover .hidden-box {
            transform: translateY(0);
            visibility: visible;
          }
          
        #var {
            background-color: #1ceb95;
            color: red;
            padding: 10px;
            margin: 20px;
            width: 650px;
            height: 150px;
            position: absolute;
            word-wrap: break-word;
            text-overflow: clip;
            text-align: center;
            text-decoration: underline overline;
            text-decoration-color: #f90505;
            text-align: left;
            text-transform: uppercase;
            text-indent: 50px;
            border: #000 solid 10px;
            border-radius: #000 solid 10%;
            text-overflow: ellipsis;
            text-shadow: 1px 1px 1px #000;
            text-justify: inter-word;
            text-rendering: optimizeLegibility;
            text-size-adjust: none;
            
        }
        
        #var a {
            src:url(https://www.feue.webber.se);
        }
        
        .getElementById {
            background-color: red;
        }
        
        .getElementById:hover {
            cursor: cell;
        }
        
        .getElementByj {
            background-color: #f90505;
        }
        
        .getElementByj:hover {
            cursor: help;
        }
        
        .getElementByh {
            background-color: red;
        }
        
        .getElementByh:hover {
            cursor: not-allowed;
        }
        
        .getElementByTaggName {
            background-color: #f90505;
        }
        .getElementByTaggName:hover {
            
            cursor: url('imgs/Free_Sample_By_Wix.jpg'), auto;
        }
        header {
            background-color: chocolate;
        }
        
        #minElement {
            margin-left: -400px;
            left: 50%;
            position: absolute;
            width: 700px;
            background-color: rgba(21, 236, 168, 0.267);
            text-align: center;
            background-image: url("https://player.vimeo.com/video/683859882?background=1&dnt=1");
            background-size: 30px; /* Anpassa bakgrundsbilden efter fönstrets storlek */
            margin-top: 25px;
            margin-bottom: 25px;
            text-overflow: clip;
            word-wrap: break-word;
            flex: auto;
            height: 10000px;
        }
        
        #minElement:hover {
          background-color: aquamarine;
        }
        body:hover {
          background-color: aqua;
        }
        
        
        #bild3 {
            width: 800px;
            height: 175px;
            
        }
        
        #mainBox {
            background-color: rgb(0, 227, 114);
            word-wrap: break-word;
            padding: 10px;
            position: absolute;
            margin-top: 215px;
            width: 780px;
            height: 545px;
            overflow-y: scroll;
            overflow-x: scroll;
        }
        
        
        
        #main {
            width: 800px;
            height: 800px;
            position: absolute;
            left: 50%;
            margin-left: -400px;
        
        }
        
        
          
        
          
        div {
        font-size: 12px;
        border: 3px solid black;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        
        ;
        }
        
        nav {
        color: #aee8a6;
        font-size: 12px;
        padding: 2px;
        }
        
        h2 {
            font-size: 35px;
        color: blue;
        margin: auto;
        }
        
        h1 {
        font-size: 70px;
            color: #f90505;
            margin: 0;
        }
        
        #form {
            color: red;
        }
        
        p {
            color: black;
        font-size: 12px;
        }
        
        
         #menyBar {
            font-size: 13px;
            color: black;
            background-color: whitesmoke;
            width: 175px;
            height: 25px;
            position:absolute;
        
        }
        
        #menyBar dl {
            display: inline;
        }
        
        #menyBar li {
            height: 25px;
            display: inline;
            text-align: center;
            margin-right: 90px;
            float: left;
        }
        
        #menyBar button {
            height: 25px;
            display: inline;
            text-align: center;
            margin-right: 90px;
            float: left;
            background-color: red;
        }
        
        #menyBar a:link {
            border-left: 1px solid black;
            border-right: 1px solid black;
            border-radius: 10px solid black;
            background-color: blue;
            text-decoration: none;
            color: #ff0000;
            width: 78px;
            height: 25px;
            font-size: 13px;
            position: absolute;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        
        }
        
        #menyBar a:visited {
            background-color: blue;
            color: red;
            text-decoration: none;
            border-left: 1px solid black;
            border-right: 1px solid black;
            border-radius: 10px solid black;
        }
        
        ul {
            list-style-type: none;
        }
        
        
        .square {
            width: 100px;
            height: 100px;
            background-color: red;
            position: relative;
            animation: move 5s infinite alternate; /* Namnet på animationen, tid, upprepning och riktningsväxling */
          }
          .element {
            width: 100px;
            height: 100px;
            background-color: red;
            position: relative;
            animation: scaleRotate 3s infinite alternate,
                       colorChange 2s infinite alternate,
                       blurText 1s infinite alternate,
                       shadowMove 2s infinite;
          }
          
          /* Nyckelram för skalning och rotation */
          @keyframes scaleRotate {
            0% {
              transform: scale(1) rotate(0deg);
            }
            50% {
              transform: scale(1.5) rotate(180deg);
            }
            100% {
              transform: scale(1) rotate(360deg);
            }
          }
          
          /* Nyckelram för färganimation */
          @keyframes colorChange {
            0% {
              background-color: red;
            }
            50% {
              background-color: blue;
            }
            100% {
              background-color: green;
            }
          }
          
          /* Nyckelram för textskuggaanimation */
          @keyframes blurText {
            0% {
              text-shadow: 0px 0px 5px rgba(0,0,0,0.5);
            }
            100% {
              text-shadow: 0px 0px 20px rgba(0,0,0,0.5);
            }
          }
          
          /* Nyckelram för skugganimation */
          @keyframes shadowMove {
            0% {
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            }
            50% {
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            }
            100% {
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            }
          }
          @keyframes move {
            0% {
              left: 0;
              background-color: #05f9c4;
            }
            25% {
              left: 30px;
              background-color: #903922 
            }
            50% {
                left: 500px;
                background-color: #f90505;
            }
            75% {
              left: 50px;
              background-color: #369;
            }
            100% {
              left: 200px;
              background-color: #000;
            } 
          }
          
        #menyBar a:hover {
            background-color: red;
            color: blue;
        
        }
        
         #visualizer {
                width: 100%;
                height: 200px;
                background-color: #f0f0f0;
            }
        
        a {
            background-color: yellow;
            color: blue;
            font-size: 13px;
            border: 2px dotted red;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            cursor: pointer;
        }
        a :hover {
            text-decoration: underline;
            color: #000000;
            font-size: 20px;
            cursor: move;
        }
        
        a :active {
            color: #f90505;
            cursor: pointer;
        }
        .lank {
            font-size: 14px;
        }
        
        section {
            border: 3px solid black;
            padding: 11.5px;
        
        }
        
        #bild {
            background: black;
            border: 5px rgb(255, 255, 255);
            margin: 0;
            width: 78.4%;
        }
        
        
        
        img {
            max-width: 100%;
        }
        
        img:hover {
            cursor: move;
        }
        
        input {
            margin: auto;
        
        }
        
        #menyBar input[type="Text"] {
            background-color: greenyellow;
            color: red;
            border-radius: 10px black solid;
            font-size: 13px;
            font-weight: bolder;
            font-style: italic;
            padding: 5px;
            margin: 10px;
            width: 700px;
            text-overflow: clip;
            word-wrap: break-word;
            text-indent: 30px;
            text-decoration: overline underline;
            text-decoration-color: #05f9c4;
            font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif';
        }
        
        
        
        #menyBar input[type="Text"]:hover {
        background-color: red;
        }
        .dot-container {
            display: flex;
            justify-content: space-between;
            
          }
        
          #menyBar button {
            width: 200px;
            height: 100px;
        background-color: red;
        color: #000;
        cursor: pointer, var(#369);
        padding: 20px;
        margin: 15px;
        
          }
        
          #submitButton {
            cursor: not-allowed; /* Förhindra klick när checkbox inte är markerad */
          }
          
          #myCheckbox:checked + #submitButton {
            cursor: pointer; /* Tillåt klick när checkbox är markerad */
          }
          
         
          
          /* Ändra färg på .box när checkboxen är markerad */
          #toggleBtn:checked ~ .box123 {
            background-color: red;
          }
          
          a:active {
        background-color: black;
        color: white;
          }
        
          button:active {
        background-color: #ffffff;
        color: #000;
        
          }
        
        .min {
          width: 300px;
          height: 300px;
          position: relative;
          background-color: red;
          margin: 20px;
          padding: 20px;
          border: 10px solid black;
        }
          .box56 {
            width: 150px;
            height: 150px;
            background-color: red;
            
            top: 100%;
            left: 50%;
            bottom: 30%;
            right: 30%;
            margin-left: 50%;
            margin-bottom: px;
            
            transform: translate(-50%, -50%);
            animation: moveBox 3s infinite alternate;
          } /* 1600 * 900px */
          
          @keyframes moveBox {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
          .dot {
            width: 20px;
            height: 20px;
            border-radius: 28px;
            background-color: black;
            animation: moveDot 3s infinite alternate;
            color: #fff;
          }
          
          @keyframes moveDot {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(100px);
              opacity: 0;
            }
          }
        
          
          
        fieldset {
            text-align: center;
        }
        
        #textarea {
            width: 100%;
        }
        button {
            background-color: #f90505;
            font-size: 15px;
            font-family: 'Courier New', Courier, monospace;
            color: rgb(245, 240, 244);
            cursor: pointer;
        }
        
        #jujy {
            background-color: purple;
        }
        
        header {
            border: 10px solid black;
            color: darkgreen;
            font-size: 15px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
        
        footer {
            border: 10px solid black;
            font-size: 15px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
        
        #lpl {
            text-decoration: solid;
            text-transform: uppercase;
            color: red;
            font-family: cursive;
            font-size: 14px;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            background-color: yellow;
        }
        
        * {
            border-radius: 4px solid rgb(0, 0, 0);
        
        }
        
        
        .vcv {
        border: 3px solid white;
        width: 257px;
        
        }
        
        section p {
            background-color: cornflowerblue;
        }
        
        p a {
            background-color: green;
        }
        
        #cd {
            color: white;
        }
        
        table, td, tr {
            margin: auto;
            padding: 5px;
            border: 3px solid black;
            color: #000;
            font-size: 13px;
            font-family: 'Courier New', Courier, monospace;
        }
        
        nav div p {
            background-color: green;
            font-size: 13px;
            font-family: verdana;
            border: 3px solid black
            color white;
            }
            
            nav p, h3 {
            color: purple;
            background-color: ljusblå;
            font-size: 12px;
            font-family: verdana;
            }
            
           
        
            .form{
                color: #f90505;
            }
        
            span {
                color: #f90505;
            }
            
            .btn-knap {
                background-color: blue;
                
            }
        
            #id3 {
                background-color: green;
                margin: auto;
                width: 680px;
            }
        
            a:link {
                color: #05cc8d;
                text-decoration: line-through;
            }
        
            a:hover {
                font-weight: bold;
                text-decoration: none;
                color: rgb(0, 0, 0);
                
            }
        
            a:visited {
                color: #05cc8d;
                text-decoration: line-through;
            }
        
            #id3:hover {
                margin: auto;
                width: 680px;
                background-color: purple;
            }
        
            .class3 {
                display: flex;
            }
        
            .box1 {
               margin: auto; 
               width: 300px;
               border: 5px solid red;
               padding: 10px;
               color: white;
               background-color: black;
               flex: 2;
               order: 2;
            }
        
            .box2 {
                margin: auto; 
                width: 300px;
                border: 5px solid rgb(107, 2, 130);
                padding: 10px;
                color: white;
               background-color: black;
               flex: 1;
               order: 1;
             }
        
             .box3 {
                margin: auto; 
                width: 300px;
                border: 5px solid rgb(0, 255, 4);
                padding: 10px;
                color: white;
               background-color: black;
               flex: 1;
               order: 3;
             }
        
             .class4 {
                margin: 20px;
             }
        
             .class5 {
                font-size: 13px;
                margin: auto;
             }
        
             #id4 {
                border: white solid 3px;
             }
        
             #medelande {
                width: 200px;
             }
        
             .Startsida {
                background-color: aliceblue;
             }
        
            .form2 img {
                width: 10%;
            }
        
            .google {
                width: 50px;
            }
        
            .form2 {
               
               height: fit-content; 
               padding: 2cm;
               overflow: 1px;
            }
        
            .loggin2 {
           
                align-items: center;
                justify-content: center;
            }
        
            .namn2 {
                border: #000 3px solid;
            }
        
            .kakor {
                background-color: lightblue;
            }
          
            .Tilläg {
               background: rgb(155, 25, 157);
            }
        
            a:link {
                color: green;
            }
        
        
            .HEJclasen {
                background-color: #ff0000;
            }
        
            #id7 {
                background-image: url(https://player.vimeo.com/video/683859882?background=1&dnt=1box3);
            }
        
        
            #rubrik2 {
                background-color: #05cc8d;
                
            }
            .ny-class {
              color: red;
              font-size: 100px;
              font-family: verdana;
            }
        
            .calculator {
                width: 200px;
                margin: 100px auto;
                padding: 10px;
                border-radius: 5px;
              }
              
              .calculator #display {
                width: calc(100% - 20px);
                margin-bottom: 10px;
                padding: 5px;
                font-size: 18px;
              }
              
              .calculator .buttons {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 5px;
              }
              
              .calculator .buttons button {
                padding: 10px;
                font-size: 18px;
                border: none;
                background-color: #000000;
                cursor: pointer;
              }
              
              .calculator .buttons button:hover {
                background-color: #000000;
                color: #ffffff;
              }
        
              
              
              #container {
                text-align: center;
                margin-top: 50px;
            }
            
            #kodInput {
                padding: 10px;
                margin-right: 10px;
            }
            
            button {
                padding: 10px 20px;
                cursor: pointer;
            }
        
            
            #nedraknare {
                font-size: 3em;
                text-align: center;
              }
        
             button {
                border-radius: 10px;
             }
        
             input {
                border-radius: 10px;
                color: black;
             }
        
             .clock {
                font-size: 24px;
                text-align: center;
                margin-bottom: 20px;
              }
              
              .clock input {
                width: 50px;
              }
              
              .time {
                font-size: 36px;
                text-align: center;
              }
              
              body {
                font-family: Arial, sans-serif;
            }
            form {
                max-width: 600px;
                margin: 0 auto;
            }
            label {
                display: block;
                margin-bottom: 5px;
            }
            input[type="text"], input[type="email"], input[type="date"], input[type="password"], select {
                width: 100%;
                padding: 8px;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }
            input[type="submit"] {
                background-color: #4CAF50;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            input[type="submit"]:hover {
                background-color: #45a049;
            }
        
            #myForm {
                background-color: purple;
            }
        
           .text {
            font-size: 15px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            text-align: center;
            text-decoration: underline;
            text-decoration: overline;
            text-decoration-color: #f90505;
            text-indent: 30px;
           }
        
           .text:hover {
            font-size: 15px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            text-align: center;
            text-decoration: none;
            text-decoration-color: #f90505;
            text-indent: 30px;
           }
        
        #Ny_selleckt {
          height: 350px;
        }
           
        #hur_kan_man {
          transform: rotateY('angle');
          transition: initial;
          animation: alternate;
          color: red;
          background-color: #369;
          position: absolute;
          text-align: center;
          text-overflow: clip;
          text-decoration: overline underline;
          text-decoration-color: red;
          word-wrap: normal;
          word-break: normal;
          widows: initial;
          src: url("https://www.feue.webber.se");
          display: inline;
          font-size: 13px;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font: verdana;
          font: 900px;
          font-display: initial;
          width: 175px;
          height: 300px;
          margin-top: 10px;
          margin-bottom: 10px;
          margin-left: 10px;
          margin-right: 10px;
          border-top-left-radius: 10px #000 solid;
          border-left: #000 4px solid;
          border-bottom: #000 4px solid;
          padding-left: 15px;
          padding-top: 15px;
          padding-bottom: 15px;
          padding-right: 15px;
        }
        
        .container {
            width: 300px;
            margin: 100px auto;
            text-align: center;
        }
        
        input[type="text"],
        input[type="password"],
        button {
            display: block;
            width: 100%;
            margin-bottom: 10px;
            padding: 10px;
        }
        
        .error-message {
            color: red;
        }
        
        /* pyinstaller --onefile FE.py */
        
        #sidoBar {
          flex: 0 0 200px;
          border-radius: 10px;
          width: 40px;
          height: 60px;
          margin: 10px;
          right: 50px;
          word-wrap: break-word;
          background-color: burlywood;
          text-align: center;
          text-decoration: underline overline;
          font-size: 13px;
          src: format("https://www.feue.webber.se");
          font-family: verdana;
          display: block;
        }
        
        #hiden {
          display: none;
        }
        
        #MOP {
          position: relative;
          display: grid;
          background-color: #369;
          margin-left: 700/2px;
          text-align: center;
        }
        #MOP:hover {
          background-color: rgb(8, 25, 42);
        }
        .blue_MOP {
          color: #143429;
          background-color: #05f9c4;
        }
        .blue_MOP:hover {
          background-color: mediumaquamarine;
          color: #000;
        }
        .canvas {
          width: 175px;
          background-color: rgb(91, 48, 131);
          border-radius: 3%;
          height: auto;
          pointer-events: all;
          transition: cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          padding: 20px;
          container: x;
          margin: 20.845px;
        }
        canvas:hover {
          background-color: rgb(91, 65, 91);
        }
        .main_animation {
          animation: moveDot 3s infinite alternate;
          height: auto;
          background-color: rgb(75, 64, 42);
          color:rgb(0, 227, 114);
          margin: 24.4px;
          position: relative;
          padding: 15px;
          margin: 15px;
          width: 175px;
        }
        .main_animation:hover {
        color: rgb(56, 118, 89);
        background-color: gold;
        }
        
        #main_MOP {
        width: 250px;
        height: auto/2px;
        background-color: #903922;
        }
        #main_MOP:hover{
          background-color: #3b211a;
        }
        #main_MOP.canvas {
          width: 300px;
        }
        
        #textarea_MOP {
          width: 300/4px;
          height: auto/4px;
          background-color: rgb(254, 255, 205);
          color: red;
        }
        #textarea_MOP:hover {
          background-color: #143429;
          color: whitesmoke;
        }
        #textarea_MOP::placeholder {
          background-color: #000;
          color: #ccc;
        }
        #textarea_MOP:hover::placeholder {
          background-color: #ccc;
          color: #000;
        }
        #textarea_MOP.text:hover {
          background-color: #369;
          color: #1ceb95;
        }
        @keyframes moveCanvas {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(50px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(100px);
            opacity: 0;
          }
        }
        #TIC {
          background-color: #000;
        }
        #TIC:hover {
          background-color: #05cc8d;
        }
        #TIC:active {
          background-color: #05f9c4;
        }
        #TIC:checked {
          background-color: #341418;
        }
        
        .spiner {
          background-color: orangered;
          height: 200px;
          width: 200px;
          border-radius: 50%;
          border: 25px solid white;
          border-top: 20px solid indigo ;
          animation: ani 2.5s linear infinite;
        margin: auto;
          
        }
        
        @keyframes ani{
          to{
            transform: rotate(360deg);
          }
        }</style>
              <noscript src="app.js"></noscript>
        <script src="pvp.js" type="text/javascript"></script>
        <link rel="manifest" href="FE.jsonc">
        <noscript src="FE.jsonc"></noscript>
        <meta rel="manifest" href="FE.jsonc">
        <script src="FE.jsonc"></script>
              <link rel="stylesheet" href="UE.css">
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="description" content="Dena FE-html css och javascript hemsida kommer att ha nya saker för FE-HCJ. (FE står för: 'Förenta Evelutionerna- HTML CSS och Javascript')">
              <meta name="author" content="Nils Efverman och FEUE">
              <meta property="og:title" content="FE &#169; &#174; &#8482;">
              <meta property="og:description" content="FE är ett socialt nätvärk i Linköping. Förenta Evelutionerna i samarbete betalt med FE-HCJ">
              <meta property="og:image" content="imgs/Free_Sample_By_Wix.jpg">
              <meta property="og:type" content="FE och FE-HCJ">
              <meta name="apple-mobile-web-app-capable" content="yes">
              <meta name="apple-mobile-web-app-status-bar-style" content="FES">
              <meta name="theme-color" content="red">
              <meta name="robots" content="index, follow">
              <meta name="generator" content="WordPress">
              <meta http-equiv="content-language" content="sv">
              <meta http-equiv="refresh" content="6000000; URL='https://feue.webber.se'">
              <link rel="icon" sizes="32x32" href="Icon/Free_Sample_By_Wix.ico" type="image/icon">
              <link rel="icon" sizes="32x32" href="Icon/Free_Sample_By_Wix.ico">
              
        
             
        
        
              
             
        
        
              <div style="font:size 12px;"> </div>
                    <title style="color: green">FÈUE &#169; &#174; &#8482;</title>
        </head>
        
        <body>
        <sidhud>FE</sidhud>
        <div id="history">
              <div id="mailBox" class="text">
        <p class="rattFE" class="felFE"></p>
        <br>
        <br>
        <header>FE 2021 &#169; &#174; &#8482; <a href="FE.html" class="Startsida"><img src="imgs/Free_Sample_By_Wix.jpg"></a><a href="mailto:feue.com1@outlook.com?subject=FE post från FE.html&body=FE mdelande Skriv ditt medelade här under:" onclick="mail()">E-posta FE</a>
        <div id="sidoBar">SidoBar</div>
        <div class="dot-container">Laddar</header>
          
              <div class="dot">FÈUE</div>
              <div class="dot">FÈUE</div>
              <div class="dot">FÈUE</div>
              <div class="dot">FÈUE</div>
              <div class="dot">FÈUE</div>
            </div>
        <button onmouseover="rubrik()">
              <h1 style="color: blue; font-size: 100px; font-family: verdana;" class="h1fe" id="rubrik2">FE &#169; &#174; &#8482;</h1>
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="min bi bi-microsoft" viewBox="0 0 16 16" onclick="mic_min()">
              <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z"/>
            </svg>
            <div id="kalkulator">
        
            </div>
            <div id="kalkulator_ja_eller_nej">
        
            </div>
            <p id="btn_areey">
                <button onclick="areey()">Klicka här</button>
            </p>
            <div id="menyBar" ><nav>
                          <ul>
        
        
                                <h3 class="class4">Meny</h3>
                                <br>
                                <br>
                             <p><li><a href="login.html" class="Startsida"><button>LIPFE<br><br></button></a> </li>  </p> 
                                <br>
                                <br>
                                <br>
                                <br>
                                <br>
                                <br>
                                <p><li><a href="FE2.html" class="Startsida"><button>VTNOFE<br><br></button></a></li></p>
                                <br>
                                <br><br>
                                <br>
                                <br>
                                <br>
                               <p><li><a href="kontakt.html" class="Startsida"><button>FEK</button></a></li></p> 
                               <br>
                               <br>
                               <br>
                                <br>
                                <br>
                                <br>
                               <p><li><a href="Hjälp.html" class="Startsida"><button>Hjälp.html<br><br></button></a></li></p>
                               <br>
                               <br>
                               <br>
                                <br>
                                <br>
                                <br>
                                <p><li><a href="avtal.html" class="Startsida"><button>AHFE<br><br></button></a></li></p>
                    
        <button onclick="saveInput()">SPARA TILL MENY</button>
        
        <p id="menyBarKod"></p>
        </ul>
                    </nav></div>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> 
                    <br><br><br>
                    <h2>FE's sökmotor</h2>
                    <div>
                          <form id="searchForm" onsubmit="return submitForm()">
                                <input type="text" id="searchQuery" placeholder="Skriv in din sökning">
                                <input type="submit" value="Sök">
                            </form>
                    </div>
                    <br>
                    <h2>FE's AI</h2>
                    <div class="chat-container">
                          <div id="chat-box"></div>
                          <input type="text" id="user-input" placeholder="Skriv ett meddelande...">
                          <button id="send-btn">Skicka</button>
                        </div>
                    <aside class="class5">
                          hej
                          </aside>
                    <div>
                          <p>
                          <dl style="color: green" ;font-size:20px;font-famyily:verdna;>
                                <dt>FE</dt>
                                <dd> bra på so i sverige och i världen </dd>
                          </dl>
                          </p>
                    </div>
                    <a href="fe.html" class="FE" onclick="logSd()">FE</a>
                    <p id="id6">
        <URL><a href="http://feue.webber.se" target="_blank" rel="noopener noreferrer">En FE-hesida </FE-hesida></a></URL>
                    </p>
                     
        </body>
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Permission Buttons</title>
        </head>
        <body>
        
        <button onclick="aterkomst()">Återkomst</button>
        <script>
              function aterkomst() {
                    
              
          // Tillgång till GPS
         // function getGPSPermission() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                console.log("Tillåt åtkomst till GPS.");
              }, function(error) {
                console.error("GPS-åtkomst nekad: " + error.message);
              });
            } else {
              console.error("GPS-stöd saknas i den här webbläsaren.");
            }
          
        
          // Tillgång till kamera och mikrofon
          //function getCameraPermission() {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
              .then(function(stream) {
                console.log("Tillåt åtkomst till kamera och mikrofon.");
              })
              .catch(function(error) {
                console.error("Kamera och mikrofon-åtkomst nekad: " + error.message);
              });
          
        
          // Tillgång till filsystemet
         // function getFilesystemPermission() {
            if (window.File && window.FileReader && window.FileList && window.Blob) {
              console.log("Tillåt åtkomst till filsystemet.");
            } else {
              console.error("Filsystem-stöd saknas i den här webbläsaren.");
            }
          
        
          // Push-meddelanden
          //function getPushPermission() {
            Notification.requestPermission().then(function(permission) {
              if (permission === "granted") {
                console.log("Tillåt push-meddelanden.");
              } else {
                console.error("Push-meddelanden nekades.");
              }
            });
          
        
          // Tillgång till Bluetooth-enheter
          //function getBluetoothPermission() {
            navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
              .then(function(device) {
                console.log("Tillåt åtkomst till Bluetooth-enheter.");
              })
              .catch(function(error) {
                console.error("Bluetooth-åtkomst nekad: " + error.message);
              });
          
        
          // Tillgång till rörelsesensorer
          //function getMotionSensorPermission() {
            if (window.DeviceMotionEvent) {
              console.log("Tillåt åtkomst till rörelsesensorer.");
            } else {
              console.error("Rörelsesensor-stöd saknas i den här webbläsaren.");
            }
          
        
          // Tillgång till nätverksinformation
         
            if (navigator.connection) {
              console.log("Tillåt åtkomst till nätverksinformation.");
            } else {
              console.error("Nätverksinformation-stöd saknas i den här webbläsaren.");
            }
          }
        </script>
        
        </body>
        
        
        </body>
        </html>
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Filesystem Access</title>
        </head>
        <body>
        
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Motion and Network</title>
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Kameraåtkomst</title>
        </head>
        <body>
        
        <h1>Kameraåtkomst</h1>
        <video id="videoElement" width="400" height="300" autoplay></video>
        <button onclick="startCamera()">Starta kameran</button>
        
        <script>
        function startCamera() {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function(stream) {
                    var videoElement = document.getElementById('videoElement');
                    videoElement.srcObject = stream;
                })
                .catch(function(err) {
                    console.error('Kunde inte få åtkomst till kameran: ' + err);
                });
        }
        </script>
        
        </body>
        </html>
        
        
        
        <h2>skapa gif</h2>
        <img src="GIS/" alt="">
        <body style="color: black">
              <div style="color: black">
                    <p class="FE">
                          <br>
                          FE kan alltid stopa saker i samhället
                          <br>
                    </p>
                    <p>
                          UE <span id="lpl">Är</span> samma sak som FE
                          <br>
                    </p>
                    <p>
                          FE's låt <br>
                          <audio src="Musik/Min spelnings låt.mp3" controls id="id3"></audio>
                    </p>
              </div>
              <div>
                    <main>
                          <section id="bild">
                          
                                <img src="imgs/Free_Sample_By_Wix.jpg" alt="FE loggan ©" class="vcv" />FE loggan ©</a>
                          </section>
                          <section>
                                <p>
                                      <textarea id="textarea" cols="30" rows="10" placeholder="Skriv saker i detta fält och sen klicka på Klicka på mig!"></textarea>
                                      <button id="you">Klick på mig!</button>
                                </p>
                                <p id="edit-text">Din text kommer hit</p>
                                <p id="test"></p>
                                <p>
                                      <a href="download:FE.html" download>Ladda ner filen</a>
        
                                </p>
                                
        
                                <div>
                                
                          </section>
                    </main>
                    <a href="#" class="FE" onclick="FE()" onclick="mma()" class="lank">FE</a>
              </div>
              <div class="pvp">
        
              </div>
              
              <section>
                    <div class="pvp">
                         
                    </div>
                    <button value="Hej" onclick= "Function = BTN_Start2(BTN_Start2)">Hej</button>
                    
                    
                    <p>
                          Klicka på dena ruta för att komma nängst upp <a href="FE.html" class="FE" id="cd">FE</a>
                          </p>
                          <nav>
                                <div>
                                <p>
                                FE kan vara på två olika sätt de första sätt är att ”om (FE eller UE, FEF och UEF) chefers dokument indelning är på minneskort kan man spara lite pengar med ett minneskort på en TB-stort minneskort och med FE's USB-minne på 36 GB
                                </p>
                              <h4>All HTMLkod är dett </h4>
                              <p>
                                <nav>
                                      <div>
                                            <label for="Hejsan">
                                                  
                                            </label>
                                            <a href="fe.java" id="Hejsan">HTMLkod somgör dena hemsida</a>
                                      </div>
                                </nav>
                              </p>
                                </div>
                                </nav>
                                <div>
                                      <h5>
                                            Lista
                                      </h5>
                                     <ul id="ul1">
                                      <li>sak 1</li>
                                      <li>sak 2</li>
                                     </ul>
                                     
        <button id="btn3">Klick här</button>
                                </div>
                                
                                
              </section>
              <h2>test i css</h2>
              <div class="TIC" id="TIC">
                    <input type="checkbox">
              </div>
              <table>
                    <tr>
                          <td>
                              FE  
                          </td>
                          <td>
                                UE
                          </td>
                    
                    </tr>
                    <tr>
                          <td>
                                FE
                          </td>
                          <td>
                          UE
                          </td>
                    </tr>
                    <tr>
                          <td>
                              FE  
                          </td>
                          <td>
                                UE
                          </td>
                    
                    </tr>
                    <tr>
                          <td>
                                FE
                          </td>
                          <td>
                          UE
                          </td>
                    </tr>
              <tr>
                    <td>
                        FE  
                    </td>
                    <td>
                          UE
                    </td>
              
              </tr>
              <tr>
                    <td>
                          FE
                    </td>
                    <td>
                    UE
                    </td>
              </tr>
        
        
        
              </table><canvas>          <div id="MOP">
              <div class="div">
                    <div class="div">
                          <div class="div"><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div></div>
                    </div>
              </div>
                    <h2 class="blue_MOP">Model Of Project</h2>
        
                    <h3 class="blue_MOP">(Model Of Project 1 FÈUE Type Sing)</h3>
                    <div class="canvas">
                          <div class="canvas">
                                <div class="canvas" id="main_Model_Of_Project">
                                      <div class="canvas" id="main_MOP">
                                            <textarea name="Model_Of_Project_text" id="textarea_MOP" placeholder='Skriv vad du tycker om "Model Of Project" som FÈUE gör till en utgivare till almenheten?' cols="30" rows="10"></textarea>
                                      </div>
                                      <div class="canvas" id="main_animation"><input type="hidden" value="inputField_MOP"><img src="imgs/" alt="1:or och 0:or" srcset="7"></div>
                                      <div class="canvas" id="main_animation"><input type="text" placeholder="Skriv om MOP"></div>
                                      <div class="canvas" id="main_animation"><input type="hidden" value="inputField_MOP"></div>
                                      <div class="canvas" id="main_animation"><input type="text" placeholder="Skriv om MOP"></div>
                                      <div class="canvas" id="main_animation"><input type="hidden" value="inputField_MOP"></div>
                                      <div class="canvas" id="main_animation"><input type="text" placeholder="Skriv om MOP"></div>
                                      <div class="canvas" id="main_animation"><input type="hidden" value="inputField_MOP"></div>
                                      <div class="canvas" id="main_animation"><input type="text" placeholder="Skriv om MOP"></div>
                                      <div class="canvas" id="main_animation"><input type="hidden" value="inputField_MOP"></div>
                                      <div class="canvas" id="main_animation"><input type="text" placeholder="Skriv om MOP"></div>
                                      <div class="canvas" id="main_animation"><input type="hidden" value="inputField_MOP"></div>
                                      <div class="canvas" id="main_animation"><input type="text" placeholder="Skriv om MOP"></div>
                                      <div class="canvas" id="main_animation"><input type="hidden" value="inputField_MOP"></div>
                                      <div class="canvas" id="main_animation"><input type="text" placeholder="Skriv om MOP"></div>
                                      <div class="canvas" id="main_animation"><input type="hidden" value="inputField_MOP"></div>
        
                                </div>
                          </div>
                    </div>
              </div>
        </canvas> 
        
              <button onclick="btnbtnbtn()">addEventLister i JavaScript</button>
              <p id="btn4"></p>
        <button onclick="fu7()">Hjälp HTMLEN</button>
              <a href="FE.php">FE's PHP</a>
             <p>
              <p><a href="#" onclick="fu6()">javascript från AI</a></p>
              <a href="#" onclick="functionIJavascript()">Hej</a>
             </p>
             <p class="Javascript2"></p>
              <button id="helow" onclick="helow()">Info</button>
        
              <p><a href="feue.java">FE's Java</a></p>
        
        </body>
        </div>
        <body>
              <div class="class3">
                    <div class="box1" id="box1"> <button id="id4" onclick="Hjälp()">Hjelp</button></div>
                    <div class="box2">
                          <h2>FE & FE hacks</h2>
                          <p>
                                <img src="imgs/hakare.jpeg" alt="Hackare med en dator">   
                                      hackings gör samhället otyckt.
                             </p>
                       </div>
                       <div>
                          <b>
                                JavaScript är ett kodspråk som används med html
                          </b>
                          <b>
                                CSS är ett kodstil kodspråk som används med html
                          </b>
                          <b>
                                HTML är ett kodspråk som används med CSS och JavaScript
                                <img src="imgs/html.jpeg" alt="html:5">
                          </b>
                          <h2>HCJ</h2>
                          <div>
                                <img src="imgs/HCJ.jpeg" alt="HCJ">
                          </div>
                       </div>
                    </div>
                   <h3>FE's video</h3>
               
                          <h3>
                                FE kan försärkra dig med att du inte kan bli hakad på internet    
                              </h3>
                              <p>
                                För att inte bli hackad på internat kan du köra vår "Ctrl Alt Delete" 
                                <img src="imgs/Alt.jpeg" alt="Ctrl Alt Delete">
                                <button onclick="abcabc()">CAD</button>
                              </p>
                    </div>
                    <div id="visualizer"></div>
                    <button id="startRecording">Starta inspelning</button>
                    <button id="stopRecording">Stoppa inspelning och ladda ner</button>
                    <div class="square"></div>
        <div class="element"></div>
        
                    <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4uXocNcZx96XkuaqfE43HD?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <img src="imgs/epost_test.png" alt="atl">
                    <p>
                          med integrity <a href="vilkor.py">vilkor</a>
                          <input type="checkbox" value="ja till vilkoren">
                    </p>
                    <!--&#8734 är oändlighets tecknet, &#174 är rägisterat varumärke, &#169 är kopereringsförbjud, &#8482 är TM -->
              <h3>Windows uppgraderings test till Windows 10</h3>
              <button onclick="showConfirm()" id="Windows3">Windows uppgraderings test till Windows 10 BTN med FE-HCJ</button>
              <p>&#x1F512</p>
        <h3>spara din text i din dator och sen se det igen</h3>
              <p>
                    <textarea id="mittTextarea"></textarea>
        <button onclick="sparaText()">Spara</button>
        <button onclick="visaText()">Visa</button>
        <div id="visatext"></div>
        <h2>Hur kan man...</h2>
        <img src="imgs/Free_Sample_By_Wix.jpg" alt="Fe:s loggan">
        <p id="hur_kan_man">...göra ett eget företag med HCJ. <br>
        
        </p>
        <div id="olDiv">
              <p id="olP">
                    <ol class="ol-class" id="ol_id" type="I">
                              <li class="ol_class-li">
                                      1
                                </li>
                                <li class="ol_id-li">
                                      2
                                </li>
                                <li class="ol_id-li">
                                      3
                                </li>
                    </ol>
              </p>
        </div>
        <br><br><br><br><br><br><br><br><br>
                <h2>FE's miniräknare</h2>
                <div class="calculator">
                    <input type="text" id="display" readonly>
                    <div class="buttons">
                      <button onclick="appendToDisplay('(')">(</button>
                      <button onclick="appendToDisplay(')')">)</button>
                      <button onclick="appendToDisplay('%')">%</button>
                      <button onclick="appendToDisplay('7')">7</button>
                      <button onclick="appendToDisplay('8')">8</button>
                      <button onclick="appendToDisplay('9')">9</button>
                      <button onclick="appendToDisplay('+')">+</button>
                      <button onclick="appendToDisplay('4')">4</button>
                      <button onclick="appendToDisplay('5')">5</button>
                      <button onclick="appendToDisplay('6')">6</button>
                      <button onclick="appendToDisplay('-')">-</button>
                      <button onclick="appendToDisplay('1')">1</button>
                      <button onclick="appendToDisplay('2')">2</button>
                      <button onclick="appendToDisplay('3')">3</button>
                      <button onclick="appendToDisplay('*')">*</button>
                      <button onclick="appendToDisplay('0')">0</button>
                      <button onclick="appendToDisplay(',')">,</button>
                      <button onclick="saveToMemory()">Spara</button>
                      <button onclick="recallMemory()">Visa</button>
                      <button onclick="clearDisplay()">C</button>
                      <button onclick="calculate()">=</button>
                      <button onclick="appendToDisplay('/')">/</button>
                    </div>
                  </div>    
        
                  <b>HRJ</b>
              </p>
              <h2>Logga in som adimisratör</h2>
              <div id="container">
                    <input type="password" id="kodInput" placeholder="Skriv din kod här">
                    <button onclick="kollaKod()">Skicka</button>
                    <p id="resultat"></p>
                </div>
        <a href="#minElement">Höckst upp på sidan</a>
        <a href="FE.xml">FE's </a>
        <a href="FE.html" download="FE.html">Inställningar</a>
        <button onclick="btnsifra()">Skriv en sifra</button>
        <h3>FE adimisratör (lätt) <img src='imgs/las.png'><p>Vi på FE adimisratör vi kan se sak som man inte kan se om man är medlem i FE. <br> <br> <h3>Till inlogning för adimisratör på FE (svår) <br> <br> <a href='login2.html' onclick='login2.html.com()'>login till adimisratör-sidan (svår)</p>
                <h2>Nerräknare från 100 sekunder</h2>
        
                
            <button onclick="fu52()"><div id="nedraknare">100</div></button>   
            <div class="clock">
              <input type="number" id="hoursInput" min="0" max="23" placeholder="HH">
              <span>:</span>
              <input type="number" id="minutesInput" min="0" max="59" placeholder="MM">
              <span>:</span>
              <input type="number" id="secondsInput" min="0" max="59" placeholder="SS">
             
                    Skicka e-post
                </a>
                <textarea readonly style="display: none;">
                    Hej det här är ett meddelande.
                </textarea>
                <a href="mailto:feue.com1@outlook.com?subject=FE e-post från FE.html&body=FE-medelande från FE.html Skriv ditt medelande här under:">Skicka e-post till FE</a>
                
        
            </div>
            <div class="time" id="time"></div>
        <button id="clickBtn">Click Me</button>
        
          <div id="hoverDiv">Hover Over Me</div>
        
            <button id="updateButton">Uppdatera</button>
            <button id="mig5" onclick="fu83()">Test är altid best</button>
            <input type="checkbox">
        
            <a href="FE.rb"><button>FE's Ruby</button></a>
        <button onclick="farg()">endra färg</button>
        <button onclick="farg2()">endar färg igen</button>
            <p class="pvpFE-com"></p>
        <div id="var">s</div>
        <br><p id="css">CSS</p>
        <input type="checkbox" id="checkbox2">
        
            <h2>RÖD</h2>
            <input type="checkbox" id="toggleBtn">
              <label for="toggleBtn">Klicka här</label>
        <p class="box123">SD</p>
            <p class="getElementByj">s</p>
              <p class="getElementByh">s</p>
            <p class="getElementByTaggName">s</p>
            <p class="getElementById">s</p>
            <br><br><br><br><br><br><br>
            <div class="container">
              <div class="inner-container"> <div class="box">Ha musen på mig</div>
              <div class="hidden-box">Se, ta bort musen nu</div></div>
             
            </div>
            <div>
              <section id="Ny_selleckt">
                    <h2>Inledning för grunderna i html css och javascript</h2>
                    <p><img src="imgs/datbas.jpeg" alt="DataBasutveklingsbild"><br><b><i>med</i></b><br><img src="imgs/access.jpeg" alt="Microsoft 365 betal access datbas"><br> <b><i> kan vi gör hur mycket som helst</i></b><br></p>
              <h2>Enkelt ner laddnings inputvärde i html css och javascript</h2>
              <label for="">Hemside kod (använd inte inlängkad i ccs och js)</label>
        
              <label for="HCJ">HTML kod CSS JS i en</label>
              <br><br>
              
        
              <button onclick="generateDocument()">Generate Hemsida</button>
          <p>Test</p>
          <a href="path/till/FE.ini" download>a</a>
         <h2>Öppna feue.webber.se i ett ny fönster</h2>
        <button onclick="windowOpen()">Öppna feue.webber.se</button> 
        </section>
        
            </div>
            <h2>Error</h2>
            <!-- inte error men vad man kan göra om det är error -->
            <p>
              <img class="bild3" src="imgs/error.jpeg" alt="error">
            </p>
           <button onclick="label_confirm()">Anroppa</button>
            <br><br><br><br><br>
            <br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><div class="box56"><b><br><br><br><br>Animation<br> För <br> FE</b> </div><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br>
        <audio controls>
              <source src="Musik/Timeline 1.xml" type="audio/mpeg">
        </audio>
        <footer id="footer">FE 2021 &#169; &#174; &#8482;</footer>
        <p> &times; </p>
        <br> 
        <!-- <br> betyder 
              radbryt, <p> betyder styke, <div> betyder behålare, ex <div class="Kommentar test ex"> betyder att det är
              en klass som man kan ha flera gånger, <div id="Kommentar test ex"> betyder att man har ett id
              som man kan ha EN gång i HELA documentet, <button>EX</button> är en knapp nästan alla taggar har
              en slut-tagg som ex kan se ut så har "<div>
              <p> text lite mer text och lite till text </p></div>", <button onclick="Test funtion ex()" 
              > betyder att man kan klicka på knapen och aktivera en funtion i javascript som är in längkat, 
              <script src="Test script" type="text/javascript"></script> betyder att man längkar in javascript
              <img src="test blid" alt="hjälp text för dom som är synskadade eller att det är fel på blilden">
              betyder att det är en blild med en img-tagg som bara har en taggdel, <a href="www.feue.webber.se">
              din längk texten som du vill ha på längken, (detta är INGA ricktiga taggar), src="" står för
              source som är med i ex bilder, ljud, video och script document, href="" hypertext reference
              som är i längkar och i visa andra; (detta är ritia taggar nu) saker <video controls src="Musik/min
              spelnings låt.mp3">, <iframe src="Musik/min spelnings låt.mp3" är typ sama ska som <video src="">,
              <iframe src="Musik/Min spelnings låt.mp3" controls width="560" height="315" frameborder="0" allowfullscreen>
              </iframe><object data="imgs/bakrundsfarg.jpeg" type="application/jpeg" width="400" height="300"></object>, 
              indelningen det är dra om du har en mapp till HTML, JavaScript, C++, Python, php, SCC, Java
              och för Blider som heter IMGS, Video som hter Video, Musik som heter Musik och Gifs som heter GIF och 
              grund koden för HTML: <!DOCTYPE html><html lang="en"><head><link src="stale.css"><meta charset="UTF-8">
              <meta name="viewport"content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>
              <p> Test i bäst </p></body><script src="script.js"></script></html> (detta var inte alla taggar som finns)-->
                    <div id="hiden">
                          <a href="https://www.feue.webber.se/Info">script</a>
                          <article><p dir="rtl">
                                <a href="https://www.feue.webber.se">css</a>
                          </p></article>
                          <a href="https://www.feue.webber.se/Js">js</a>
                          <script type="module" src="search.php">$php = escape("ha hå");</script>
                          <script src="index.php"></script>
                    </div>
         
        <sidfot>FE</sidfot> 
        <br><script src="fe.js" type="text/javascript">
        function myFunction() {
            // Lägg till koden som ska köras varje gång funktionen anropas
            console.log('Denna funktion körs 30 gånger per sekund!');
        }
        
        // Ange tiden i millisekunder för hur ofta funktionen ska köras (1000 ms = 1 sekund)
        const interval = 1000 / 30; // Beräkna intervallet för 30 Hz
        
        // Använd setInterval() för att upprepa anropet till funktionen med det givna intervallet
        const timerId = setInterval(myFunction, interval);
        
        // För att stoppa upprepningen, kan du använda clearInterval() med timerId:
        // clearInterval(timerId);
        
        </script>
        <h2>Ladda ner sidan</h2>
        <button id="download-button">Ladda ner sidan</button>
        <noscript src="app.js"></noscript>
        <script src="pvp.js" type="text/javascript"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script><script src="https://smtpjs.com/v3/smtp.js"></script>
              <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <link rel="manifest" href="FE.jsonc">
        <noscript src="FE.jsonc"></noscript>
        <meta rel="manifest" href="FE.jsonc">
        <script src="FE.jsonc"></script>
        </body>
        </div>
        </div>
        </div>
        <script></script>
        </html>
        
        `;
    
        // Skapar en blob från HTML-koden
        const blob = new Blob([htmlContent], { type: 'text/html' });
    
        // Skapar en länk
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'forberedd_html.html';
    
        // Klickar på länken programmatisk för att initiera nedladdningen
        link.click();
    
        // Rensar upp URL-referensen
        URL.revokeObjectURL(link.href);
    });
}
var session = null;

$(document).ready(function() {
    var loadCastInterval = setInterval(function() {
        if (chrome.cast.isAvailable) {
            console.log('Chromecast has loaded.');
            clearInterval(loadCastInterval);
            initializeCastApi();
        } else {
            console.log('Chromecast is unavailable.');
        }
    }, 1000);
});

function initializeCastApi() {
    var applicationID = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
    var sessionRequest = new chrome.cast.SessionRequest(applicationID);
    var apiConfig = new chrome.cast.ApiConfig(sessionRequest, sessionListener, receiverListener);
    chrome.cast.initialize(apiConfig, onInitSuccess, onInitError);
}

function sessionListener(e) {
    session = e;
    console.log('New session');
    if (session.media.length != 0) {
        console.log('Found ' + session.media.length + ' sessions.');
    }
}

function receiverListener(e) {
    if (e === 'available') {
        console.log('Chromecast was found on the network.');
    } else {
        console.log('There are no Chromecasts available.');
    }
}

function onInitSuccess() {
    console.log('Initialization succeeded');
}

function onInitError() {
    console.log('Initialization failed');
}
// Asynkron funktion för att kombinera strängar och objekt
async function combineStringsAndObjects() {
  // Funktion för att uppdatera innerHTML på ett element med ID "JSON"
function updateInnerHTML(content) {
  let element = document.getElementById('JSON');
  if (element) {
    element.innerHTML += content + '<br>';
  }
}

  try {
    // Steg 1: Ta emot två strängar från användaren
    let str1 = await promptAsync('Ange första strängen:');
    let str2 = await promptAsync('Ange andra strängen:');

    // Steg 2: Hantera om användaren klickar på "Avbryt" eller lämnar fält tomma
    if (!str1 || !str2) {
      updateInnerHTML('Fel: En eller båda strängar är ogiltiga eller tomma.');
      return;
    }

    // Steg 3: Skapa två objekt från dessa strängar
    let obj1 = { str1 };
    let obj2 = { str2 };

    // Steg 4: Använd Object.assign() för att slå samman dessa objekt
    let combinedObj = Object.assign({}, obj1, obj2);

    // Steg 5: Använd Object.keys() och Object.values() för att extrahera nycklar och värden
    let keys = Object.keys(combinedObj);
    let values = Object.values(combinedObj);

    // Steg 6: Använd Object.entries() för att få en array med nyckel-värde-par
    let entries = Object.entries(combinedObj);

    // Visa nycklar, värden och nyckel-värde-par
    updateInnerHTML('Sammanfogat objekt:');
    updateInnerHTML('Nycklar: ' + JSON.stringify(keys)); // ['str1', 'str2']
    updateInnerHTML('Värden: ' + JSON.stringify(values)); // [värdet av str1, värdet av str2]
    updateInnerHTML('Nyckel-värde-par: ' + JSON.stringify(entries)); // [['str1', värdet av str1], ['str2', värdet av str2]]

    // Steg 7: Använd concat() för att kombinera de två ursprungliga strängarna
    let combinedStr = str1.concat(' ', str2);
    updateInnerHTML('Kombinerad sträng: ' + combinedStr); // 'FörstaSträng AndraSträng'

    // Steg 8: Skapa ett nytt objekt som använder Object.fromEntries() för att skapa ett objekt från nyckel-värde-par
    let newObjFromEntries = Object.fromEntries(entries);
    updateInnerHTML('Objekt från nyckel-värde-par: ' + JSON.stringify(newObjFromEntries));

    // Steg 9: Lägg till ytterligare egenskaper till det sammanfogade objektet
    combinedObj.timestamp = new Date().toISOString(); // Lägg till aktuell tid
    combinedObj.lengths = { str1Length: str1.length, str2Length: str2.length }; // Lägg till längder på strängarna

    // Steg 10: Djupgående sammanfogning av objekt med hjälp av en djupt sammanfogningsfunktion
    let additionalProps = {
      metadata: {
        createdBy: 'Användare',
        createdAt: new Date().toISOString()
      },
      details: {
        str1Upper: str1.toUpperCase(),
        str2Upper: str2.toUpperCase()
      }
    };
    let deepCombinedObj = deepMerge(combinedObj, additionalProps);

    // Visa det uppdaterade objektet
    updateInnerHTML('Uppdaterat sammanfogat objekt med extra egenskaper (djup sammanfogning):');
    updateInnerHTML(JSON.stringify(deepCombinedObj));

    // Steg 11: Visa alla egenskaper i objektet med en loop
    let properties = 'Alla egenskaper i det sammanfogade objektet:<br>';
    for (const [key, value] of Object.entries(deepCombinedObj)) {
      properties += `${key}: ${value}<br>`;
    }
    updateInnerHTML(properties);

    // Steg 12: Använd `Object.freeze()` för att frysa det sammanfogade objektet
    Object.freeze(deepCombinedObj);
    updateInnerHTML('Sammanfogat objekt efter frysning: ' + JSON.stringify(deepCombinedObj));

    // Försök att ändra en egenskap efter att objektet har frysts
    deepCombinedObj.newProperty = 'Ny egenskap';
    updateInnerHTML('Försök att lägga till ny egenskap efter frysning: ' + JSON.stringify(deepCombinedObj));

    // Steg 13: Regex-operationer på strängar
    let regex = /[a-zA-Z]+/g; // Regex för att hitta alla ord
    let str1Matches = str1.match(regex);
    let str2Matches = str2.match(regex);
    updateInnerHTML('Str1 matches: ' + JSON.stringify(str1Matches));
    updateInnerHTML('Str2 matches: ' + JSON.stringify(str2Matches));

    // Steg 14: Avancerad strängersättning
    let replacedStr1 = str1.replace(/(\s+)/g, '-'); // Ersätt mellanslag med bindestreck
    let replacedStr2 = str2.replace(/(\s+)/g, '-'); // Ersätt mellanslag med bindestreck
    updateInnerHTML('Första strängen med ersatta mellanslag: ' + replacedStr1);
    updateInnerHTML('Andra strängen med ersatta mellanslag: ' + replacedStr2);

  } catch (error) {
    updateInnerHTML('Ett fel inträffade: ' + error);
  }
}

// Asynkron funktion för att hantera prompt
function promptAsync(message) {
  return new Promise((resolve) => {
    let input = window.prompt(message);
    resolve(input);
  });
}

// Funktion för djupgående sammanfogning av objekt
function deepMerge(target, source) {
  if (typeof target !== 'object' || typeof source !== 'object') return source;

  for (const key of Object.keys(source)) {
    if (typeof source[key] === 'object' && source[key] !== null) {
      if (!target[key]) {
        target[key] = source[key];
      } else {
        deepMerge(target[key], source[key]);
      }
    } else {
      target[key] = source[key];
    }
  }
  return target;
}


// Anropa funktionen
combineStringsAndObjects();

const url = "feue256.github.io/index.json"; // Uppdatera URL för http-server
// const url = "index.json"; // Uppdatera URL för Python HTTP-server

// Funktion för att hämta JSON-data från en URL
async function fetchPersonData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Nätverksfel när data hämtades');
        }
        const persons = await response.json();

        // Filtrera ut Emma
        const person = persons.find(person => person.namn === "Emma");

        if (person) {
            // Använd personens data i din HTML
            const personInfoDiv = document.getElementById('person-info');
            const relationer = person.relationer.map(rel => `${rel.relation}: ${rel.namn}`).join(', ');
            personInfoDiv.innerHTML = `
                <div>
                    <h2>${person.namn}</h2>
                    <p>Ålder: ${person.ålder}</p>
                    <p>Är aktiv: ${person.ärAktiv}</p>
                    <p>Hobbies: ${person.hobbies.join(', ')}</p>
                    <p>Adress: ${person.adress.gata}, ${person.adress.stad}, ${person.adress.postnummer}</p>
                    <p>Relationer: ${relationer}</p>
                </div>
            `;
        } else {
            console.log("Personen hittades inte i datan.");
        }
    } catch (error) {
        console.error('Fel vid hämtning av data:', error);
    }
}

// Hämta persondata när sidan har laddats
window.onload = fetchPersonData;

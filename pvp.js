function FE() {
   let FE = document.querySelector(".pvp");
    FE.innerHTML = "FEUE";
}

       window.onload = function() {
            var message = "Välkommen till FÈUE!\n\nVi är glada att du har hittat till oss på FÈUE, där vårt mål är att göra det möjligt för alla att skapa sin egen hemsida. Med vår expertis och passion hjälper vi dig att ta dina första steg mot en stark online-närvaro.\n\nPå FÈUE tror vi på att allt blir bra. Oavsett om du är en nybörjare eller en erfaren användare, är vi här för att ge dig verktygen och stödet du behöver för att skapa en hemsida som speglar din vision och dina behov.\n\nVårt dedikerade team står redo att assistera dig genom hela processen – från idé till färdig hemsida. Om du har några frågor eller behöver hjälp, besök gärna vår hjälpsida på feue256.tawk.help.\n\nTack för att du valde FÈUE. Vi ser fram emot att hjälpa dig att skapa något fantastiskt!\n\nVillkor för användning:\n1. Användaren får inte använda tjänsten för olagliga aktiviteter.\n2. Användaren ansvarar för säkerheten av sitt konto och lösenord.\n3. FÈUE ansvarar inte för förluster eller skador som uppstår från användning av tjänsten.\n4. FÈUE förbehåller sig rätten att ändra eller avsluta tjänsten när som helst utan föregående meddelande...\n5. Genom att använda tjänsten godkänner användaren att följa alla lokala, statliga och internationella lagar och regler.\n\nVänliga hälsningar,\nTeamet på FÈUE\nSlogan: Allt blir bra";

            if (confirm(message)) {
                // Skapa och lägg till checkbox och label
                var form = document.createElement('form');
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = 'termsCheckbox';
                checkbox.onclick = checkTerms;
                var label = document.createElement('label');
                label.htmlFor = 'termsCheckbox';
                label.appendChild(document.createTextNode(' Jag har läst och godkänner villkoren'));

                form.appendChild(checkbox);
                form.appendChild(label);
                
                document.body.appendChild(form);

                // Skapa och lägg till knappen
                var button = document.createElement('button');
                button.type = 'button';
                button.id = 'submitButton';
                button.disabled = true;
                button.appendChild(document.createTextNode('Fortsätt'));
                form.appendChild(button);
            }
        }

        function checkTerms() {
            var checkbox = document.getElementById('termsCheckbox');
            var submitButton = document.getElementById('submitButton');
            submitButton.disabled = !checkbox.checked;
        }
                
                document.body.appendChild(form);

                // Skapa och lägg till knappen
                let button = document.createElement('button');
                button.type = 'button';
                button.id = 'submitButton';
                button.disabled = true;
                button.appendChild(document.createTextNode('Fortsätt'));
                form.appendChild(button);
            }
        }

        function checkTerms() {
            let checkbox = document.getElementById('termsCheckbox');
            let submitButton = document.getElementById('submitButton');
            submitButton.disabled = !checkbox.checked;
        }

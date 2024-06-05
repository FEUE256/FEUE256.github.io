(function(){
    emailjs.init("your_user_id");
})();

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('FE_UE', 'template_id', this)
        .then(function(response) {
            console.log('E-post skickad:', response);
            alert('E-postmeddelandet har skickats!');
        }, function(error) {
            console.log('Fel vid sändning av e-post:', error);
            alert('Det uppstod ett fel vid sändning av e-postmeddelandet.');
        });
});

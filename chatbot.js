async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.textContent = `User: ${userInput}`;
    chatBox.appendChild(userMessage);

    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer sk-proj-nKckltr8m4mqykqDhP9jT3BlbkFJEFR3GUyF5NaYXpCd0JDQ` //Ni kan ta den om ni vill 
        },
        body: JSON.stringify({
            prompt: userInput,
            max_tokens: 150
        })
    });

    const data = await response.json();
    const aiMessage = document.createElement('div');
    aiMessage.textContent = `AI: ${data.choices[0].text.trim()}`;
    chatBox.appendChild(aiMessage);

    document.getElementById('user-input').value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

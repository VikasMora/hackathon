function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (userInput.value.trim() === '') return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerHTML = userInput.value + '<div class="message-time">' + getCurrentTime() + '</div>';
    chatMessages.appendChild(userMessage);

    // Add bot response
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.innerHTML = getBotResponse(userInput.value) + '<div class="message-time">' + getCurrentTime() + '</div>';
    chatMessages.appendChild(botMessage);

    // Clear input and scroll to bottom
    userInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendSuggestion(text) {
    document.getElementById('userInput').value = text;
    sendMessage();
}

function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi')) {
        return 'Hello! How can I assist you today?';
    } else if (message.includes('connect') || message.includes('contact')) {
        return 'You can connect with alumni through their LinkedIn profiles or email addresses provided in their profiles. Would you like help finding a specific alumni?';
    } else if (message.includes('event') || message.includes('meeting')) {
        return 'You can find upcoming events in the Events section. The next networking event is scheduled for next month. Would you like more details?';
    } else if (message.includes('profile') || message.includes('update')) {
        return 'You can update your profile by clicking on the Profile section in the navigation bar. There you can edit your information, add new skills, and update your current position.';
    } else if (message.includes('network') || message.includes('opportunity')) {
        return 'We have several networking opportunities available: monthly meetups, industry-specific events, and mentorship programs. Would you like information about any specific program?';
    } else if (message.includes('help') || message.includes('assist')) {
        return 'I can help you with finding alumni, connecting with professionals, updating your profile, or learning about upcoming events. What would you like to know more about?';
    } else {
        return 'I\'m here to help! You can ask me about connecting with alumni, upcoming events, profile updates, or networking opportunities. What would you like to know?';
    }
}

// Allow sending message with Enter key
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}); 
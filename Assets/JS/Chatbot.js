document.getElementById("chatbot-icon").addEventListener("click", function() {
    document.getElementById("chatbot-popup").style.display = "block";
});

document.getElementById("close-chatbot").addEventListener("click", function() {
    document.getElementById("chatbot-popup").style.display = "none";
});


document.getElementById("send-message").addEventListener("click", function() {
    const message = document.querySelector("textarea").value;
    if (message) {
        alert("Message sent: " + message); 
        document.querySelector("textarea").value = "";
    }
});
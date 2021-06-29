let button = document.querySelector('button');

button.onclick = function() {
    getNickname()
}

getNickname = function() {
    let text = document.querySelector('p');
    text.textContent = nickerate();
    text.appendChild(text); 
}

nickerate = function() {
    return('Nickname')
}
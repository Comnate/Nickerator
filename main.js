var button = document.querySelector('button');

button.onclick = function () {
    getNickname()
}

getNickname = function () {
    var text = document.querySelector('p');
    text.textContent = nickerate();
    text.appendChild(text);
}

nickerate = function () {
    var syllables = ['wa', 'ra', 'ya', 'ma', 'pa', 'ba', 'ha', 'na', 'da', 'ta', 'za', 'sa', 'ga', 'ka', 'a', 'ri', 'mi', 'pi', 'bi', 'hi', 'ni', 'chi', 'ji', 'shi', 'gi', 'ki', 'i', 'ru', 'yu', 'mu', 'pu', 'bu', 'hu', 'nu', 'tsu', 'zu', 'su', 'gu', 'ku', 'u', 're', 'me', 'pe', 'be', 'he', 'ne', 'de', 'te', 'ze', 'se', 'ge', 'ke', 'e', 'ro', 'yo', 'mo', 'po', 'bo', 'ho', 'no', 'do', 'to', 'zo', 'so', 'go', 'ko', 'o']
    var res = String();
    for (var i = 0; i < randrange(3, 5); i++) {
        res += syllables[randrange(0, syllables.length)];
    }
    res = res[0].toUpperCase() + res.slice(1);
    return (res);
}

function randrange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
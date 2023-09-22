// Business logic
function reverseSentence(sentence) {
    const arrayWords = sentence.split(' ');
    let reverseWords = [];
    
    arrayWords.forEach(function (sentence) {
        if (sentence.length >= 3) {
            const reversedWord = sentence.split('').reverse().join('');
            reverseWords.push(reversedWord);
        } else {
            reverseWords.push(sentence);
        }
    });
    return reverseWords.join(' ');
}


// UI logic
$(document).ready(function() {
    $("#sentenceForm").submit(function(e) {
        e.preventDefault();
        const sentence = $("#wordPlay").val();
        const reversedSentence = reverseSentence(sentence);
        const result = reversedSentence + ' ' + sentence;

        $("#result").html(result);
    });
});    



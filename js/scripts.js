$(document).ready(function() {
    $("#sentenceForm").submit(function(e) {
        e.preventDefault();
        let sentence = $("#wordPlay").val();

        if (sentence.length >= 3) {
            let reversed = sentence.split('').reverse().join('');
            $("#result").html(reversed + ' ' + sentence);
        } else {
            $("#result").html(sentence);
        }
    });
});


















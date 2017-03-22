const translate = require('google-translate-api');


var translateWord = function (wordToTranslate) {
    let translation = "";

    translate(wordToTranslate, { from: 'fr', to: 'en' }).then(res => {
        console.log(res.text);
        translation = res.text;
    }).catch(err => {
        console.error(err);
        translation = "Translation not found";
    });

    return translation;
}
const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),

URL = "https://api.quotable.io/random";

//random quote function
function randomQuote() {
    // console.log("clicked");

    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading ...";
    //fetch random quote from api & parsing it into js object
    fetch(URL).then(res => res.json()).then(result => {
        //console.log(result);

        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");


    });
}

soundBtn.addEventListener("click", () => {
    //constructor|| web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`); 

    //speak() of speechSynthesis speaks the utterance
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
    //copying the quote text on copyBtn click
    //writeText() property writes specified text string to system clipboard
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    //opening a new twitter tab with passing quote in the url
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);
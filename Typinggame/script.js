const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";
const typeDisplay = document.getElementById("typeDisplay");
const typeInput = document.getElementById("typeInput");


function GetRandomSentence (){
    return fetch(RANDOM_SENTENCE_URL_API)
    .then((Response) => Response.json())
    .then((data) => data.content);
}

async function RenderNextSentence () {
    const sentence = await GetRandomSentence ();

    typeDisplay.innerText = "";

    let oneText = sentence.split("");

    oneText.forEach ((character) => {
        const characterSpan = document.createElement("span");
        characterSpan.innerText = character;
        typeDisplay.appendChild(characterSpan);
        characterSpan.classList.add("correct");
    });        
   
    typeInput.innerText = "";

};

RenderNextSentence ();
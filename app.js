//Fetch API's allow you to make requests for resources on the fly
//Below will show the syntax and how to get started

//DOM Elements stored to variables
const animeName = document.querySelector(".anime");
const characterName = document.querySelector(".character");
const quoteSentence = document.querySelector(".quote");

//Function executes when button is clicked
document.querySelector(".btn").addEventListener(
  "click",
  function () {
    fetch("https://animechan.vercel.app/api/random") //Fetches JSON file across the network
      .then(response => {
        //Returns promise value as JSON value
        console.log(response);
        return response.json();
      })
      .then(randomQuote => {
        //Returns promise value based on the JSON files above
        //DOM variables populated with random entry
        animeName.innerHTML = randomQuote["anime"];
        characterName.innerHTML = randomQuote["character"];
        quoteSentence.innerHTML = '"' + randomQuote["quote"] + '"';
      });
  },
  false
);

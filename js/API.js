


const generateJoke = document.querySelector('button').addEventListener("click", function() {
    fetch ('https://api.chucknorris.io/jokes/random')
    .then((r) => r.json())
    .then((chuck) => {
        console.log(chuck);
        jokeMe(chuck)
    });
    
    const jokeMe = (joke) => {
       
        document.querySelector('section').innerText = joke.value;
    };
});
    
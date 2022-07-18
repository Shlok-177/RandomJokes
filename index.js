
const joke = document.getElementById("jokes");
const jokeButton = document.getElementById("jokesButton");


const newJokes = () => {
    const options = {
        method: 'GET',
        headers: {
            'Accept' : "application/json"
        }
    };

    fetch('https://icanhazdadjoke.com/', options)
        .then(response => response.json())
        .then((data) =>{
            joke.innerHTML = data.joke
        })
        .catch(err => console.error(err));

}



jokeButton.addEventListener('click' , newJokes);
newJokes();
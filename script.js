// searchinput
// searchbtn
const searchinput = document.getElementById("searchinput");
const searchbtn = document.getElementById("searchbtn");
const wordElement = document.getElementById("word");
const definationElement = document.getElementById("defination");
const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'c73058ee88mshdfd1b4e34fd9c0ap1aa7e5jsn1ae0b9bace87',
          'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
      };
      
      fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            wordElement.innerHTML = response.word; 
            definationElement.innerHTML = response.definition; 
        })
        .catch(err => console.error(err));
}

searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    dictionary(searchinput.value)

})
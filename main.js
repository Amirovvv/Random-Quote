"use strict"

const quoteText = document.querySelector(".quote")
const quoteAuthor = document.querySelector(".author")
const quoteBtn = document.querySelector(".new-quote")


fetch('/db/quote.json')
  .then(response => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    quoteBtn.addEventListener("click", () => {
      let randomNumber = Math.floor(Math.random() * data.quoteSource.length)
      quoteText.innerHTML = `<h2>${data.quoteSource[randomNumber].quote}</h2>`
      quoteAuthor.innerHTML = `<h3>- ${data.quoteSource[randomNumber].author}</h3>`
    })

  })
  .catch(err => {
    console.error(err);
  });
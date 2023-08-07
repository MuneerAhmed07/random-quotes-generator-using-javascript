import {quotes} from './qoute.js';

const quoteElement = document.querySelector('.quote');
const ChangeQuote = document.querySelector("#changeQoute");

ChangeQuote.addEventListener("click", changeQuote);

function changeQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = `${quotes[randomIndex]}`;
}
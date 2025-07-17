function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: ["Start your day with a peaceful mind."],
    autoStart: true,
    delay: 1, //A bit slower
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

function displayQuote(response) {
  let rawText = response.data.answer;
  rawText = rawText.replace(/```html|```/g, "").trim();

  new Typewriter("#quote", {
    strings: rawText,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "f4fo17tb49d11f665b0eb0019e73da1a";
  let prompt = `user instructions: Give me a short impactful wellness quote related to serenity. ${instructionsInput.value}`;
  let context =
    "You are an AI wellness personal trainer who gives people short, impactful quotes. Your mission is to generate a 4-line quote in basic HTML and separate each line with <br>. Do not include a title to a quote please. Please follow the user's instructions. Sign the poem at the end using <strong>SheCodes AI</strong>";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳ Generating serenity quotes about ${instructionsInput.value}...</div>`;
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a reandom quote apiQuote array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  
}

// Get Quote FRom API
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch error Here
  }
}

// On Load
getQuotes();

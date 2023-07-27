const quotes = [
    {
      quote: "O que é que há, velhinho?",
      author: "Pernalonga"
    },
    {
      quote: "Ohana significa família. Família significa nunca abandonar ou esquecer.",
      author: "Lilo e Stich"
    },
    {
      quote: "Por algumas pessoas vale a pena se derreter..",
      author: "Olaf"
    },
    {
      quote: "Estou pronto! Estou pronto!",
      author: "Bob Esponja"
    },
    {
      quote: "Os seus problemas você deve esquecer. Isso é viver, é aprender..",
      author: "Timão e Pumba"
    },
    {
      quote: "Quer ser um espectador na vida? Ou quer ser um personagem?.",
      author: "Gumball"
    },
    {
      quote: "A força da alcateia é o lobo, e a força do lobo é a alcateia.",
      author: "Mogli"
    },
    {
      quote: "“As vezes precisamos ir bem fundo dentro de nós para resolver nossos problemas.",
      author: "Patrick"
    },
    {
      quote: "“Você nunca é velho demais para ser jovem .",
      author: "Branca de Neve"
    },
    {
      quote: "Apenas continue nadando",
      author: "Dory"
    },
    {
      quote: "“Não há ninguém que eu prefiro ser do que eu",
      author: "Detona Ralfh"
    },
    {
      quote: "Deixe ir, deixe ir.",
      author: "Elsa"
    },
    {
      quote: "“As coisas que me fazem diferente são as coisas que me fazem ser eu.",
      author: "ursinho puff"
    },
    {
      quote: "“Contos de fada podem se tornar realidade. Você precisa faze-los acontecer, tudo depende de você .",
      author: "Tiana"
    },
    {
      quote: "Rir de si mesmo é amar a si mesmo.",
      author: "Mickey"
    },
    // Adicione mais citações à lista
  ];
  
  const quoteDisplay = document.getElementById('quoteDisplay');
  const authorDisplay = document.getElementById('authorDisplay');
  const newQuoteButton = document.getElementById('newQuoteButton');
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
  }
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
  
    // Mudar o fundo
    const quoteContainer = quoteDisplay.parentElement;
    const randomColor = `hsl(${Math.random() * 360}, 55%, 55%)`;
    quoteContainer.style.backgroundColor = randomColor;
  }
  
  newQuoteButton.addEventListener('click', generateRandomQuote);
  
  // Exibir uma citação aleatória ao carregar a página
  generateRandomQuote();
  
  newQuoteButton.addEventListener('click', generateRandomQuote);
  
  // Exibir uma citação aleatória ao carregar a página
  generateRandomQuote();
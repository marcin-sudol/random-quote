// QUOTES ARRAY
const quotes = [
  {
    quote:
      "People are always blaming their circumstances for what they are. I don't believe in circumstances.",
    author: "George Bernard Shaw",
  },
  {
    quote: "Our life is what our thoughts make it.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Six mistakes mankind keeps making century after century: Believing that personal gain is made by crushing others; Worrying about things that cannot be changed or corrected; Insisting that a thing is impossible because we cannot accomplish it; Refusing to set aside trivial preferences; Neglecting development and refinement of the mind; Attempting to compel others to believe and live as we do.",
    author: " Marcus Tullius Cicero",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: " J.K. Rowling",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide",
  },
  {
    quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "J.K. Rowling",
  },
  {
    quote:
      "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
    author: "Mark Twain",
  },
  {
    quote: "If you judge people, you have no time to love them.",
    author: "Mother Teresa",
  },
];

// RETURN INDEX FOR NEW QUOTE
const newQuoteIndex = (currentIndex) => {
  let newIndex = currentIndex;
  while (newIndex === currentIndex) {
    newIndex = Math.floor(Math.random() * quotes.length);
  }
  return newIndex;
};

$(document).ready(() => {
  // INITIAL QUOTE
  let index = newQuoteIndex(-1);
  $("#text").text(quotes[index].quote);
  $("#author").text(quotes[index].author);

  // CHANGE QUOTE ON CLICK
  $("#new-quote").click(() => {
    $("#quote").fadeOut("slow", () => {
      index = newQuoteIndex(index);
      $("#text").text(quotes[index].quote);
      $("#author").text(quotes[index].author);
      $("#quote").fadeIn("slow");
    });
  });
});

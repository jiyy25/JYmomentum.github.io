const quotes = [
    {
        quote: 'Do not pity the dead, Harry. Pity the living, and above all those who live without love.',
        author: 'Albus Dumbledore, Harry Potter and the Deathly Hallows, Chapter 35'
    },
    {
        quote: 'It is impossible to manufacture or imitate love.',
        author: 'Horace Slughorn, Harry Potter and the Half-Blood Prince, Chapter 9'
    },
    {
        quote: 'Differences of habit and language are nothing at all if our aims are identical and our hearts are open.',
        author: 'Albus Dumbledore, Harry Potter and the Goblet of Fire, Chapter 37'
    },
    {
        quote: 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
        author: `Albus Dumbledore, Harry Potter and the Sorcerer's Stone, Chapter 17`
    },
    {
        quote: 'Books! And cleverness! There are more important things — friendship and bravery.',
        author: `Hermione Granger, Harry Potter and the Sorcerer's Stone, Chapter 16`
    },
    {
        quote: `If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.`,
        author: 'Sirius Black, Harry Potter and the Goblet of Fire, Chapter 27'
    },
    {
        quote: 'It does not dwell on dreams and forget to live.',
        author: `Albus Dumbledore, Harry Potter and the Sorcerer's Stone, Chapter 12`
    },
    {
        quote: 'To the well-organized mind, death is but the next great adventure.',
        author: `Albus Dumbledore, Harry Potter and the Sorcerer's Stone, Chapter 17`
    },
    {
        quote: `The ones that love us never really leave us. You can always find them here.`,
        author: 'Sirius Black, Harry Potter and the Prisoner of Azkaban'
    },
    {
        quote: 'Words are, in my not so humble opinion, our most inexhaustible source of magic, capable of both influencing injury, and remedying it.',
        author: 'Albus Dumbledore, Harry Potter and the Deathly Hallows: Part 2'
    },
    {
        quote: 'Things we lose have a way of coming back to us in the end, if not always in the way we expect.',
        author: 'Luna Lovegood, Harry Potter and the Order of the Phoenix'
    },
    {
        quote: 'Every human life is worth the same, and worth saving.',
        author: 'Kingsley Shacklebolt, Harry Potter and the Deathly Hallows, Chapter 22'
    },
    {
        quote: `No good sittin' worryin' abou' it. What's comin' will come, and we'll meet it when it does.`,
        author: 'Rubeus Hagrid, Harry Potter and the Goblet of Fire, Chapter 37'
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)].quote;
const todaysAuthor = quotes[Math.floor(Math.random() * quotes.length)].author;

quote.innerText = todaysQuote;
author.innerText = todaysAuthor;
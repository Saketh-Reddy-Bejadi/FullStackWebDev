const books = [
    {
    "ISBN": "00100100",
    "title": "Do epic shit",
    "pub_date": "1951-July-16",
    "authors":"Anukur",
    "no.of_pages": 168,
    "category": "Self-help",
    "pub": "Little Brown Company",
    "lan": "English"
    },
    {
    "ISBN": "00200200",
    "title": "Secrets of unicorn",
    "pub_date": "1960-July-11",
    "authors": "Ishan",
    "no.of_pages": 121,
    "category": "Real",
    "pub": "Little Brown Comapny",
    "lan": "English"
    }
    ]
const authors= [
    {
    "id": 1,
    "name": "Anukur",
    "books_written": ["Do epic shit"]
    },
    {
    "id": 2,
    "name": "Ishan",
    "books_written": ["Secrets of unicorn"]
    }
    ]
const publications= [
    {
    "id": 1,
    "name": "Little Brown Company",
    "books_pub": ["Do epic shit","Secrest 0f unicorn"]
    },
    ]


module.exports={books,authors,publications};
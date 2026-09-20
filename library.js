const prompt = require('prompt-sync')();
const books = [
    {
        id: 1,
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Dystopian",
        available: true
    },
    {
        id: 2,
        title: "Animal Farm",
        author: "George Orwell",
        year: 1945,
        genre: "Political Satire",
        available: true
    },
    {
        id: 3,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        genre: "Fantasy",
        available: true
    },
    {
        id: 4,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954,
        genre: "Fantasy",
        available: true
    },
    {
        id: 5,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        year: 1997,
        genre: "Fantasy",
        available: true
    },
    {
        id: 6,
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        year: 1998,
        genre: "Fantasy",
        available: true
    },
    {
        id: 7,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Classic",
        available: true
    },
    {
        id: 8,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Classic",
        available: true
    },
    {
        id: 9,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Romance",
        available: true
    },
    {
        id: 10,
        title: "Jane Eyre",
        author: "Charlotte Bronte",
        year: 1847,
        genre: "Classic",
        available: true
    },
    {
        id: 11,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genre: "Classic",
        available: true
    },
    {
        id: 12,
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988,
        genre: "Adventure",
        available: true
    },
    {
        id: 13,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupery",
        year: 1943,
        genre: "Fantasy",
        available: true
    },
    {
        id: 14,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        year: 1890,
        genre: "Gothic",
        available: true
    },
    {
        id: 15,
        title: "Dracula",
        author: "Bram Stoker",
        year: 1897,
        genre: "Horror",
        available: true
    },
    {
        id: 16,
        title: "Frankenstein",
        author: "Mary Shelley",
        year: 1818,
        genre: "Horror",
        available: true
    },
    {
        id: 17,
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        year: 1892,
        genre: "Mystery",
        available: true
    },
    {
        id: 18,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        year: 2003,
        genre: "Thriller",
        available: true
    },
    {
        id: 19,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        year: 2008,
        genre: "Dystopian",
        available: true
    },
    {
        id: 20,
        title: "The Book Thief",
        author: "Markus Zusak",
        year: 2005,
        genre: "Historical Fiction",
        available: true
    },
    {
        id: 21,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        year: 2003,
        genre: "Drama",
        available: true
    },
    {
        id: 22,
        title: "The Fault in Our Stars",
        author: "John Green",
        year: 2012,
        genre: "Romance",
        available: true
    },
    {
        id: 23,
        title: "The Shining",
        author: "Stephen King",
        year: 1977,
        genre: "Horror",
        available: true
    },
    {
        id: 24,
        title: "It",
        author: "Stephen King",
        year: 1986,
        genre: "Horror",
        available: true
    },
    {
        id: 25,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        year: 2019,
        genre: "Psychological Thriller",
        available: true
    },
    {
        id: 26,
        title: "Dune",
        author: "Frank Herbert",
        year: 1965,
        genre: "Science Fiction",
        available: true
    },
    {
        id: 27,
        title: "The Martian",
        author: "Andy Weir",
        year: 2011,
        genre: "Science Fiction",
        available: true
    },
    {
        id: 28,
        title: "The Fault in Our Stars",
        author: "John Green",
        year: 2012,
        genre: "Romance",
        available: true
    },
    {
        id: 29,
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        year: 1950,
        genre: "Fantasy",
        available: true
    },
    {
        id: 30,
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        year: 1605,
        genre: "Classic",
        available: true
    }
];
const borrowBooks = [];
function menu () 
{
    console.log("===== LIBRARY =====");
    console.log("1. Display all books");
    console.log("2. Search for a book");
    console.log("3. Add a book");
    console.log("4. Remove a book");
    console.log("5. Borrow a book");
    console.log("6. Return a book");
    console.log("7. Display borrowed books");
    console.log("8. Display available books");
    console.log("0. Exit");
    let x=parseInt(prompt("Votre choix : "));
    return x;
};
function allBooks ()
{
    for(i=0; i<books.length; i++)
    {
        console.log("==== book "+[i+1]+" ===")
        console.log("title :"+ books[i].title);
        console.log("author :"+ books[i].author);
        console.log("year :"+ books[i].year);
        console.log("genre :"+ books[i].genre);
        if(borrowBooks.includes(books[i].id))
        {
            console.log("not available");
        }
        else
        {
            console.log("available")
        }
    }

};
function searchBook()
{
    s=prompt("enter book title :");
    let found = false;
    for (i=0; i<books.length; i++)
    {
        if(s.toLowerCase() === books[i].title.toLowerCase())
        {
            console.log("the book is available :");
            console.log(books[i]);
            found = true;
            break;
        }
    }
    if (!found) 
    {
        console.log("book that you're searching is not available");
    };
};
while(true)
{
    let x = menu();
    if(x===1)
    {
        allBooks();
    }
    else if (x===2)
    {
        searchBook();
    }
    else if (x === 0) 
    {
        return;
    };
}

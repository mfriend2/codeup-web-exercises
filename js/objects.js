(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Michael",
        lastName: "Friend",
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    };
    person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    const amtToDisc = 200;
    const amtOfShoppers = 3;
    function hebDisc () {
        for (let x = 0; x < shoppers.length; x++) {
            if (shoppers[x].amount <= amtToDisc) {
                console.log(shoppers[x].name + " received a discount of " + "$0.00." + "Their total for today is $" + shoppers[x].amount.toFixed(2) + ".");
            } else {
                let disc = .12 * shoppers[x].amount;
                let total = shoppers[x].amount - disc;
                console.log(shoppers[x].name + " received a discount of $" + disc.toFixed(2) + "." + " Their total for this transaction is $" + total.toFixed(2) + ".");
            }
        }
    }
    hebDisc();


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {title: "Me and My Twin", author: { firstName: "Reggie", lastName: "Cotton"}},
        {title: "My Life as a Dad", author: { firstName: "Michael", lastName: "Friend"}},
        {title: "Stay at Home Mom", author: { firstName: "Aughinique", lastName: "Friend"}},
        {title: "Crazy Toddler", author: { firstName: "Noelle", lastName: "Friend"}},
        {title: "I Am the Twin", author: { firstName: "Rueben", lastName: "Cotton"}},
    ]

    console.log(books[0]);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for (let x = 0; x < books.length; x++) {
        console.log("Book # " + (x + 1) + "\n" + "\n" + "Title: " + books[x].title + "\n" + "\n" + "Author: " + books[x].author.firstName + " " + books[x].author.lastName + "\n" + "---");
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) {
        let book;
        return book = {
            title: title,
            author: author,
        }
    }

    console.log(createBook("Hello there friend", "Michael Friend"));

    console.log(createBook("Me and My Twin", "Reggie Cotton"));
    console.log(createBook("My Life as a Dad", "Michael Friend"));
    console.log(createBook("Stay at Home Mom", "Aughinique Friend"));
    console.log(createBook("Crazy Toddler", "Noelle Friend"));
    console.log(createBook("I Am the Twin", "Rueben Cotton"));

    let book = {title: "This is for the Bonus Function", author: "Codeup School"};
    function showBookInfo(bookObject) {
            return "Title: " + bookObject.title + "\n" + "\n" + "Author: " + bookObject.author + "\n" + "---";
    }

    function showBookArrInfo (bookArr) {
        for (let x = 0; x < bookArr.length; x++) {
            console.log("Book # " + (x + 1) + "\n" + "\n" + "Title: " + bookArr[x].title + "\n" + "\n" + "Author: " + bookArr[x].author.firstName + " " + bookArr[x].author.lastName + "\n" + "---");
        }
    }

    console.log(showBookInfo(book));
    console.log(showBookArrInfo(books));
})();

const print = (log) => console.log(log);

var favoriteBooks = [];

const addFavoriteBook = (bookName) => !bookName.includes('Great') ? favoriteBooks.push(bookName) : false;

const printFavoriteBooks = ( ) => {
    print(`Favorite Books are ${favoriteBooks.length}`);
    favoriteBooks.forEach( book => print(book) );
    favoriteBooks.map( laa => laa + 'Bu kitap bok gibi' );
};

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// print out favorite books
printFavoriteBooks();
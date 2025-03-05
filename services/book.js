const fs = require("fs")

function getAllBooks() {
    return JSON.parse( fs.readFileSync("books.json") )
}

function getBookById(id) {
    const books = getAllBooks()
    const book = books.filter( book => book.id === parseInt(id) )[0]
    return book
}

function insertBook(newBook) {
    const books = getAllBooks()

    const newBookList = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newBookList))
}

function updateBook(updatedBook) {
    let books = getAllBooks()
    const updatedBookIndex = books.findIndex( book => book.id === updatedBook.id)

    const updatedContent = { ...books[updatedBookIndex], ...updatedBook}

    books[updatedBookIndex] = updatedContent

    fs.writeFileSync("books.json", JSON.stringify(books))
}

function deleteBookById(id) {
    const books = getAllBooks()

    const newList = books.filter( book => book.id !== parseInt(id) )
    fs.writeFileSync("books.json", JSON.stringify(newList))
}

module.exports = {
    getAllBooks, 
    getBookById, 
    insertBook, 
    updateBook, 
    deleteBookById
}
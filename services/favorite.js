const fs = require("fs")
const { getAllBooks } = require("./book")

function getJSONasList(file) {
    return JSON.parse( fs.readFileSync(file) )
}

function updateFavoritesJSON(contents) {
    fs.writeFileSync("favorites.json", JSON.stringify(contents))
}

function getAllFavorites() {
    return getJSONasList("favorites.json")
}

function deleteFavoriteById(id) {
    const favorites = getAllFavorites()

    const newList = favorites.filter( favorite => favorite.id !== parseInt(id) )
    updateFavoritesJSON(newList)
}

function insertFavorite(id) {
    const books = getAllBooks()
    const favorites = getAllFavorites()

    const newFavorite = books.find( book => book.id === parseInt(id) )
    const newFavoriteList = [...favorites, newFavorite]

    updateFavoritesJSON(newFavoriteList)
}

module.exports = {
    getAllFavorites,
    deleteFavoriteById,
    insertFavorite
}
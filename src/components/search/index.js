import { useState } from "react";
import { booksDatabase } from './searchData'

function Search() {
    const [searchTerm, setSearchTerm] = useState([])

    return (
        <section>
            <h2>Let's get started.</h2>
            <h3>Find your book in our shelf</h3>
            <input
                placeholder="What are you reading next?"
                onBlur={event => {
                    const searchTerm = event.target.value
                    const searchResult = booksDatabase.filter( entry => entry.title.includes(searchTerm))
                    setSearchTerm(searchResult)
                }}
            />
            { searchTerm.map( (book) => (
                <ul>
                    <li><p>{book.title}</p></li>
                    <li><p>{book.author}</p></li>
                    <li><p>{book.genre}</p></li>
                    <li><p>{book.publishedYear}</p></li>
                </ul>
            ) ) }
        </section>
    );
}

export default Search;
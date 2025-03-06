import './favorites.css'
import { useEffect, useState } from "react";
import { deleteFavorite, getFavorites } from "../services/favorites";

function Favorites() {
  const [favorites, setFavorites] = useState([])

  async function fetchFavorites() {
    const favoritesFromAPI = await getFavorites()
    setFavorites(favoritesFromAPI)
  }

  async function removeFavorite(id) {
    await deleteFavorite(id)
    await fetchFavorites()
  }

  useEffect(() => {
    fetchFavorites()
  }, [])

  return (
    <div className='content'>
      {favorites.map( favorite => (
        <ul onClick={() => removeFavorite(favorite.id)} className="book_card">
          <li><p>{favorite.title}</p></li>
          <li><p>{favorite.author}</p></li>
          <li><p>{favorite.genre}</p></li>
          <li><p>{favorite.publishedYear}</p></li>
      </ul>
      ))}
    </div>
  );
}

export default Favorites;

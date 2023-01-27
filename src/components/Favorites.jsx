import React from 'react'
import { useGlobalContext } from '../Context';
import {AiFillDelete} from 'react-icons/ai';


const Favorites = () => {
    const {favorites, selectMeal, removeFromFavorites} = useGlobalContext();
    
  return (
    <section className='favorites'>
        <div className='favorites-content'>
            <h5>Favorites</h5>
            <div className='favorites-container'>
                {favorites.map((item) => {
                    const {idMeal, strMealThumb:image, strMeal:title} = item;

                    return (
                        <div id={idMeal} className='favorite-item'>
                            <img src={image} alt={title} className='favorites-img img' onClick={() => selectMeal(idMeal, true)} />
                            <button className='remove-btn' title='remove' onClick={() => removeFromFavorites(idMeal)}><AiFillDelete /></button>
                            {/* <button className='remove-btn' onClick={() => removeFromFavorites(idMeal)}>close</button> */}
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Favorites;
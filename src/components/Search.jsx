import { React, useState } from 'react';
import { useGlobalContext } from '../Context';

const Search = () => {
  return (
    <header className='search-container'>
        <form>
            <input type='text' placeholder='type favorite meal' className='form-input' />
            <button className='btn' type='submit'>search</button>
            <button className='btn btn-hipster' type='button'>surprise me!</button>
        </form>
    </header>
  )
}

export default Search;
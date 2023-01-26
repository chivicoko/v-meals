import { React, useState } from 'react';
import { useGlobalContext } from '../Context';

const Search = () => {

    const [text, setText] = useState('');
    const {setSearchTerm} = useGlobalContext();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            setSearchTerm(text);
            // setText('');      // commenting this line will make the search word to remain on the input interface
        }
    }

  return (
    <header className='search-container'>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='type favorite meal' className='form-input' value={text} onChange={handleChange} />
            <button className='btn' type='submit'>search</button>
            <button className='btn btn-hipster' type='button'>surprise me!</button>
        </form>
    </header>
  )
}

export default Search;
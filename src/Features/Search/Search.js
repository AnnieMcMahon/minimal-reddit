import './Search.css'
import { updateSearchParam } from './searchSlice';
import { useDispatch } from 'react-redux';

export const Search =() => {
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    const userInput = event.target.value;
    dispatch(updateSearchParam(`search.json?q=${userInput}`));
  }

  return (
    <form className='search'>
      <input type= 'text' id='search' onChange={handleOnChange} placeholder= 'Search Topics'/>
    </form>
  )
}
import { FaPlus, FaSearch } from 'react-icons/fa';
import './search-style.css';

function Search() {
  return (<div className="search">
    <div>
      <FaSearch size={18} className='search-icon' />
      <input type="search" placeholder="search in users (cmd+k)" className="search-bar" />
    </div>
    <FaPlus size={18} className="plus-icon" />
  </div>)

}

export default Search;
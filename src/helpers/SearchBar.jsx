import { FaSearch } from 'react-icons/fa'
import { useItemsApi } from '../contexts/ItemsContextProvider'
import {Link} from 'react-router-dom'
import {NavDropdown} from 'react-bootstrap'
import { categoriesList } from '../assets/data/data'


export function SearchBar() {
    const {handleSearch} = useItemsApi()
    return (
        <div className="search-container d-flex align-items-center">
            <div className="dropdown-search-wraper">
                <NavDropdown title="Category">
                    <NavDropdown.Item>
                        <Link className='nav-link text-dark' to={`/items/all`}>All</Link>
                    </NavDropdown.Item>
                    {categoriesList.map((link, key) => (
                        <NavDropdown.Item className="nav-item" key={key}>
                            <Link className='nav-link text-dark' to={`/items/${link.value}`}>{link.name}</Link>
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
            </div>
            <Link className="search-box d-flex align-items-center" to='/items/all'>
                <div className="search-input">
                    <input type="text" placeholder="Search..." onChange={e => handleSearch(e.target.value)} />
                </div>
                <button className='d-flex align-items-center'><FaSearch /> <span className='lg-screen'>Search</span></button>
            </Link>
        </div>
    )
}

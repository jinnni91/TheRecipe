import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <div className='nav'>
            <ul>
                <li><NavLink to="/" style={ ({isActive}) => isActive? { color: 'black', textDecoration: 'none'} : { color: 'white', textDecoration: 'none' } }>HOME</NavLink></li>
                <li><NavLink to="/menu" style={ ({isActive}) => isActive? { color: 'black', textDecoration: 'none'} : { color: 'white', textDecoration: 'none' } }>RECIPE LIST</NavLink></li>
                <li><NavLink to="/regist" style={ ({isActive}) => isActive? { color: 'black', textDecoration: 'none'} : { color: 'white', textDecoration: 'none' } }>RECIPE REGISTER</NavLink></li>
                <li><NavLink to="/tip" style={ ({isActive}) => isActive? { color: 'black', textDecoration: 'none'} : { color: 'white', textDecoration: 'none' } }>TIP</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
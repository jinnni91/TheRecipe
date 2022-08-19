import './Header.css';
import {  useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


function Header () {

    const [searchValue, setSearchValue ] = useState('');
    const navigate = useNavigate();
    const onClickHandler = () => {

        navigate(`/menu/search?menuName=${ searchValue }`);   
    }

    return (
        <div className='header'>
            <NavLink to="/">
                <img className="titleImage" src='titleImage.png'/>
            </NavLink>
            <div className='search'>
                <input type="search" name="menuName" value={ searchValue } onChange={ e => setSearchValue(e.target.value) } placeholder={"검색어를 입력하세요."}/>
                &ensp;<button className="btnOrange btnPush" onClick={ onClickHandler }>검색</button>
            </div>
            
        </div>
    );
}

export default Header;
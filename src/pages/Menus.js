import MenuList from "../components/lists/MenuList";
import { NavLink } from "react-router-dom";
import MenuCategoryList from "../components/lists/MenuCategoryList";
import './Menus.css';
function Menus() {
    const activeStyle = {
        color : 'black',
        textDecoration: 'none'
    }
    const inactiveStyle = {
        color : 'white',
        textDecoration: 'none'
    }
    return (
        <div>
            <div className='category'>
            <ul>
                <li><NavLink to="/menu/" style={ ({isActive}) => isActive ? activeStyle : inactiveStyle }>전체</NavLink></li>
                <li><NavLink to="/menu/category/kor" style={ ({isActive}) => isActive ? activeStyle : inactiveStyle }>한식</NavLink></li>
                <li><NavLink to="/menu/category/wes" style={ ({isActive}) => isActive ? activeStyle : inactiveStyle }>양식</NavLink></li>
                <li><NavLink to="/menu/category/chn" style={ ({isActive}) => isActive ? activeStyle : inactiveStyle }>중식</NavLink></li>
                <li><NavLink to="/menu/category/jpn" style={ ({isActive}) => isActive ? activeStyle : inactiveStyle }>일식</NavLink></li>
            </ul>
            </div>
            <MenuList/>
            <MenuCategoryList/>
        </div>
    );
}
export default Menus;
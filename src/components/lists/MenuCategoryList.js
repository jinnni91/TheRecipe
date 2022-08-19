import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callGetMenuCategoryListAPI } from '../../apis/MenuAPICalls';
import MenuItem from '../items/MenuItem';
import '../../pages/Menus.css';

function MenuCategoryList() {

    const {categoryName} = useParams();
    
    const result = useSelector(state => state.menuReducer);
    const menuList = result.menuCategoryList;
    const dispatch = useDispatch();

    console.log(menuList);

    useEffect(
        () => {
            /* MenuCategoryList 호출 API */
            dispatch(callGetMenuCategoryListAPI(categoryName));
        },
        [categoryName]
    );


    return ( 
            menuList && (
                <div className="list">   
                <div className="menuBox">
                    { menuList.map(menu => <MenuItem key={ menu.id } menu={ menu }/>) }
                </div>
            </div> 
        )
    );



}

export default MenuCategoryList;
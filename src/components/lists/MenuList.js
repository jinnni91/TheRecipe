import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '../items/MenuItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";


function MenuList() {

    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
    const dispatch = useDispatch();

    console.log(menuList);

    useEffect(
        () => {
            /* MenuList 호출 API */
            dispatch(callGetMenuListAPI());
        },
        []
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

export default MenuList;
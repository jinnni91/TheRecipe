import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '../items/MenuItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";


function MainList() {

    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const a = menuList && getRandom(1,Math.max.apply(Math, menuList.map(function(o) { return o.id; })));
    const dispatch = useDispatch();
    
    console.log(menuList);
    

    useEffect(
        () => {
            /* menuList 호출 API */
            dispatch(callGetMenuListAPI());
        },
        []
    );
    
       {console.log()}
    return (
        menuList && (
            <div className="home">
                <div className="menuBox">
                    { menuList.filter(menu => menu.id=== a)   
                            .map(menu => <MenuItem key={ menu.id } menu={ menu }/>) }
                </div>
            </div>
        )
    );
}

export default MainList;
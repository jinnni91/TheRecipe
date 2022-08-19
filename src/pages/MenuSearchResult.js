import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callGetSearchMenuListAPI} from '../apis/MenuAPICalls';
import MenuItem from '../components/items/MenuItem';

function MenuSearchResult() {

    const [searchParams] = useSearchParams();
    const menuName = searchParams.get('menuName');
    
    const result = useSelector(state => state.menuReducer);
    const menuList = result.searchMenulist;
    const dispatch = useDispatch();

    console.log(menuList);

    useEffect(
        () => {
            dispatch(callGetSearchMenuListAPI(menuName));
        },
        [menuName]
    );


    return ( 
        menuList && (
            <div className="menuBox">
                <h1>검색결과 : {menuName}  </h1>
                { menuList.map(menu => <MenuItem key={ menu.id } menu={ menu }/>) }
            </div>
        )
    );



}

export default MenuSearchResult;
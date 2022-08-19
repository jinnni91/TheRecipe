import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { callGetMenuAPI } from '../../apis/MenuAPICalls';


function Menu({ id }) {

    const result = useSelector(state => state.menuReducer);
    const menu = result.menu;
    const dispatch = useDispatch();

    useEffect(
        () => {
            /* menu 호출 API */
            dispatch(callGetMenuAPI(id));
        },
        []
    );

    return (
        menu && (
            <>  <div className="menuItem">
                <img src={ menu.detail.image } style={ { maxWidth: 500 } } alt={ menu.menuName }/>
                </div>
                <div className="menuItem">
                <h1>{ menu.menuName }</h1>         
                <h3>재료 : {menu.ingredients}</h3>
                <h4>조리 시간 : { menu.time}</h4>
                <h4>난이도 : { menu.level}</h4>
                <h4>조리 방법  { menu.detail.description }</h4>
                    <form className="filed">
                        <fieldset style = {{width : 643,height : 200}}> 
                    댓글 : { menu.detail.comment.map(comment => <li key={comment.id}>{comment}</li>)}
                        </fieldset>
                    </form>
                </div>  
               
            </>
        )
    );
}

export default Menu;
import { Link } from  'react-router-dom';
import "../../App.css";
import Review from "../form/Review"
function MenuItem({ menu }) {

    return (
        <Link to={ `/menu/${ menu.id }` }>
            <div className="menuItem">
                 <img src={ menu.detail.image } style={ { maxWidth: 200 } } alt={ menu.menuName }/>
            </div>
            <div className="description">
                <h3> { menu.menuName }</h3>
                <h4>작성자 : { menu.writer }</h4> 
                <h4>재료 : {menu.ingredients}</h4>
                <h4>조리 시간 : { menu.time}</h4>
                <h4>난이도 : { menu.level}</h4>
            </div>
                
            
        </Link>
    );
}

export default MenuItem;
import Menu from "../components/items/Menu";
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callDeleteMenuAPI } from '../apis/MenuAPICalls';
import './MenuDetail.css';
import Review from "../components/form/Review";

function MenuDetail() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const result = useSelector(state => state.menuReducer);

    const updateHandler = () => navigate(`/menu/modify/${id}`);
    const deleteHandler = () => dispatch(callDeleteMenuAPI(id));

    useEffect(
        () => {
            /* 메뉴 삭제 완료 확인 후 /menu로 이동 */
            if (result.delete) {
                alert('레시피가 삭제되었습니다.');
                navigate(`/menu`);
            }
        }, // eslint-disable-next-line
        [result]
    );

    return (
        <>
        <div className="view">
            <h1>레시피 </h1>
            <Menu id={ id }/>
            <Review/>
            <h1>
                { <button className="btnGreen btnPush" onClick={ updateHandler }>수정</button>}
                { <button className="btnRed btnPush" onClick={ deleteHandler }>삭제</button>}
            </h1>
            </div>
       
        </>
    );
}

export default MenuDetail;
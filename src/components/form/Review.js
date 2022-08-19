import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callGetMenuListAPI, review } from '../../apis/MenuAPICalls';
import { callGetMenuAPI } from '../../apis/MenuAPICalls';
import { callDeleteReview } from '../../apis/MenuAPICalls';
import '../../pages/Menus.css'
import '../../pages/MenuDetail.css'

function Review() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.menuReducer);

    /* 입력 값 state 저장 */
    const [comment, setComment] = useState({
        id : id,
        text : '',
    });
    

    /* 입력 값 변경 시 이벤트 핸들러 */
    const onChangeHandler = (e) => {
      
        setComment(
            {
                ...comment, 
                [e.target.name] : e.target.value
            }
        
        );

    }
    

    useEffect(
        () => {
            if(result.modify) {
                alert('댓글 등록')
                {/*navigate(`/menu/${id}`)*/}
               

            }
            return () => {
                dispatch(callGetMenuAPI(id))  
                
            } 
        },
        [result.modify]
      );

    const onClickHandler = () => {
        /* modifyMenu에 대한 유효성 검사 후 호출 */
        dispatch(review(comment));
     
    }
    
    return(
         
            <div className = "review">
                <div style= { {display : "flex"}}>
                <p>
                <textarea  rows="5" cols="95" id = "mTxtArea" name="text"  placeholder ="댓글을 입력하세요" value={ comment.text } onChange={ onChangeHandler }></textarea>          
                &ensp;
                </p> 
                <p>
                <button className ="btnGreen btnPush" onClick={ onClickHandler }> 등록</button>
                <button className = "btnRed btnPush" onClick={ () => navigate(`/menu`) }>취소</button>
                </p>
                </div>
            </div>
     
    )
}

export default Review;
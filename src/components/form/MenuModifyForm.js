import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callModifyMenuAPI } from '../../apis/MenuAPICalls';
import './MenuRegistForm.css';

function MenuModifyForm() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.menuReducer);

    /* 입력 값 state 저장 */
    const [modifyMenu, setModifyMenu] = useState(
        {
            id:0,
            writer: '',
            categoryName: 'jpn',
            menuName: '',
            ingredients:"",
            time:"",
            level:"하",
            detail:{
                description:'',
                image:'',
                comment:[]
                }
            }
    );
    

    /* 입력 값 변경 시 이벤트 핸들러 */
    const onChangeHandler = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        /* json-server에 저장될 데이터 타입 맞추기 위한 코드 */
        switch(name) {
            case 'description' : 
                name = 'detail';
                value = {
                    description : value,
                    image : modifyMenu.detail.image,
                    comment : modifyMenu.detail.comment
                };
                break;
        }

        setModifyMenu(
            {
                ...modifyMenu,
                id : id,
                [name] : value
            }
        );

    }

    /* 파일 첨부 시 동작하는 이벤트 핸들러 */
    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setModifyMenu(
            {
                ...modifyMenu,
                detail : {
                    description : modifyMenu.detail.description,
                    image : base64,
                    comment:[]
                }
            }
        );
    }

     /* FileReader API를 통해 input type="file"에 첨부 된 파일을 base64 인코딩 형식으로 변환 */
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
    }

    useEffect(
        () => {
            /* 메뉴 수정 완료 확인 후 /menu로 이동 */
            if(result.modify) {
                alert('레시피가 수정되었습니다.');
                navigate(`/menu`);
            }
        },
        [result]
      );

    const onClickHandler = () => {
        /* modifyMenu에 대한 유효성 검사 후 호출 */
        dispatch(callModifyMenuAPI(modifyMenu));
    }

    return(
        <>  
        <div className="body">
            <p>
            <label>작성자   </label> 
            <input type="text"  id="userid" name="writer" placeholder ="작성자를 입력하세요" value={ modifyMenu.writer } onChange={ onChangeHandler }/>
            </p>
            <p>
            <label>분류 </label> 
            <select name="categoryName"  id="categoryName" placeholder ="전체" value={ modifyMenu.categoryName } onChange={ onChangeHandler }>
            <option value="kor">한식</option>
            <option value="wes" >양식</option>
            <option value="chn">중식</option>
            <option value="jpn">일식</option>
            </select>
            </p>
            <p>
            <label>제목 </label>
            <input type="text" name="menuName" id="menuName" placeholder ="제목을 입력하세요" value={ modifyMenu.menuName } onChange={ onChangeHandler }/>
            </p>
            <p>
            <label>재료 </label>
            <input type="text" name="ingredients"id="ingredients" placeholder ="재료를 입력하세요" value={ modifyMenu.ingredients } onChange={ onChangeHandler }/>
            </p>

            <p>
            <label> 소요시간 </label>
            <input type="text" name="time" id="time" placeholder ="20분" value={ modifyMenu.time } onChange={ onChangeHandler }/>
            </p>

            <p>
            <label>난이도 </label>
            <select name="level" id="level" value={ modifyMenu.level} onChange={ onChangeHandler }>
                <option value="상">상</option>
                <option value="중">중</option>
                <option value="하">하</option>
            </select>
            </p>
            <p>
            <label>이미지 첨부 </label>
            <input 
                type="file" 
                name="image"
                accept='image/*'
                onChange={ fileChangeHandler }/>
            </p>
            <p>
            <label>본문 </label>
            <textarea name="description" id="description" placeholder ="본문을 입력하세요"value={modifyMenu.detail.description } onChange={ onChangeHandler }></textarea>
            </p>
            <p>
            <button className="btnGreen btnPush" onClick={ onClickHandler }>수정</button>
            <button className="btnRed btnPush" onClick={ () => navigate(`/menu`) }>취소</button>
            </p>    
        </div>
    </>
    )
}

export default MenuModifyForm;
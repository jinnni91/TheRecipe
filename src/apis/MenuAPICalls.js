import { request } from "./Api"; 
import { getMenulist, getSearchMenulist, getMenuCategoryList, getMenu, registMenu, modifyMenu, deleteMenu } from "../modules/MenuModule";

export function callGetMenuListAPI() {
    
    console.log('getMenuList api calls...');
    
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        
        /* Api의 axios 처리 참조  */
        const result = await request('GET', '/menu');
        console.log('getMenuList result : ', result);
        
        /* action 생성 함수에 결과 전달하며 dispatch 호출 */
        dispatch(getMenulist(result));
    }
}


export function callGetSearchMenuListAPI(menuName) {

    console.log('getSearchMenuList api calls...');
    
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        
        /* Api의 axios 처리 참조  */
        const result = await request('GET', '/menu').then(res => res.filter(menu => menu.menuName.match(menuName)));
        console.log('getSearchMenuList result : ', result);
        
        /* action 생성 함수에 결과 전달하며 dispatch 호출 */
        dispatch(getSearchMenulist(result));
    }
}

export function callGetMenuCategoryListAPI(categoryName) {
    
    console.log('getMenuCategoryList api calls...');

    return async (dispatch, getState) => {
    
        const result = await request('GET', '/menu').then(res => res.filter(menu => menu.categoryName.match(categoryName)));
        console.log('getMenuCategoryList result : ', result);
    
        dispatch(getMenuCategoryList(result));
    }
}


export function callGetMenuAPI(id) {
    
    console.log('getMenu api calls...');

    return async (dispatch, getState) => {
    
        const result = await request('GET', `/menu/${id}`);
        console.log('getMenu result : ', result);
    
        dispatch(getMenu(result));
        
    }
}


export function callRegistMenuAPI(menu) {
    
    console.log('registMenu api calls...');

    return async (dispatch, getState) => {
    
        const result = await request('POST', '/menu/', menu);
        console.log('registMenu result : ', result);
    
        dispatch(registMenu(result));
    }
}

export function callModifyMenuAPI(menu) {   // 글  수정
    
    console.log('modifyMenu api calls...');

    return async (dispatch, getState) => {
    
        const old = await request('GET', `/menu/${menu.id}`);
        const modifymenu = { ...old, ...menu };
        const result = await request('PUT', `/menu/${menu.id}`, modifymenu);
        console.log('registMenu result : ', result);
    
        dispatch(modifyMenu(result));
    }
}

export function review(comment) {
    
    console.log('registMenu api calls...');

    return async (dispatch, getState) => {
        
        const old = await request('GET', `/menu/${comment.id}`).then(old => {
            old.detail.comment.push(comment.text);
            return old;
        });
        
        const result = await request('PUT', `/menu/${comment.id}`, { ...old });
        console.log('registMenu result : ', result);
    
        dispatch(modifyMenu(result));
    }
}

export function callDeleteMenuAPI(id) {
    
    console.log('deleteMenu api calls...');

    return async (dispatch, getState) => {
    
        const result = await request('DELETE', `/menu/${id}`);
        console.log('deleteMenu result : ', result);
    
        dispatch(deleteMenu(result));
    }
}

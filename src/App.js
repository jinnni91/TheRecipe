import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import MenuDetail from './pages/MenuDetail';
import MenuRegist from './pages/MenuRegist';
import MenuModify from './pages/MenuModify';
import Tip from './pages/Tip';
import Error from './pages/Error';
import "./App.css";
import MenuSearchResult from './pages/MenuSearchResult';
// import MenuCategories from './pages/MenuCategories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
          <Route path="tip" element = {<Tip/>}/>
          <Route path="regist" element={ <MenuRegist/> }/>
          <Route path="menu" >
            <Route index element={ <Menus/> }/>
            <Route path=":id" element={ <MenuDetail/> }/>
            <Route path="category/:categoryName" element={ <Menus/>}/>
            <Route path="modify" >
              <Route path=":id" element={ <MenuModify/> }/>
            </Route>
              <Route path="search" element={<MenuSearchResult/>}/>
          </Route>
        </Route>
        <Route path="*" element={ <Error/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

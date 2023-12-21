import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Company from './Company';
import Main from './Main';
import ShopList from './ShopList';
import Cart from './Cart';
import Detail from './Detail';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { list } from '../productData';

function App() {
  /*let [pData, setPData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await axios.get(
        'https://carrepe.github.io/datalist/productData.json.json'
      );
      setPData(result.data.list);
    };
    loadData();
  }, []);*/

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route
            path="shop_list"
            element={<ShopList />}
          />
          <Route
            path="detail/:id"
            element={<Detail />}
          />
          <Route path="blog" element={<>블로그 페이지 입니다.</>} />
          <Route path="our" element={<Company />}>
            <Route path="ceo" element={<>ceo 인사말</>} />
            <Route path="orga" element={<>조직도</>} />
          </Route>
          <Route path="search" element={<>검색페이지</>} />
          <Route path="cart" element={<Cart />} />
          <Route path="mypage" element={<>마이 페이지</>} />
        </Route>
        <Route path="*" element={<>404 요청한 페이지는 없소</>} />
      </Routes>
    </>
  );
}

export default App;

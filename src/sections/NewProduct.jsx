import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import cssStyle from '../css/NewProduct.module.css';
import { useSelector } from 'react-redux';

export default function NewProduct() {
  let productData = useSelector((a) => a.pData);
  let newlist = productData.filter((item) => item.category === 'new');
  let naviagte = useNavigate();
  let goShopList = () => {
    naviagte('/shop_list');
  };
  return (
    <section className={cssStyle.newProduct}>
      <h2>신상품 리스트</h2>
      <button onClick={goShopList}>View All</button>
      <ul>
        {newlist.map((data) => {
          return (
            <li key={data._id}>
              <ProductCard data={data} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

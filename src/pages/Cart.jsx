import { useDispatch, useSelector } from 'react-redux';
import cssStyle from '../css/Cart.module.css';
import { changeName } from '../store/UserStore';
import { plusCount, minusCount, delItem } from '../store/cartList';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  let user = useSelector((a) => a.user);
  let cartList = useSelector((a) => a.cartList);
  let dispath = useDispatch();
  let navigator = useNavigate();

  return (
    <main className={cssStyle.cart}>
      <h2>Shopping cart</h2>
      <p>
        <span>{user.name}</span> have {cartList.length} item in your cart
      </p>
      <p>
        <button onClick={() => {
          dispath(changeName('VVIP'));
        }}>회원정보 변경</button>
      </p>
      <hr />
      <ul>
        {cartList.map((Item) => (
          <li className={cssStyle.cartList} key={Item._id}>
            <div className={cssStyle.img} onClick={() => {
                navigator(`/detail/${Item._id}`);
              }}>
              <img src={`/img/${Item.img}`} alt={Item.title}/>                         
            </div>
            <div className={cssStyle.title}>{Item.title}</div>
            <div className={cssStyle.num}>{Number(Item.price).toLocaleString()}원</div>
            <div className={cssStyle.count}>
              {
                Item.count <= 1 ? <button disabled>-</button> :
                <button onClick={() => {
                  dispath(minusCount(Item._id));
                }}>-</button>
              }
              <span>{Item.count}</span>
              <button onClick={() => {
                dispath(plusCount(Item._id));
              }}>+</button>
            </div>
            <div>{Number(Item.price * Item.count).toLocaleString()}원</div>
            <button onClick={() => {
              dispath(delItem(Item._id));
            }}><i class="fa-solid fa-trash"></i></button>
          </li>
        ))}
      </ul>
    </main>
  );
}
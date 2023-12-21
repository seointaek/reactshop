import { useNavigate } from 'react-router-dom';
import cssStyle from '../css/ProductCard.module.css';
// import styled from 'styled-components';

export default function ProductCard({ data }) {
  let navigate = useNavigate();
  let goDetail = () => {
    navigate(`/detail/${data._id}`);
  };
  return (
    <figure className={cssStyle.pCard} onClick={goDetail}>
      <div>
        <img src={`/img/${data.img}`} alt={data.title} />
      </div>
      {data.discount !== '0' && <p>{data.discount}%</p>}
      <figcaption>
        <strong>{data.title}</strong>
        <span>{Number(data.price).toLocaleString()}원</span>
        {/* <Button bg="blue">버튼이닷</Button>
        <Button bg="red">버튼이닷</Button> */}
      </figcaption>
    </figure>
  );
}

// const Button = styled.button`
//   background-color: ${(props) => props.bg};
//   color: white;
//   padding: 1rem;
// `;

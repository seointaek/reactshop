import { useNavigate } from 'react-router-dom';
import cssStyle from '../css/BannerCard.module.css';
export default function BannerCard({ item }) {
  let navigate = useNavigate();
  let goDetail = () => {
    navigate(`/detail/${item._id}`);
  };
  return (
    <div className={cssStyle.bannerCard}>
      <img src={`/img/${item.bannerImg}`} alt={item.bannerTitle} />
      <div>
        <strong>{item.bannerTitle}</strong>
        <span>{item.price}</span>
        <button onClick={goDetail}>View Product</button>
      </div>
    </div>
  );
}

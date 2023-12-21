import { useSelector } from 'react-redux'
import cssStyle from '../css/Watched.module.css'
import { useNavigate } from 'react-router-dom';
export default function Wacthed() {
    let wList = useSelector((a) => a.watched);
    let data = useSelector((a) => a.pData);
    let navigator = useNavigate();
    let watchedData = data.filter((item) => wList.includes(item._id)); 

    console.log(wList);
    return(
        <div className={cssStyle.watched}>
            <h2>최근본 상품</h2>
            <ul> 
            {watchedData.map((list) => (
          <li
            key={list._id}
            onClick={() => {
              navigator(`/detail/${list._id}`);
            }}
          >
            <img src={`/img/${list.img}`} alt={list.title} />
          </li>
        ))}
                   
            </ul>
        </div>
    )
}

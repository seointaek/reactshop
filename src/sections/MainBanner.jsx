import { Swiper, SwiperSlide } from 'swiper/react';
import BannerCard from '../components/BannerCard';
import { Pagination } from 'swiper/modules';
import cssStyle from '../css/MainBanner.module.css';

import { bannerList } from '../productData';
import { useState } from 'react';

export default function MainBanner() {
  let [bList] = useState(bannerList);
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={cssStyle.main_banner}
    >
      {bList.map((item) => {
        return (
          <SwiperSlide key={item._id}>
            <BannerCard item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

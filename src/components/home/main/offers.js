import {
    Offer,
    OffersMain
} from './styles';
import styles from './offers.module.scss';

import { offersAarray } from '@/data/home';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

export default function index() {
  return (
    <Offer className={styles.offer}>
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Navigation ,Pagination]}
                className={styles.offer_swiper}
            >
                {
                    offersAarray.map((item, index) => {
                        return (
                            <SwiperSlide className={styles.swiperSlide}>
                                <div className={styles.offerItem}>
                                    <div className={styles.offerItemImg}>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className={styles.offerItemTitle}>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className={styles.offerItemPrice}>
                                        <span>{item.price}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>
        </>
    </Offer>
  );
}
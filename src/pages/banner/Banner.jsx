import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import img2 from '../../assets/banner/banner.jpg';
import img3 from '../../assets/banner/banner3.jpg';
import img4 from '../../assets/banner/banner4.webp';
import img5 from '../../assets/banner/banner5.jpeg';
import img1 from '../../assets/banner/coverImage.jpeg';
import img6 from '../../assets/banner/vector-of.jpg';

const Banner = () => {

    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className=' rounded-2xl h-96 w-full ' src={img1} />
                </SwiperSlide>

                <SwiperSlide>
                    <img className=' rounded-2xl h-96 w-full' src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' rounded-2xl h-96 w-full' src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' rounded-2xl h-96 w-full' src={img4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' rounded-2xl h-96 w-full' src={img5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' rounded-2xl h-96 w-full' src={img6} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;




/**
 *  <SwiperSlide>
                    <img className=' rounded-b-2xl ' src={img1} />
                </SwiperSlide>

                <SwiperSlide>
                    <img className=' rounded-b-2xl ' src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' rounded-b-2xl ' src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' rounded-b-2xl ' src={img4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' rounded-b-2xl ' src={img5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' rounded-b-2xl ' src={img6} />
                </SwiperSlide>
 * 
 * 
 * 
 */
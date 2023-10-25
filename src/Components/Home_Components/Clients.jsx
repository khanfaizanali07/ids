import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import logo1 from '../../assets/Images/Clients/akums-logo.jpg'
import logo2 from '../../assets/Images/Clients/baba-logo.jpg'
import logo3 from '../../assets/Images/Clients/biovion-logo.jpg'
import logo4 from '../../assets/Images/Clients/cocycle-logo.jpg'
import logo5 from '../../assets/Images/Clients/deccan-star-logo.jpg'
import logo6 from '../../assets/Images/Clients/feyrepharma-logo.jpg'
import logo7 from '../../assets/Images/Clients/ggh-logo.jpg'
import logo8 from '../../assets/Images/Clients/groundswell-logo.jpg'
import logo9 from '../../assets/Images/Clients/icon-logo.jpg'
import logo10 from '../../assets/Images/Clients/infill-logo.jpg'
import logo11 from '../../assets/Images/Clients/jama-masjid-logo.jpg'
import logo12 from '../../assets/Images/Clients/jonex-logo.jpg'
import logo13 from '../../assets/Images/Clients/jyoti-logo.jpg'
import logo14 from '../../assets/Images/Clients/kaushalya-logo.jpg'
import logo15 from '../../assets/Images/Clients/lib-logo.jpg'
import logo16 from '../../assets/Images/Clients/maple-logo.jpg'
import logo17 from '../../assets/Images/Clients/opensources-logo.jpg'
import logo18 from '../../assets/Images/Clients/qaisar-logo.jpg'
import logo19 from '../../assets/Images/Clients/rahnuma-logo.jpg'
import logo20 from '../../assets/Images/Clients/sofa-factory-logo.jpg'
import logo21 from '../../assets/Images/Clients/ssk-logo.jpg'
import logo22 from '../../assets/Images/Clients/tata-logo.jpg'
import logo23 from '../../assets/Images/Clients/ullman-logo.jpg'
import logo24 from '../../assets/Images/Clients/weh-logo.jpg'

const Clients = () => {
  const clientImages1 = [
    {
      image: logo1,
      href: '',
      target: ''
    },
    {
      image: logo2,
      href: 'https://www.babatraders.in/',
      target: '_blank'
    },
    {
      image: logo3,
      href: 'https://biovionpharma.com/',
      target: '_blank'
    },
    {
      image: logo4,
      href: '',
      target: ''
    },
    {
      image: logo5,
      href: '',
      target: ''
    },
    {
      image: logo6,
      href: 'https://feyrepharma.com/',
      target: '_blank'
    },
    {
      image: logo7,
      href: '',
      target: ''
    },
    {
      image: logo8,
      href: 'https://groundswellproject.org/',
      target: '_blank'
    },
    {
      image: logo9,
      href: 'http://iconconsultants.co.in/',
      target: '_blank'
    },
    {
      image: logo10,
      href: 'https://infill-life.com/',
      target: '_blank'
    },
    {
      image: logo11,
      href: '',
      target: ''
    },
    {
      image: logo12,
      href: 'https://jonex.com.sa/',
      target: '_blank'
    }
  ]
  const clientImages2 = [
    {
        image2: logo13,
        href2: '',
        target2: ''
    },
    {
      image2: logo14,
      href2: '',
      target2: ''
    },
    {
      image2: logo15,
      href2: '',
      target: ''
    },
    {
      image2: logo16,
      href2: '',
      target2: ''
    },
    {
      image2: logo17,
      href2: 'https://opensources.co.in/',
      target2: '_blank'
    },
    {
      image2: logo18,
      href2: 'https://mapleleaftea.com/',
      target2: ''
    },
    {
      image2: logo19,
      href2: 'https://rahnuma.in/',
      target2: ''
    },
    {
      image2: logo20,
      href2: 'https://sofafactory.co.in',
      target2: '_blank'
    },
    {
      image2: logo21,
      href2: 'https://ssk.i-diligence.com/',
      target2: '_blank'
    },
    {
      image2: logo22,
      href2: '',
      target2: ''
    },
    {
      image2: logo23,
      href2: 'https://ullmannlab.com/',
      target2: '_blank'
    },
    {
      image2: logo24,
      href2: 'https://wehimportexport.com/',
      target2: '_blank'
    },

  ]
  return (
    <>
    
    <div className="flex items-center justify-center ">
      <h1 className=" text-xl lg:text-3xl  text-slate-500"> Our Valuable Clients </h1>
    </div>
    <div className=" md:mt-5 lg:mt-6">
    <Swiper
        slidesPerView={2}
        // spaceBetween={30}
        // freeMode={true}
        loop={true}
        modules={[Autoplay, Pagination]}
        dir = 'rtl'
        autoplay={
          {
            delay: 2000,
            disableOnInteraction: false
          }
        }
        breakpoints={{
          
          640: {
            slidesPerView: 3
          },
          1080: {
            slidesPerView: 5
          }
        }
        }
        className="mySwiper w-full "
      >
        {clientImages1.map((images, index) =>
          <SwiperSlide> <a href={images.href} key={index} target={images.target}> <img className="w-[200px] hover:scale-110 duration-300" src={images.image} alt="Clients Logos"/></a></SwiperSlide>
        )}
        
      </Swiper>
      <Swiper
        slidesPerView={2}
        // spaceBetween={30}
        // freeMode={true}
        loop={true}
        modules={[Autoplay, Pagination]}
        dir = 'ltr'
        autoplay={
          {
            delay: 2000,
            disableOnInteraction: false
          }
        }
        breakpoints={{
          
          640: {
            slidesPerView: 3
          },
          1080: {
            slidesPerView: 5
          }
        }
        }
        className="mySwiper w-full "
      >
        {clientImages2.map((images, index) =>
          <SwiperSlide> <a href={images.href2} key={index} target={images.target2}> <img className="w-[200px] hover:scale-110 duration-300" src={images.image2} alt="Clients Logos"/></a></SwiperSlide>
        )}
        
      </Swiper>
    </div>
  </>
  )
}

export default Clients

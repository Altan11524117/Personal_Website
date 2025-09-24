import { useState, useEffect } from 'react';
import img1 from '../public/picture/1.jpg';
import img54 from '../public/picture/54.jpg';
import img2 from '../public/picture/2.jpg';
import gt3rs from '../public/videos/gt3rs.mp4'
import cls from '../public/videos/cls.mp4'

const Body = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="bg-gray-100">

      <section
        className="relative w-full h-screen md:h-[80vh] bg-cover bg-center bg-no-repeat grayscale"
        style={{
          backgroundImage: `url(${isMobile ? img1 : img54})`
        }}
      >
        <div className="absolute bottom-8 left-4 md:left-8 text-gray-800">
          <h2 className="text-lg md:text-xl font-light tracking-wider uppercase mb-2 text-white">Altan Aydin</h2>
          <p className="text-sm tracking-wider uppercase mb-4 text-white">
            FULL STACK DEVELOPER<br />
            /2025
          </p>
        </div>
      </section>


      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-200 p-8 md:p-12 flex flex-col justify-between min-h-[350px] md:min-h-[500px]">
          <div>
            <h3 className="text-lg md:text-xl font-light tracking-wider uppercase mb-4">Nelerle ilgileniyorum?</h3>
            <p className="text-sm tracking-wider  text-gray-700">
              WEB DEVELOPMENT<br />
              ama frontend pek bana hitap etmiyor  kendimi backend alaninda gelistirmeyi dusunuyorum  ordanda artik daha sipesifik olan alanalara  yol alamk
              ve kendi  saas girismimi kurmak istiyorum.
              <br />
              Nelerle  Ugrastim ?
              Okula  basladigimdan beri tum alanladan biraz biraz arastirip biraz biraz ilgilendim fakat tamamen icime sinen bir yol yok



            </p>
          </div>
          <br />
        </div>


        <div className="bg-gray-300 p-8 md:p-12 flex flex-col justify-between min-h-[350px] md:min-h-[500px]">
          <div>
            <h3 className="text-lg md:text-xl font-light tracking-wider uppercase mb-4">Hobilerim</h3>
            <p className="text-sm tracking-wider uppercase text-gray-700">
              Spor<br />
              Kitap Okumak<br />
              Film izlemek<br />
              Müzik dinlemek<br />
              Doğa yürüyüşü yapmak<br />
              Yüzmek<br />
              Tennis<br />
            </p>
          </div>
          <br />
        </div>


      </section>


      <section className="bg-gray-100 p-8 md:p-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm md:text-base leading-relaxed tracking-wide text-gray-800">
            BURASI GUZELK GOZUKSUN DIYE VAR
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas blanditiis nobis esse minus accusantium voluptatum cum magnam! Totam facilis consequuntur aliquid tempore fuga necessitatibus minus. Placeat odio iure perferendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eos atque a officiis ducimus unde beatae odio nihil eaque veritatis ullam dolor quasi quam, doloremque cupiditate. Provident laudantium dolorum aliquam!
          </p>
        </div>
      </section>


      <section className={`${isMobile ? 'flex flex-col' : 'grid grid-cols-2'}`}>
        <video
          src={gt3rs}
          className="w-full h-full object-cover grayscale min-h-[300px] md:min-h-[400px]"
          controls
          muted
          autoPlay
          loop

        >
        </video>

        <div className="bg-gray-300 p-8 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[400px]">
          <div>
            <p className="text-xs tracking-wider uppercase text-gray-600 mb-4">03/04/2028</p>
            <h4 className="text-sm md:text-base font-medium tracking-wider uppercase mb-6">
              911 GT3 RS<br />
            </h4>
            <h5>
              Porsche 911 GT3 RS. Pist ruhunu yola taşıyan bu canavar gerçekten hayalimdeki otomobil. 525 beygirlik atmosferik motoru, devasa arka kanadı ve yarıştan fırlamış gibi duran tasarımıyla bana tam olarak istediğim heyecanı veriyor.

              Hem pistteki performansı hem de yolda sunduğu o saf sürüş keyfiyle GT3 RS, benim için sadece bir araba değil, ulaşmak istediğim bir hedef. İleride garajımda görmek istediğim ilk otomobillerden.

            </h5>

            <br />
          </div>
          <a href="https://www.porsche.com.tr/911-gt3-rs" className="text-xs tracking-wider uppercase hover:text-gray-600 transition-colors self-start">
            Tasarima ulasabilirizin
          </a>
        </div>


        <div className={`bg-gray-200 p-8 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[400px] ${isMobile ? 'order-3' : ''}`}>
          <div>
            <p className="text-xs tracking-wider uppercase text-gray-600 mb-4">10/1/2027</p>
            <h4 className="text-sm md:text-base font-medium tracking-wider uppercase mb-6">
              Mercedes CLS 63<br />
            </h4>
            <h3>Bu araba, "ben buradayım" diyenlerden. AMG motoruyla her bastığında tepkiyi hissettiriyor, sert ve agresif. Tasarımıyla dikkat çekiyor, sesiyle heyecan veriyor.

              Bana göre CLS 63, sadece bir araba değil; güç ve stilin birleştiği bir makine. Garajımda görmek istediğim ilk otomobillerden biri kesin.</h3>
          </div>
          <a href="#" className="text-xs tracking-wider uppercase hover:text-gray-600 transition-colors self-start">
            Maalesef uretimden  kaltigi icin 2.el mevcut
          </a>
        </div>

        <div className={`relative ${isMobile ? 'order-2' : ''}`}>
          <video
            src={cls}
            className="w-full h-full object-cover grayscale min-h-[300px] md:min-h-[400px]"
            controls
            muted
            autoPlay
            loop

          >
          </video>
        </div>


        { /*  <div className={`relative ${isMobile ? 'order-4 col-span-1' : 'md:col-span-2'}`}>
          <img
            src={img2}
            alt="Photography blog post"
            className="w-full h-full object-cover grayscale min-h-[200px] md:min-h-[300px]"
          />
        </div>
       */ }
      </section>
    </main>
  );
};

export default Body;

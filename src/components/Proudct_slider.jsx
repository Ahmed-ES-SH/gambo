import React, { useEffect, useState } from "react";
import { Axiostool } from "../Constants/axiosfile";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";

const Proudct_slider = (props) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    Axiostool.get(`/products`).then((data) => setproducts(data.data));
  }, []);

  const images_product = (
    <Swiper spaceBetween={50} slidesPerView={3}>
      {products.map((product) =>
        product.images.map((img, key) => (
          <SwiperSlide key={key} className="flex gap-4  ">
            {img.product_id == props.id && (
              <img width={"60px"} src={img.image} alt={img.image} />
            )}
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
  return <div>{images_product}</div>;
};

export default Proudct_slider;

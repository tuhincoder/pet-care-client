import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-10  ">
      <SectionTitle
        subHeading={"Testimonials"}
        Heading={"what our customers says"}
        description={
          "Hi there! Were thrilled to hear that you are considering adopting a pet Here's a bit more about our adoption process and what you can expect when you visit us"
        }
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="md:px-48 px-16 flex flex-col items-center space-y-4 py-3">
              <h2 className=" text-3xl capitalize">Customer think about us</h2>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="">{review.details}</p>
              <h2 className="text-xl text-sky-500">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

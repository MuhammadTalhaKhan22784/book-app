import "./Slider.css";

// SLIDER ------------------------
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// Components--------------------
import BookCard from "../BookCard/BookCard";

const Slider = ({ heading, books }) => {
  return (
    <div className="slider">
      <h1>{heading}</h1>
      <Splide
        options={{
          width: "100%",
          perPage: 6,
          perMove: 1,
          pagination: false,
          arrows: true,
          type: "loop",
          breakpoints: {
            1316: {
              perPage: 5,
            },
            1098: {
              perPage: 4,
            },
            924: {
              perPage: 3,
            },
            722: {
              perPage: 2,
            },
            500: {
              perPage: 1,
            },
          },
        }}
        className="book-slider"
      >
        <SplideSlide>
          <BookCard
            img={"/Assets/landing/book.png"}
            name={"圖解數學"}
            rating="4.4"
            price={"60"}
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Slider;

import NextArrow from "./NextArrow"
import PreviousArrow from "./PreviousArrow"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import Slider from "react-slick";

const Slides = ({ children, settings, ...props }) => {
    const nsettings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },],
        ...settings
    }
    return (
        <Slider {...nsettings}>
            {children}
        </Slider>
    );
}
export default Slides;
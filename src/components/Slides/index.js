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
        ...settings
    }
    return (
        <Slider {...nsettings}>
            {children}
        </Slider>
    );
}
export default Slides;
import arrow from "assets/slider_arrow.svg";
const NextArrow = ({ className, style, onClick }) => {
    return (
        <img
            src={arrow}
            className={`arrow-bg right`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}
export default NextArrow;
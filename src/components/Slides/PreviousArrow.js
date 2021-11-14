import arrow from "assets/slider_arrow.svg";

const PreviousArrow = ({ className, style, onClick }) => {
    return (
        <img
            src={arrow}
            className={`arrow-bg left`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}
export default PreviousArrow;
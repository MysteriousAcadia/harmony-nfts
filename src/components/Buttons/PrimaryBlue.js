const PrimaryBlue = ({ className = "", children, ...props }) => {
    return (<button
        className={`bg-main-default text-white  px-3 py-3 font-bold rounded-md shadow-sm hover:text-main-default hover:bg-main-light ${className}`}
        {...props}
    >{children}</button>
    );
}
export default PrimaryBlue;
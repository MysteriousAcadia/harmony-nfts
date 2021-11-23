const SecondaryWhite = ({ className = "", children, ...props }) => {
    return (<button
        className={`bg-transparent text-main-default  px-3 py-3 font-bold rounded-md  hover:text-main-default hover:bg-main-light ${className}`}
        {...props}
    >{children}</button>
    );
}
export default SecondaryWhite;
const PrimaryWhite = ({ className = "", children, ...props }) => {
	return (
		<button
			className={`bg-white text-main-default  px-3 py-3 font-bold rounded-md  hover:text-main-default hover:bg-main-light ${className}`}
			{...props}>
			{children}
		</button>
	);
};
export default PrimaryWhite;

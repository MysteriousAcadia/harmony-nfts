const SecondaryButton = ({ className = "", children, ...props }) => {
	return (
		<button
			className={`bg-white  px-6 py-4 font-bold rounded-md shadow-sm ${className}`}
			{...props}>
			<div className="blue-text">{children}</div>
		</button>
	);
};
export default SecondaryButton;

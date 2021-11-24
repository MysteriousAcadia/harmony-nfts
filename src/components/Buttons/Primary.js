const PrimaryButton = ({ className = "", children, ...props }) => {
	return (
		<button
			className={`blue-gradient px-6 py-4 font-bold rounded-md shadow-sm ${className}`}
			{...props}>
			{children}
		</button>
	);
};
export default PrimaryButton;

export default ({ className, children, ...props }) => {
	return (
		<div className={`font-bold text-3xl text-white ${className}`}>
			{children}
		</div>
	);
};

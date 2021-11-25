import "./style.css";
const TextInput = ({ className, ...props }) => {
	return (
		<>
			<input className={`text-input ${className}`} {...props}></input>
		</>
	);
};
export default TextInput;

import "./style.css";
const ONEInput = ({ value, onChange }) => {
	return (
		<>
			<div className="flex items-center">
				<div className="bg-main-default text-xl text-white font-bold py-6 px-7">
					ONE
				</div>
				<input
					value={value}
					onChange={onChange}
					type="number"
					className="one-input flex-grow text-xl text-main-default font-bold py-6 pl-2 pr-7" />
				<div className="one-input flex-grow leading-7 text-main-default  py-6 px-7">
					$0
				</div>
			</div>
		</>
	);
};
export default ONEInput;

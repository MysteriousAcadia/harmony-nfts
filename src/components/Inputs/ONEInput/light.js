import "./style.css";

const ONEInputLight = ({ value, onChange }) => {
	return (
		<>
			<div className="flex items-center">
				<div className="bg-white text-xl text-center text-main-default font-bold py-6 px-7">
					ONE
				</div>
				<input
					value={value}
					onChange={onChange}
					className="one-input flex-grow text-xl text-main-default font-bold py-6 pl-2 pr-7" />
				<div className="flex-grow leading-7 text-main-default bg-white py-6 px-7 text-center">
					$0
				</div>
			</div>
		</>
	);
};
export default ONEInputLight;

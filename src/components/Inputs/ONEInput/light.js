import "./style.css";

const ONEInputLight = ({}) => {
	return (
		<>
			<div className="flex items-center">
				<div className="bg-white text-xl text-main-default font-bold py-6 px-7">
					ONE
				</div>
				<input className="one-input flex-grow text-xl text-main-default font-bold py-6 pl-2 pr-7" />
				<div className="one-input flex-grow leading-7 text-main-default  py-6 px-7">
					$0
				</div>
			</div>
		</>
	);
};
export default ONEInputLight;

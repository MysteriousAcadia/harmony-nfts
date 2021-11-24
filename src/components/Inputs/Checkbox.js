import Tick from "assets/tick.svg";
import { useState, useEffect } from "react";

const Checkbox = ({ value = false, onChange = value => {}, children }) => {
	const [check, setCheck] = useState(false);
	useEffect(() => {
		setCheck(value);
	}, [value]);
	return (
		<>
			<div className="flex items-center">
				<div
					onClick={() => {
						setCheck(!check);
						onChange(!check);
					}}
					className="cursor-pointer mr-2 rounded-md bg-white h-8 w-8 flex items-center justify-around">
					{check && <img src={Tick} />}
				</div>
				<div>{children}</div>
			</div>
		</>
	);
};
export default Checkbox;

import Tick from "assets/tick.svg";
import { useState } from "react";
const Checkbox = ({ children }) => {
    const [check, setCheck] = useState(false);
    return (<>
        <div className="flex items-center">
            <div onClick={() => { setCheck(!check) }} className="cursor-pointer mr-2 rounded-md bg-white h-8 w-8 flex items-center justify-around">
                {check && <img src={Tick} />}
            </div>
            <div>
                {children}
            </div>
        </div>
    </>);
}
export default Checkbox
import TimeIcon from "assets/time_icon.svg";
import "./style.css"
const TimeInput = ({ }) => {
    return (<>
        <div className="outer pl-3 items-center flex p-2 ml-2">
            <img src={TimeIcon} />
            <input type="number" maxLength={2} min="1" max="12" className=" ml-1 rounded time_ip p-1" />
            <div className="mx-1">:</div>
            <input type="number" maxLength={2} min="1" max="12" className=" rounded time_ip p-1" />
            <input type="text" value={"AM"} maxLength={2} min="1" max="12" className="ml-1 rounded time_ip p-1" />

        </div>
    </>);
}
export default TimeInput
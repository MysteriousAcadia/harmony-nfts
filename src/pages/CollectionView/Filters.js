import LightDropdown from "components/Dropdowns/LightDropdown/index";
import MultiSelectDropdown from "components/Dropdowns/MultiSelectDropdown/index";

const Filters = ({ collectionDetail = {} }) => {
    console.log(collectionDetail);
    const { attributes = [] } = collectionDetail;
    return (<><div className="container px-4 mx-auto">
        <div className="flex justify-between">

        </div>
        <div className="text-xl text-white font-bold my-4">Attributes</div>
        <div className="flex flex-wrap items-end space-x-2 space-y-2">
            {attributes.map(e => {
                return (<MultiSelectDropdown
                    options={e.values}
                    title={e.key}
                />
                );
            })}
            {/* <LightDropdown options={["Background(42)"]} />
            <LightDropdown options={["SquaasDAdsre(42)"]} />
            <LightDropdown options={["Skin Tone(42)"]} />
            <LightDropdown options={["Team Shirt(42)"]} />
            <LightDropdown options={["Cheeks(42)"]} />
            <LightDropdown options={["Facial Features(42)"]} />
            <LightDropdown options={["Background(42)"]} />
            <LightDropdown options={["Square(42)"]} />
            <LightDropdown options={["Skin Tone(42)"]} />
            <LightDropdown options={["Team Shirt(42)"]} />
            <LightDropdown options={["Cheeks(42)"]} />
            <LightDropdown options={["Facial Features(42)"]} /> */}

        </div>
        <div className="mt-4 flex justify-end"><LightDropdown options={["Daily Volume(Low to High)"]} /></div>
    </div>
    </>);
}
export default Filters
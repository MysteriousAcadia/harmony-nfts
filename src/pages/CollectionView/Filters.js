import LightDropdown from "components/Dropdowns/LightDropdown/index";
import MultiSelectDropdown from "components/Dropdowns/MultiSelectDropdown/index";

const Filters = ({ collectionDetail = {}, filters, setFilters }) => {
	console.log(collectionDetail);
	const { attributes = [] } = collectionDetail || {};
	const updateFilter = (key, value) => {
		let newFilter = { ...filters };
		newFilter[key] = value;
		setFilters(newFilter)
	}
	return (
		<>
			<div className="container px-4 mx-auto">
				<div className="flex justify-between"></div>
				<div className="text-xl text-white font-bold my-4">Attributes</div>
				<div className="flex flex-wrap items-end space-x-2 space-y-2">
					{attributes.map(e => {
						return <MultiSelectDropdown
							options={e.values}
							title={e.key}
							value={filters[e.key]}
							onChange={(newOption) => updateFilter(e.key, newOption)}
						/>;
					})}

				</div>
				<div className="mt-4 flex justify-end">
					<LightDropdown options={["Daily Volume(Low to High)"]} />
				</div>
			</div>
		</>
	);
};
export default Filters;

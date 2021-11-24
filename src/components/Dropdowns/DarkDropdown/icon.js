/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import "./style.css";
import DownIcon from "assets/down_icon.svg";
import OptionsIcon from "assets/options_icon.svg";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function DarkDropdownWithIcon({
	options,
	onChange = newOption => { },
	initialValue,
}) {
	const [currOptions, setCurrOptions] = useState(["Select..."]);
	const [selectedOption, setSelectedOption] = useState();
	useEffect(() => {
		console.log(initialValue);
		console.log(options)
		setCurrOptions(options);
		if (initialValue) {
			setSelectedOption(initialValue);
		} else if (options && options?.length && options.length > 0) {
			setSelectedOption(options[0]);
		}
	}, []);
	const changeOption = newOption => {
		setSelectedOption(newOption);
		onChange(newOption);
	};

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="flex items-center justify-between w-40 px-3 py-3 text-main-default text-sm main-option">
					<img src={OptionsIcon} className="pr-4" />
					<div className="pr-4">{selectedOption}</div>
					<img src={DownIcon} />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95">
				<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 rounded-md shadow-lg bg-white dark-menu-background">
					<div className="py-1">
						{options.map(option => {
							return (
								<Menu.Item>
									{({ active }) => (
										<div
											className={classNames(
												active
													? "dark-selected-option "
													: "bg-transparent hover:dark-selected-option",
												"block pl-4 pr-16 py-2 text-sm text-white cursor-pointer"
											)}
											onClick={() => changeOption(option)}>
											{option}
										</div>
									)}
								</Menu.Item>
							);
						})}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import DownIcon from "assets/down_icon.svg";
import "./style.css";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function LightDropdown({
	options,
	onChange = newOption => {},
	initialValue,
}) {
	const [currOptions, setCurrOptions] = useState(["Select..."]);
	const [selectedOption, setSelectedOption] = useState(options[0]);
	useEffect(() => {
		setCurrOptions(options);
		if (initialValue) {
			setSelectedOption(initialValue);
		} else if (options && options?.length && options.length > 0) {
			setSelectedOption(options[0]);
		}
	}, [options, initialValue]);
	const changeOption = newOption => {
		setSelectedOption(newOption);
		onChange(newOption);
	};

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex justify-between items-center w-full  px-4 py-2 text-white  text-sm  main-option ">
					<div className="mr-2">{selectedOption}</div>
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
				<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white menu-background">
					<div className="py-1">
						{options.map(option => {
							return (
								<Menu.Item>
									{({ active }) => (
										<div
											className={classNames(
												active
													? "selected-option "
													: "bg-transparent hover:selected-option",
												"block px-4 py-2 text-sm text-white font-bold cursor-pointer"
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

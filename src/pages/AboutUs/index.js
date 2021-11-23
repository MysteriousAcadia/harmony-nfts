import teamAvatar from "assets/team_avatar.svg";

const AboutUs = ({}) => {
	const team = [
		{
			name: "Leochii",
			title: "Lead Artist and Illustrator",
		},
		{
			name: "Leochii",
			title: "Lead Artist and Illustrator",
		},
		{
			name: "Leochii",
			title: "Lead Artist and Illustrator",
		},
		{
			name: "Leochii",
			title: "Lead Artist and Illustrator",
		},
		{
			name: "Leochii",
			title: "Lead Artist and Illustrator",
		},
		{
			name: "Leochii",
			title: "Lead Artist and Illustrator",
		},
		{
			name: "Leochii",
			title: "Lead Artist and Illustrator",
		},
		{
			name: "Leochii",
			title: "Lead Artist and Illustrator",
		},
	];

	return (
		<>
			<div className="container px-4 mx-auto mt-4 text-white text-center">
				<div className="text-3xl mb-8 font-semibold">About Armoonia</div>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</div>
				<div className="font-semibold text-3xl my-12">Our Team</div>
				<div className="grid grid-cols-4 gap-2 justify-items-center">
					{team.map(item => (
						<div key="item.name" className="my-2">
							<img src={teamAvatar} alt="Avatar" />
							<h3 className="pt-2 text-lg font-semibold">{item.name}</h3>
							<p>{item.title}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
export default AboutUs;

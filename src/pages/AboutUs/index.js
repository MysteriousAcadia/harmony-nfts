import teamAvatar from "assets/team_avatar.svg";
import twitterIcon from "assets/twitter_icon.svg";
import discordIcon from "assets/discord_icon.svg";
import roadmap from "assets/roadmap.svg";

const AboutUs = ({ }) => {
	const team = [
		{
			name: "Leochii",
			title: "Lead Artist and Illustrator",
			image: "assets/people/"
		},
		{
			name: "Kaija",
			title: "Lead Art Supervisor",
		},
		{
			name: "Sirsapient",
			title: "Community Manager",
		},
		{
			name: "Globey",
			title: "Content and Branding",
		},
		{
			name: "Flu",
			title: "Marketing",
		},
		{
			name: "Miss Freya",
			title: "Lead Marketing",
		},
		{
			name: "Tailchakra",
			title: "Technical Supervisor",
		},
		{
			name: "Ray",
			title: "Web Design",
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

				<div className="font-semibold text-3xl mt-24 mb-12">Roadmap</div>
				<div className="flex flex-row justify-center mb-12">
					<div className="flex flex-col justify-between">
						<div className="mt-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
						<div></div>
						<div className="mb-16">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
						<div></div>
					</div>
					<img src={roadmap} />
					<div className="flex flex-col-reverse justify-between">
						<div className="mb-11">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
						<div></div>
						<div className="mt-11">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
						<div></div>
					</div>
				</div>
				<div className="mb-12">
					<p className="text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea co
					</p>
				</div>
				<div className="text-3xl my-8 font-semibold">Join our Community</div>
				<div className="mb-10 text-lg">
					stay tuned for more news each day, giveaways and more!
				</div>
				<div className="flex flex-row justify-center space-x-12 text-center justify-items-center mb-20">
					<div className="flex flex-col justify-center">
						<img src={twitterIcon} alt="Twitter Icon" className="h-10" />
						<div>
							<a href="https://twitter.com/ArmooniaApp" target="_blank" className="underline text-gray-300">
								Follow us on Twitter
							</a>
						</div>
					</div>
					<div className="flex flex-col justify-center">
						<img src={discordIcon} alt="Discord Icon" className="h-10" />
						<div>
							<a href="https://discord.com/invite/armoonia" target="_blank" className="underline text-gray-300">
								Join our Discord here
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AboutUs;

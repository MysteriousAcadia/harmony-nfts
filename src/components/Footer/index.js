import logoFull from "assets/logo_full.svg";
import { Link } from "react-router-dom";
const navigation = {
	marketplace: [
		{ name: "Collections", href: "/collections" },
		{ name: "Stats", href: "/stats" },
	],
	account: [
		{ name: "Profile/Settings", href: "/profile" },
		{ name: "Collected Items", href: "/profile/1" },
		{ name: "Favorites", href: "/profile/2" },
		{ name: "Followed Collections", href: "/profile/3" },
		{ name: "Activity", href: "/profile/4" },
		{ name: "Harmoonie Rewards", href: "/profile/5" },
	],
	company: [
		{ name: "About Us", href: "/about" },
		{ name: "Privacy Policy", href: "#" },
		{ name: "Cookie Policy", href: "#" },
		{ name: "Terms & Conditions", href: "#" },
		{ name: "Contact", href: "#" },
	],
	social: [
		{
			name: "Discord",
			href: "https://discord.gg/armoonia",
			icon: props => (
				<svg
					className="cursor-pointer"
					width="44"
					height="46"
					viewBox="0 0 44 46"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_508_7134)" filter="url(#filter0_d_508_7134)">
						<path
							d="M8.66837 33.5603H31.2451L30.1669 30.0691L32.7461 32.2826L35.11 34.4011L39.4167 38V3.91875C39.309 1.80025 37.485 0 35.224 0L8.67629 0.00475C6.41687 0.00475 4.58337 1.80817 4.58337 3.92667V29.64C4.58337 31.8741 6.41371 33.5603 8.66837 33.5603ZM25.3694 8.99808L25.3171 9.01708L25.3361 8.99808H25.3694ZM13.287 11.0073C16.1892 8.89517 18.8793 8.9965 18.8793 8.9965L19.0962 9.21025C15.5448 10.0573 13.9345 11.6438 13.9345 11.6438C13.9345 11.6438 14.3652 11.4333 15.1173 11.1118C19.9005 9.23083 25.124 9.367 29.9595 11.7483C29.9595 11.7483 28.346 10.2647 25.0131 9.31475L25.3076 9.025C25.7684 9.02658 28.2067 9.11208 30.816 11.02C30.816 11.02 33.7357 16.0075 33.7357 22.135C33.6391 22.0178 31.9244 24.7728 27.5116 24.8678C27.5116 24.8678 26.7643 24.0223 26.2323 23.2845C28.8131 22.5435 29.779 21.0615 29.779 21.0615C28.9319 21.5951 28.1592 21.9117 27.5322 22.2284C26.568 22.6528 25.6021 22.8617 24.6379 23.0755C20.0715 23.8165 17.5081 22.5767 15.0856 21.5935L14.2575 21.1723C14.2575 21.1723 15.2218 22.6543 17.6997 23.3953C17.049 24.1379 16.4045 24.9818 16.4045 24.9818C11.9934 24.8773 10.3847 22.1223 10.3847 22.1223C10.3847 15.9853 13.287 11.0073 13.287 11.0073Z"
							fill="white"
						/>
						<path
							d="M25.6543 20.2208C26.7801 20.2208 27.6968 19.2708 27.6968 18.0991C27.6968 16.9354 26.7848 15.9854 25.6543 15.9854V15.9901C24.5333 15.9901 23.615 16.9369 23.6118 18.1086C23.6118 19.2708 24.5286 20.2208 25.6543 20.2208Z"
							fill="white"
						/>
						<path
							d="M18.3425 20.2208C19.4683 20.2208 20.385 19.2708 20.385 18.0991C20.385 16.9354 19.4746 15.9854 18.3489 15.9854L18.3425 15.9901C17.2168 15.9901 16.3 16.9369 16.3 18.1086C16.3 19.2708 17.2168 20.2208 18.3425 20.2208Z"
							fill="white"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_508_7134"
							x="-1"
							y="0"
							width="46"
							height="46"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="2" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_508_7134"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_508_7134"
								result="shape"
							/>
						</filter>
						<clipPath id="clip0_508_7134">
							<rect
								width="38"
								height="38"
								fill="white"
								transform="translate(3)"
							/>
						</clipPath>
					</defs>
				</svg>
			),
		},
		{
			name: "Twitter",
			href: "https://twitter.com/ArmooniaApp",

			icon: props => (
				<svg
					className="cursor-pointer"
					width="34"
					height="34"
					viewBox="0 0 34 34"
					fill="none"
					xmlns="http://www.w3.org/2000/svg" >
					<g clip-path="url(#clip0_508_7138)">
						<path
							d="M32.13 1.87027C30.8835 0.623501 29.3818 0 27.6258 0H6.37569C4.61978 0 3.11801 0.623501 1.871 1.87027C0.624234 3.11727 0.000732422 4.61897 0.000732422 6.37496V27.6249C0.000732422 29.3807 0.624234 30.8826 1.871 32.1296C3.11801 33.3766 4.61978 34.0001 6.37569 34.0001H27.6256C29.3815 34.0001 30.8833 33.3766 32.1298 32.1296C33.3768 30.8826 34.0003 29.3808 34.0003 27.6249V6.37496C34.0002 4.61897 33.3767 3.11704 32.13 1.87027ZM26.0098 13.0821C26.0246 13.2149 26.0321 13.4138 26.0321 13.6799C26.0321 14.9195 25.8512 16.1628 25.4898 17.4094C25.1284 18.6567 24.5749 19.852 23.8294 20.9955C23.0846 22.139 22.1955 23.1502 21.1627 24.0281C20.1296 24.9058 18.8902 25.6071 17.4437 26.1305C15.9979 26.6548 14.4481 26.9169 12.7955 26.9169C10.228 26.9169 7.85211 26.2229 5.66799 24.8363C6.02215 24.8804 6.39128 24.9026 6.77474 24.9026C8.91459 24.9026 10.8404 24.2386 12.5522 22.9101C11.5489 22.8957 10.6523 22.5861 9.86287 21.9804C9.07322 21.3754 8.52368 20.6082 8.21371 19.6784C8.59726 19.7374 8.88497 19.7666 9.07678 19.7666C9.4014 19.7666 9.77781 19.7077 10.2056 19.5899C9.12842 19.383 8.221 18.8486 7.48314 17.9853C6.74513 17.1219 6.37624 16.1369 6.37624 15.0302V14.986C7.15813 15.3546 7.89599 15.5464 8.58966 15.5614C7.24675 14.661 6.57533 13.37 6.57533 11.6877C6.57533 10.8613 6.78916 10.0792 7.21713 9.34136C8.38281 10.7729 9.79976 11.9164 11.4671 12.7722C13.1345 13.628 14.9203 14.1079 16.8238 14.2111C16.7501 13.9307 16.7132 13.5764 16.7132 13.1486C16.7132 11.8645 17.167 10.769 18.0746 9.86136C18.9819 8.95378 20.0778 8.49984 21.3614 8.49984C22.7194 8.49984 23.8485 8.98697 24.7486 9.96098C25.7669 9.76917 26.756 9.39268 27.7149 8.83214C27.3461 9.96812 26.6595 10.8315 25.6565 11.4218C26.6154 11.2888 27.5079 11.038 28.3342 10.6691C27.7145 11.6135 26.9395 12.4178 26.0098 13.0821Z"
							fill="white"
						/>
					</g>
					<defs>
						<clipPath id="clip0_508_7138">
							<rect width="34" height="34" fill="white" />
						</clipPath>
					</defs>
				</svg >
			),
		},
		{
			name: "Website",
			href: "https://armoonia.app/",
			icon: props => (
				<svg
					className="cursor-pointer"
					width="34"
					height="33"
					viewBox="0 0 34 33"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6 0C2.68629 0 0 2.68629 0 6V27C0 30.3137 2.68629 33 6 33H28C31.3137 33 34 30.3137 34 27V6C34 2.68629 31.3137 0 28 0H6ZM17.696 24.1568C18.2173 23.8448 18.7247 23.3062 19.1833 22.4857C19.6481 21.6539 20.0152 20.5999 20.2424 19.388H17.696V24.1568ZM16.196 24.4789V19.388H12.7576C12.9848 20.5999 13.3519 21.6539 13.8167 22.4857C14.5347 23.7705 15.3725 24.364 16.196 24.4789ZM12.5569 17.888H16.196V14H12.6905C12.5669 14.7793 12.5 15.6179 12.5 16.5C12.5 16.9762 12.5195 17.4397 12.5569 17.888ZM11.1736 14C11.0595 14.7966 11 15.6348 11 16.5C11 16.9715 11.0177 17.4349 11.0522 17.888H8.61998C8.54112 17.4372 8.5 16.9734 8.5 16.5C8.5 15.6269 8.63985 14.7865 8.89838 14H11.1736ZM13.0171 12.5H16.196V8.52107C15.3725 8.63599 14.5347 9.22952 13.8167 10.5143C13.5005 11.0801 13.2295 11.7488 13.0171 12.5ZM12.6974 9.45978C12.171 10.3082 11.754 11.3407 11.4651 12.5H9.57026C10.3105 11.2203 11.3951 10.1646 12.6974 9.45978ZM16.5 7C21.7467 7 26 11.2533 26 16.5C26 21.7467 21.7467 26 16.5 26C11.2533 26 7 21.7467 7 16.5C7 11.2533 11.2533 7 16.5 7ZM12.6974 23.5402C11.0345 22.6402 9.72655 21.1682 9.03717 19.388H11.2341C11.5063 21.0022 12.0079 22.429 12.6974 23.5402ZM20.3026 23.5402C21.9655 22.6402 23.2734 21.1682 23.9628 19.388H21.7659C21.4937 21.0022 20.9921 22.429 20.3026 23.5402ZM21.9478 17.888H24.38C24.4589 17.4372 24.5 16.9734 24.5 16.5C24.5 15.6269 24.3601 14.7865 24.1016 14H21.8264C21.9405 14.7966 22 15.6348 22 16.5C22 16.9715 21.9823 17.4349 21.9478 17.888ZM20.3095 14H17.696V17.888H20.4431C20.4805 17.4397 20.5 16.9762 20.5 16.5C20.5 15.6179 20.4331 14.7793 20.3095 14ZM19.9829 12.5H17.696V8.84317C18.2173 9.1552 18.7247 9.69377 19.1833 10.5143C19.4995 11.0801 19.7705 11.7488 19.9829 12.5ZM21.5349 12.5H23.4297C22.6895 11.2203 21.6049 10.1646 20.3026 9.45978C20.829 10.3082 21.246 11.3407 21.5349 12.5Z"
						fill="white"
					/>
				</svg>
			),
		},
	],
};

export default function Footer() {
	return (
		<footer
			className="glass-background text-white"
			aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="space-y-8 xl:col-span-1">
						<img className="h-3" src={logoFull} alt="Company name" />
						<p className="text-sm italic">
							Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
						</p>
					</div>
					<div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="font-semibold italic">Join the community</h3>
								<div className="flex space-x-3 my-3">
									{navigation.social.map(item => (
										<a
											key={item.name}
											href={item.href}
											target="_blank"
											className="text-gray-400 hover:text-gray-500">
											<span className="sr-only">{item.name}</span>
											<item.icon className="h-6 w-6" aria-hidden="true" />
										</a>
									))}
								</div>
							</div>
							<div>
								<h3 className="font-semibold italic">Marketplace</h3>
								<ul role="list" className="mt-4 space-y-4 font-light">
									{navigation.marketplace.map(item => (
										<li key={item.name}>
											<Link
												to={item.href}
												className="text-sm italic hover:text-gray-900">
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className=" font-bold italic">Account</h3>
								<ul role="list" className="mt-4 space-y-4 font-light">
									{navigation.account.map(item => (
										<li key={item.name}>
											<Link
												to={item.href}
												className="text-sm italic hover:text-gray-900">
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div>
								<h3 className=" font-bold italic">Company</h3>
								<ul role="list" className="mt-4 space-y-4 font-light">
									{navigation.company.map(item => (
										<li key={item.name}>
											<Link
												to={item.href}
												className="text-sm italic hover:text-gray-900">
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

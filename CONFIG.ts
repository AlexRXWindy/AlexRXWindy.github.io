const CONFIG = {
	// Defines your page name, in the heading and in the tab title.
	name: "Alex Portafolio",
	// Defines the banner at the top of the page.
	header: {
		bannerUrl: "/banner.gif",
		avatarUrl: "/avatar.gif",
	},
	// Description of your page, this shows up below the heading & in OG tags.
	description: "Desarrollador activo actualmente en CFX.RE.",
	// The theme color of your page. Used if background is toggled off.
	themeColor: "#5e5e5e",
	// Default theme.
	darkMode: true,
	// Whether or not to avail the theme switcher.
	displayThemeSwitcher: true,
	background: {
		// Background image settings.
		image: {
			enable: true,
			// Upload the image to the ./public folder and set the url below to `/image_name.png|jpg|gif`.
			url: "/background.gif",
		},
	},
	// Whether or not to open links in a new tab or the same one.
	openLinksInNewTab: true,
	// Your links.
	// Toggle enabled from true to false to hide a link.
	// The order property defines the order in which the links are displayed on the page.
	links: [
		{ enabled: false, name: "Facebook", url: "https://www.facebook.com/your_facebook", order: 1 },
		{ enabled: true, name: "Twitter", url: "https://x.com/Aleexxrx", order: 2 },
		{ enabled: false, name: "Instagram", url: "https://www.instagram.com/your_instagram", order: 3 },
		{ enabled: true, name: "GitHub", url: "https://github.com/AlexRXWindy", order: 4 },
		{ enabled: false, name: "LinkedIn", url: "https://www.linkedin.com/in/your_linkedin", order: 5 },
		{ enabled: false, name: "Pinterest", url: "https://www.pinterest.com/your_pinterest", order: 6 },
		{ enabled: false, name: "Snapchat", url: "https://www.snapchat.com/add/your_snapchat", order: 7 },
		{ enabled: false, name: "TikTok", url: "https://www.tiktok.com/@your_tiktok", order: 8 },
		{ enabled: false, name: "WhatsApp", url: "https://api.whatsapp.com/send?phone=your_whatsapp", order: 9 },
		{ enabled: false, name: "Tumblr", url: "https://your_tumblr.tumblr.com", order: 10 },
		{ enabled: false, name: "YouTube", url: "https://www.youtube.com/channel/your_youtube", order: 11 },
		{ enabled: true, name: "Twitch", url: "https://www.twitch.tv/alexx_rx", order: 12 },
		{ enabled: false, name: "Reddit", url: "https://www.reddit.com/user/your_reddit", order: 13 },
		{ enabled: false, name: "Spotify", url: "https://open.spotify.com/user/your_spotify", order: 14 },
		{ enabled: false, name: "SoundCloud", url: "https://soundcloud.com/your_soundcloud", order: 15 },
		{ enabled: false, name: "Steam", url: "https://steamcommunity.com/id/your_steam", order: 16 },
		{ enabled: true, name: "Discord", url: "https://discord.gg/alx_rx", order: 17 },
		{ enabled: true, name: "Email", url: "alexrxcontacto@gmail.com", order: 18 },
		{ enabled: false, name: "Website", url: "https://your_website.com", order: 19 },
	],
	// Optional footer text. Leave empty "" to disable.
	footer: "",
};

export default CONFIG;

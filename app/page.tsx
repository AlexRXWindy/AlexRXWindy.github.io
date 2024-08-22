import { ReactNode } from "react";
import Image from "next/image";
import CONFIG from "@/CONFIG";
import {
	IconBrandDiscord,
	IconBrandFacebook,
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandPinterest,
	IconBrandReddit,
	IconBrandSnapchat,
	IconBrandSoundcloud,
	IconBrandSpotify,
	IconBrandSteam,
	IconBrandTiktok,
	IconBrandTumblr,
	IconBrandTwitch,
	IconBrandTwitter,
	IconBrandWhatsapp,
	IconBrandYoutube,
	IconMail,
	IconWorld,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

function SocialLink({
	name,
	logo,
	href,
	className,
}: {
	name: string;
	logo: ReactNode;
	href: string;
	className?: string;
}) {
	return (
		<li>
			<a
				className={cn(
					"block w-full rounded-full bg-white px-4 py-2 font-bold text-white transition-colors",
					className,
				)}
				href={href}
				target={CONFIG.openLinksInNewTab ? "_blank" : undefined}
			>
				<div className="flex items-center space-x-2">
					{logo}
					<span>{name}</span>
				</div>
			</a>
		</li>
	);
}

const LINK_CLASSES: Record<string, string> = {
	Facebook: "bg-[#1877F2] hover:bg-[#166FE5]",
	Twitter: "bg-[#1DA1F2] hover:bg-[#1A91E6]",
	Instagram: "bg-[#C13584] hover:bg-[#B9337C]",
	GitHub: "bg-gray-800 hover:bg-gray-900",
	LinkedIn: "bg-[#0077B5] hover:bg-[#00669F]",
	YouTube: "bg-[#FF0000] hover:bg-[#CC0000]",
	Twitch: "bg-[#6441A4] hover:bg-[#593592]",
	Reddit: "bg-[#FF5700] hover:bg-[#E64600]",
	Spotify: "bg-[#1DB954] hover:bg-[#1AA64D]",
	SoundCloud: "bg-[#FF3300] hover:bg-[#CC2900]",
	Steam: "bg-gradient-to-r from-[#0c4677] to-[#19244f]",
	Discord: "bg-[#5865F2] hover:bg-[#4853E5]",
	Email: "bg-gray-500 hover:bg-gray-600",
	Website: "bg-[#945DD6] hover:bg-[#8250B6]",
	Pinterest: "bg-[#BD081C] hover:bg-[#A70D2A]",
	Snapchat: "bg-yellow-500 hover:bg-yellow-600",
	TikTok: "bg-black hover:bg-gray-900",
	WhatsApp: "bg-[#25D366] hover:bg-[#128C7E]",
	Tumblr: "bg-[#36465D] hover:bg-[#293B4F]",
	default: "bg-gray-600 hover:bg-gray-700",
};

const LINK_LOGOS: Record<string, ReactNode> = {
	Facebook: <IconBrandFacebook />,
	Twitter: <IconBrandTwitter />,
	Instagram: <IconBrandInstagram />,
	GitHub: <IconBrandGithub />,
	LinkedIn: <IconBrandLinkedin />,
	Pinterest: <IconBrandPinterest />,
	Snapchat: <IconBrandSnapchat />,
	WhatsApp: <IconBrandWhatsapp />,
	TikTok: <IconBrandTiktok />,
	Tumblr: <IconBrandTumblr />,
	YouTube: <IconBrandYoutube />,
	Twitch: <IconBrandTwitch />,
	Reddit: <IconBrandReddit />,
	Spotify: <IconBrandSpotify />,
	SoundCloud: <IconBrandSoundcloud />,
	Steam: <IconBrandSteam />,
	Discord: <IconBrandDiscord />,
	Email: <IconMail />,
	Website: <IconWorld />,
	default: <></>,
};

function Links() {
	return CONFIG.links
		.filter((l) => l.enabled)
		.sort((a, b) => a.name.localeCompare(b.name))
		.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
		.map((link, idx) => {
			return (
				<SocialLink
					name={link.name}
					logo={LINK_LOGOS[link.name] ?? <></>}
					href={link.url}
					key={idx}
					className={LINK_CLASSES[link.name] ?? LINK_CLASSES["default"]}
				/>
			);
		});
}

function Banner() {
	return (
		<div className={"mb-8"}>
			<Image
				src={CONFIG.header.bannerUrl}
				height={200}
				width={500}
				alt={"Banner Image"}
				className={"h-32 w-full rounded-tl-xl rounded-tr-xl object-cover"}
			/>
			<div className={"relative"}>
				<Image
					src={CONFIG.header.avatarUrl}
					height={200}
					width={200}
					alt={"Banner Image"}
					className={
						"absolute -top-2 left-8 h-28 w-28 -translate-y-1/2 rounded-full border-2 border-white/30 object-cover"
					}
				/>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<div
			className={cn(
				"rounded-xl border bg-slate-300/30 bg-opacity-20 bg-clip-padding shadow-xl backdrop-filter max-md:h-[calc(100vh-4rem)] md:backdrop-blur",
				"dark:border-slate-500 dark:bg-slate-800 dark:bg-opacity-30 dark:bg-clip-padding dark:text-white dark:shadow-xl",
			)}
		>
			{CONFIG.header.bannerUrl && CONFIG.header.avatarUrl && <Banner />}
			<div className={"p-10"}>
				<p className={"mb-5 w-72 text-white"}>{CONFIG.description}</p>
				<ul
					className={cn("grid grid-cols-1 gap-4", {
						"md:grid-cols-2": CONFIG.links.filter((l) => l.enabled).length > 8,
						"md:grid-cols-3": CONFIG.links.filter((l) => l.enabled).length > 15,
					})}
				>
					<Links />
				</ul>
				{CONFIG.footer && <p className={"mt-5 text-right text-sm text-zinc-300"}>{CONFIG.footer}</p>}
			</div>
		</div>
	);
}

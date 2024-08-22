import type { Metadata } from "next";

import "./globals.css";

import { ReactNode } from "react";
import Image from "next/image";
import CONFIG from "@/CONFIG";
import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: CONFIG.name,
	description: CONFIG.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={cn({ ["dark"]: CONFIG.darkMode })}>
			<head>
				<meta property="og:title" content={CONFIG.name} key="title" />
				<meta property="og:description" content={CONFIG.description} key="description" />
			</head>
			<body
				className={cn(
					montserrat.className,
					"flex min-h-screen flex-col items-center justify-center transition-colors dark:bg-gray-900 max-md:justify-start max-md:py-8",
				)}
				style={{
					backgroundColor: CONFIG.themeColor,
				}}
			>
				{CONFIG.background.image.enable && (
					<>
						<div className={"fixed inset-0 z-[-1] h-screen w-screen bg-black/50"} />
						<Image
							src={CONFIG.background.image.url}
							alt={"Background Image"}
							width={2160}
							height={1440}
							className={"fixed inset-0 z-[-2] h-screen w-screen object-cover"}
						></Image>
					</>
				)}
				{children}
			</body>
		</html>
	);
}

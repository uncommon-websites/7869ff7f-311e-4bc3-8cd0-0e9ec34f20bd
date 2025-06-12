/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Collaborative learning with iPad",
				href: "/use-cases/collaborative-learning",
				image: "/generated/image-a-diverse-group-of-students-and-teachers.webp",
				description: "Students and teachers use iPad Air with M3 chip to sketch, share, and present ideas in real time—from any classroom or remote location. Built-in Apple Intelligence helps organize notes, summarize lessons, and edit documents on the go.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Content creation with Mac and iPhone",
				href: "/use-cases/content-creation",
				image: "/generated/image-a-young-creator-working-diligently-in-a-.webp",
				description: "Creators combine the M4-powered MacBook Air and iPhone 16 to shoot, edit, and publish professional-quality videos and music faster than ever. Built-in tools like Final Cut and Photos feel intuitive and deeply integrated.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Health and wellness with Apple Watch",
				href: "/use-cases/health-wellness",
				image: "/generated/image-a-person-in-a-modern-stylish-living-room.webp",
				description: "Apple Watch Series 10 helps track heart rate, sleep, medication, and activity goals throughout your day—all from your wrist. Real-time insights and Apple Fitness+ make managing personal health simple and motivating.",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));

<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
	{
		title: "Impact millions",
		description: "Shape the technology that billions use every day—your work makes a real difference.",
		icon: IconBriefcase
	},
	{
		title: "Grow with Apple",
		description: "Advance your skills and career with world-class mentors, learning resources, and opportunities.",
		icon: IconUsers
	},
	{
		title: "Next-level benefits",
		description: "Enjoy industry-leading health coverage, education support, device discounts, and flexible schedules.",
		icon: IconHeart
	}
];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
  {
    name: "Kazuki Mori",
    position: "Senior software engineer",
    company: "iOS team",
    quote:
      "When I joined Apple as a software engineer, I didn’t expect to grow this much this fast. I’ve led projects used by millions and done it alongside a team that truly has your back.",
    image: "/generated/image-a-professional-japanese-male-software-en.webp"
  },
  {
    name: "Anaïs Dumont",
    position: "Product designer",
    company: "Human interface team",
    quote:
      "Designing here means constant collaboration—from early sketches to product launch. It’s deeply creative but also human. My voice matters in every room I enter.",
    image: "/generated/image-a-professional-french-female-product-des.webp"
  },
  {
    name: "Jamila Rizwan",
    position: "Marketing lead",
    company: "Services division",
    quote:
      "Apple’s culture encourages you to push boundaries but also protects your time. I’ve grown from regional campaigns to global strategy—all while being present for my family.",
    image: "/generated/image-a-professional-south-asian-muslim-woman-.webp"
  }
];

	const processSteps = [
	{
		step: 1,
		title: "Apply online",
		description: "Browse roles, submit your resume and portfolio—show us why you belong at Apple."
	},
	{
		step: 2,
		title: "Application review",
		description: "Our recruiters and hiring teams review your application and follow up within 1–2 weeks."
	},
	{
		step: 3,
		title: "Interviews",
		description: "Meet team members, explore your skills, and discuss creative problem-solving in Apple’s unique environment."
	},
	{
		step: 4,
		title: "Final assessment",
		description: "Depending on the role, complete a project, case study, or skills assessment the Apple way."
	},
	{
		step: 5,
		title: "Offer and onboarding",
		description: "Receive your offer and begin your journey—Apple supports you from day one and beyond."
	}
];

	const values = [
	{
		icon: IconHeart,
		title: "Diversity by design",
		description: "We embrace different backgrounds and viewpoints, making Apple stronger and more creative."
	},
	{
		icon: IconUsers,
		title: "Collaboration across disciplines",
		description: "Engineers, designers, and creators work together globally to bring bold ideas to life."
	},
	{
		icon: IconGlobe,
		title: "Bold thinking, global reach",
		description: "We challenge limits, encourage individuality, and strive to make technology accessible everywhere."
	}
];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Build what moves the world"
	subtitle="Create at Apple. Grow your impact."
	imageSrc="/generated/image-a-diverse-and-authentic-team-working-tog.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Build your career while making an impact" />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>

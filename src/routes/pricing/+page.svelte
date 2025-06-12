<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Kishiro Tanaka",
      position: "Director of IT Infrastructure",
      company: "Arashi Group",
      quote: "Switching to Apple saved us 22% in maintenance costs within a year. M1 and M2 chips aren’t just fast—they’ve paid for themselves in productivity.",
      image: "/generated/image-a-professional-headshot-of-an-asian-male.webp"
    },
    {
      name: "Yesenia Marquez",
      position: "Head of Design Systems",
      company: "Nexo Studio",
      quote: "We needed gear that spoke our language: secure, flexible, and built to last. Apple made onboarding easy—with zero regrets over budget.",
      image: "/generated/image-a-professional-headshot-of-a-latina-nonb.webp"
    },
    {
      name: "Jelani Okoro",
      position: "VP, Business Operations",
      company: "Veridian Global",
      quote: "Even our non-technical staff picked up their MacBooks and were productive immediately. No training needed—we were already familiar with the experience.",
      image: "/generated/image-a-professional-headshot-of-a-black-male-.webp"
    }
  ]}
/>

<CallToAction
  title="One experience. All your devices."
  subtitle="Made to simplify every moment"
  description="Apple products are built to work together, so everything feels familiar from the start—texts follow you, files appear instantly, and calls, photos, and apps stay in sync automatically. Start a project on your iPad, pick it up on your Mac, and finish it on your iPhone. From school work to music, fitness, and movie nights, Apple brings your whole world together in one intuitive experience. Get up to 3% Daily Cash back with Apple Card and save more with Apple Trade In. Ready when you are—enjoy risk-free returns, expert support, and rewards with every purchase."
  imageSrc="/generated/image-a-joyful-customer-sitting-comfortably-at.webp"
  callsToAction={[
    { href: '/get-started', label: 'Get started', variant: 'primary' },
    { href: '/contact', label: 'Talk to sales', variant: 'secondary' }
  ]}
/>

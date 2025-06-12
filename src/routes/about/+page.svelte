<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
  {
    title: "Relentless innovation",
    description: "We never settle. From the smallest detail to the boldest idea, we push ourselves to make things better, smarter, and more human with every release."
  },
  {
    title: "Privacy is a fundamental right",
    description: "We believe your data belongs to you—and only you. That's why privacy is built into everything we create from the ground up."
  },
  {
    title: "Designed to delight",
    description: "Great design does more than look good. It feels intuitive, adds joy to every interaction, and quietly removes friction from daily life."
  },
  {
    title: "Empowering people everywhere",
    description: "Technology should level the playing field. Whether you're a student, developer, creator, or explorer, we build tools that open doors and spark possibilities."
  },
  {
    title: "Built to work together",
    description: "Hardware, software, and services in perfect sync. That’s how we craft experiences that feel effortless—so our users can focus on what matters most."
  }
];
</script>

<SecondaryHero
	title="Designed with purpose"
	subtitle="Created by people driven to connect, inspire, and shape what comes next"
	imageSrc="/mockups/airport-screen-1749722570047.png"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Apple began with a simple idea: make technology easier to use, so more people could benefit from it. What started as a vision to rethink the personal computer grew into decades of innovation across hardware, software, and services—all designed with people at the center. Every product was built to help someone do something they couldn't before.",
		"Today, that mission continues. Whether it's a student designing their first 3D project on iPad Air or a parent sharing photos across devices instantly, Apple creates tools that feel simple from the start. At the heart of every product is a seamless connection between hardware and software. Features that are thoughtful, private, and intuitive—empowered by Apple Intelligence, and made to keep you focused on what matters, not how to make it work.",
		"Across iPhone, Mac, iPad, Apple Watch, and services like Apple Music or TV+, the goal remains the same: to keep people connected, creative, and in control of their world. From learning, working, and streaming to caring for your health or just staying in touch, Apple helps you do more—without making complexity part of the experience."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->






<!-- CTA Section -->
<CallToAction
  title="Imagine what we can build together"
  subtitle="Innovation thrives when we collaborate"
  description="At Apple, progress is guided by curiosity, creativity, and bold ideas. Whether you're designing the next generation of products or ensuring they reach people across the globe, there’s room for your impact here."
  imageSrc="/generated/image-a-diverse-team-of-creative-individuals-e.webp"
  callsToAction={[
    {
      href: "/careers",
      label: "View open roles",
      variant: "primary"
    },
    {
      href: "/contact",
      label: "Connect with Apple",
      variant: "secondary"
    }
  ]}
/>

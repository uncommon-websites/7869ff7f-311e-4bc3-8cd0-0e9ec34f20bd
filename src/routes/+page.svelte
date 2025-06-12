<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";
</script>

<CenteredTextOnlyHero
  title="Innovation and Technology, beautifully connected"
  subtitle="Everything works together seamlessly, so you can do more with ease, clarity, and joy—across every device and service."
  imageSrc="/generated/image-a-busy-cafe-scene-with-diverse-people-en.webp"
/>
<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		"https://logo.clearbit.com/nike.com",
		"https://logo.clearbit.com/disney.com",
		"https://logo.clearbit.com/starbucks.com"
	]}
/>

<Summary
	title="What we do"
	text="Apple designs, manufactures, and markets smartphones, computers, tablets, wearables, and streaming services. Everything works seamlessly together for a fast, secure, and beautifully integrated experience. Enjoy innovative features and top performance—no matter which Apple product you choose."
/>

<Testimonials
	testimonials={[
		{
			name: "Mireille Dubois",
			position: "CFO",
			company: "Renaissance Media",
			quote: "We saved weeks of manual reporting each quarter with Apple. Now my team can focus on strategy—instead of spreadsheets—knowing our data is always secure.",
			image: "/generated/image-a-female-cfo-smiling-in-a-contemporary-o.webp"
		},
		{
			name: "Alonso Rivera",
			position: "Studio Producer",
			company: "Sunburst Studios",
			quote: "Apple streamlined our creative project workflows and saved us hours every day. End-to-end integration means fewer delays and more time to focus on making great work.",
			image: "/generated/image-a-male-studio-producer-sitting-in-a-crea.webp"
		},
		{
			name: "Juniper Lee",
			position: "College Student",
			company: "State University",
			quote: "Using Apple devices with Apple Intelligence saved me money and helped me avoid late semester crunch. iCloud backups mean losing my work is one less thing to stress about.",
			image: "/generated/image-a-female-college-student-studying-at-a-c.webp"
		}
	]}
/>

<Features
	title="Built to think. And built to work."
	subtitle="Explore what makes every Apple experience unique."
	features={[
		{
			title: "Power that's always ahead",
			description: "The M4 and M3 chips give you blazing-fast performance with incredible energy efficiency. Whether you're creating, studying, or gaming, everything feels instant."
		},
		{
			title: "Smarter devices that understand you",
			description: "Apple Intelligence helps your devices anticipate what you need, when you need it. Less tapping, more doing."
		},
		{
			title: "Your data stays yours",
			description: "Privacy is built into every Apple product from the start. Your information stays under your control—always encrypted, always protected."
		},
		{
			title: "It just works—together",
			description: "Start a task on one device, finish it on another without missing a beat. Apple's ecosystem keeps your work, content, and conversations in one continuous flow."
		},
		{
			title: "Entertainment the way you want it",
			description: "Stream hits, live major league sports, music, workouts, and games. Access Apple TV+, Apple Music, Apple Fitness+, and Apple Arcade—everywhere you go."
		},
		{
			title: "Better upgrades, smarter rewards",
			description: "Get extra credit with Apple Trade In and instantly earn up to 3% back every day with Apple Card. It pays to go with Apple."
		}
	]}
/>

<UseCases
	title="Use cases"
	subtitle="Real-world applications for your business needs"
	useCases={[
		{
			title: "Collaborative learning with iPad",
			description: "Students and teachers use iPad Air with M3 chip to sketch, share, and present ideas in real time—from any classroom or remote location. Built-in Apple Intelligence helps organize notes, summarize lessons, and edit documents on the go.",
			image: "/generated/image-students-and-teachers-using-ipads-in-a-.webp",
			link: {
				href: "/use-cases/collaborative-learning",
				label: "Learn more"
			}
		},
		{
			title: "Content creation with Mac and iPhone",
			description: "Creators combine the M4-powered MacBook Air and iPhone 16 to shoot, edit, and publish professional-quality videos and music faster than ever. Built-in tools like Final Cut and Photos feel intuitive and deeply integrated.",
			image: "/generated/image-young-creator-editing-video-on-macbook-and-.webp",
			link: {
				href: "/use-cases/content-creation",
				label: "Learn more"
			}
		},
		{
			title: "Health and wellness with Apple Watch",
			description: "Apple Watch Series 10 helps track heart rate, sleep, medication, and activity goals throughout your day—all from your wrist. Real-time insights and Apple Fitness+ make managing personal health simple and motivating.",
			image: "/generated/image-person-checking-health-stats-on-apple-wa.webp",
			link: {
				href: "/use-cases/health-wellness",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction
  title="It all works together. Beautifully."
  subtitle="Experience every Apple device, seamlessly connected."
  description="iPhone, MacBook Air, iPad Air, and Apple Watch are all designed to perform powerfully alone—and even better together. With Apple Intelligence, your tech feels faster, smarter, and more helpful, wherever life takes you."
  imageSrc="/generated/image-a-young-adult-sitting-comfortably-on-a-p.webp"
  callsToAction={[
    {
      href: "/shop",
      label: "Shop the lineup",
      variant: "primary"
    },
    {
      href: "/trade-in",
      label: "Get trade-in estimate",
      variant: "secondary"
    }
  ]}
/>

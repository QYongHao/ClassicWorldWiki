// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://classicworld.wiki',
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Leveling Guide', slug: 'guides/leveling' },
					],
				},
				{
					label: 'Classes',
					items: [
						{ label: 'Classes Overview', slug: 'classes/classes-overview' },
						{ label: 'Bowman', slug: 'classes/bowman' },
						{ label: 'Thief', slug: 'classes/thief' },
						{ label: 'Warrior', slug: 'classes/warrior' },
						{ label: 'Magician', slug: 'classes/magician' },
						{ label: 'Pirate', slug: 'classes/pirate' },
					],
				},
				{
					label: 'Equipment',
					// items: [
					// 	{ label: 'Weapon', slug: 'equipment/weapon' },
					// ],
					autogenerate: { directory: 'equipment' },
				},
			],
		}),
	],
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://QYongHao.github.io',
	base: '/ClassicWorldWiki',
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
					label: 'Class',
					items: [
						{ label: 'Classes Overview', slug: 'class/classes-overview' },
						{ label: 'Bowman', slug: 'class/bowman' },
						{ label: 'Thief', slug: 'class/thief' },
						{ label: 'Warrior', slug: 'class/warrior' },
						{ label: 'Magician', slug: 'class/magician' },
						{ label: 'Pirate', slug: 'class/pirate' },
					],
				},
			],
		}),
	],
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://classicworld.wiki',
	integrations: [
		starlight({
			title: 'Classic World Wiki',
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
						{ label: 'Classes Overview', slug: 'classes' },
						{ label: 'Beginner', slug: 'classes/beginner' },
						{
							label: 'Bowman',
							collapsed: true,
							items: [
								{ label: 'Bowman', slug: 'classes/bowman' },
								{
									label: 'Hunter',
									slug: 'classes/hunter',
									badge: { text: '2nd', variant: 'tip' }
								},
								{ label: 'Ranger', slug: 'classes/ranger', badge: { text: '3rd', variant: 'tip' } },
								{
									label: 'Crossbowman',
									slug: 'classes/crossbowman',
									badge: { text: '2nd', variant: 'note' }
								},
								{ label: 'Sniper', slug: 'classes/sniper', badge: { text: '3rd', variant: 'note' } }
							]
						},
						{
							label: 'Magician',
							collapsed: true,
							items: [
								{ label: 'Magician', slug: 'classes/magician' },
								{
									label: 'Wizard (Fire/Poison)',
									slug: 'classes/fire-poison-wizard',
									badge: { text: '2nd', variant: 'danger' }
								},
								{ label: 'Mage (Fire/Poison)', slug: 'classes/fire-poison-mage', badge: { text: '3rd', variant: 'danger' } },
								{
									label: 'Wizard (Ice/Lightning)',
									slug: 'classes/ice-lightning-wizard',
									badge: { text: '2nd', variant: 'note' }
								},
								{ label: 'Mage (Ice/Lightning)', slug: 'classes/ice-lightning-mage', badge: { text: '3rd', variant: 'note' } },
								{
									label: 'Cleric',
									slug: 'classes/cleric',
									badge: { text: '2nd', variant: 'success' }
								},
								{ label: 'Priest', slug: 'classes/priest', badge: { text: '3rd', variant: 'success' } }
							]
						},
						{
							label: 'Pirate',
							collapsed: true,
							items: [
								{ label: 'Pirate', slug: 'classes/pirate' },
								{
									label: 'Brawler',
									slug: 'classes/brawler',
									badge: { text: '2nd', variant: 'tip' }
								},
								{ label: 'Marauder', slug: 'classes/marauder', badge: { text: '3rd', variant: 'tip' } },
								{
									label: 'Gunslinger',
									slug: 'classes/gunslinger',
									badge: { text: '2nd', variant: 'note' }
								},
								{ label: 'Outlaw', slug: 'classes/outlaw', badge: { text: '3rd', variant: 'note' } }
							]
						},
						{
							label: 'Thief',
							collapsed: true,
							items: [
								{ label: 'Thief', slug: 'classes/thief' },
								{
									label: 'Assassin',
									slug: 'classes/assassin',
									badge: { text: '2nd', variant: 'danger' }
								},
								{ label: 'Hermit', slug: 'classes/hermit', badge: { text: '3rd', variant: 'danger' } },
								{
									label: 'Bandit',
									slug: 'classes/bandit',
									badge: { text: '2nd', variant: 'caution' }
								},
								{ label: 'Chief Bandit', slug: 'classes/chief-bandit', badge: { text: '3rd', variant: 'caution' } }
							]
						},
						{
							label: 'Warrior',
							collapsed: true,
							items: [
								{ label: 'Warrior', slug: 'classes/warrior' },
								{
									label: 'Fighter',
									slug: 'classes/fighter',
									badge: { text: '2nd', variant: 'tip' }
								},
								{ label: 'Crusader', slug: 'classes/crusader', badge: { text: '3rd', variant: 'tip' } },
								{
									label: 'Page',
									slug: 'classes/page',
									badge: { text: '2nd', variant: 'note' }
								},
								{ label: 'White Knight', slug: 'classes/white-knight', badge: { text: '3rd', variant: 'note' } },
								{
									label: 'Spearman',
									slug: 'classes/spearman',
									badge: { text: '2nd', variant: 'success' }
								},
								{ label: 'Dragon Knight', slug: 'classes/dragon-knight', badge: { text: '3rd', variant: 'success' } }
							]
						},
					],
				},
				{
					label: 'Equipment',
					items: [
						{
							label: 'Weapon',
							collapsed: true,
							items: [
								{ label: 'Bow', slug: 'equipment/weapon/bow' },
								{ label: 'Claw', slug: 'equipment/weapon/claw' },
								{ label: 'Crossbow', slug: 'equipment/weapon/crossbow' },
								{ label: 'Dagger', slug: 'equipment/weapon/dagger' },
								{ label: 'Gun', slug: 'equipment/weapon/gun' },
								{ label: 'Knuckle', slug: 'equipment/weapon/knuckle' },
								{ label: 'One Handed Axe', slug: 'equipment/weapon/one-handed-axe' },
								{ label: 'One Handed Blunt Weapon', slug: 'equipment/weapon/one-handed-blunt-weapon' },
								{ label: 'One Handed Sword', slug: 'equipment/weapon/one-handed-sword' },
								{ label: 'Polearm', slug: 'equipment/weapon/polearm' },
								{ label: 'Spear', slug: 'equipment/weapon/spear' },
								{ label: 'Staff', slug: 'equipment/weapon/staff' },
								{ label: 'Two Handed Axe', slug: 'equipment/weapon/two-handed-axe' },
								{ label: 'Two Handed Blunt Weapon', slug: 'equipment/weapon/two-handed-blunt-weapon' },
								{ label: 'Two Handed Sword', slug: 'equipment/weapon/two-handed-sword' },
								{ label: 'Wand', slug: 'equipment/weapon/wand' }
							]
						},
						{
							label: 'Armour',
							collapsed: true,
							items: [
								{ label: 'Bottom', slug: 'equipment/armour/bottom' },
								{ label: 'Cape', slug: 'equipment/armour/cape' },
								{ label: 'Gloves', slug: 'equipment/armour/gloves' },
								{ label: 'Hat', slug: 'equipment/armour/hat' },
								{ label: 'Overall', slug: 'equipment/armour/overall' },
								{ label: 'Shield', slug: 'equipment/armour/shield' },
								{ label: 'Shoes', slug: 'equipment/armour/shoes' },
								{ label: 'Top', slug: 'equipment/armour/top' }
							]
						},
						{
							label: 'Accessory',
							collapsed: true,
							items: [
								{ label: 'Belt', slug: 'equipment/accessory/belt' },
								{ label: 'Earring', slug: 'equipment/accessory/earring' },
								{ label: 'Ring', slug: 'equipment/accessory/ring' }
							]
						},
					],
				},
			],
		}),
	],
});

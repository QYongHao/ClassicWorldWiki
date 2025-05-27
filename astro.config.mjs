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
						{ label: 'Beginner', slug: 'classes/beginner' },
						{
							label: 'Bowman',
							items: [
								{ label: 'Bowman', slug: 'classes/bowman' },
								{
									label: 'Hunter',
									slug: 'classes/bowman/hunter',
									badge: { text: '2nd', variant: 'tip' }
								},
								{ label: 'Ranger', slug: 'classes/bowman/ranger', badge: { text: '3rd', variant: 'tip' } },
								{
									label: 'Crossbowman',
									slug: 'classes/bowman/crossbowman',
									badge: { text: '2nd', variant: 'note' }
								},
								{ label: 'Sniper', slug: 'classes/bowman/sniper', badge: { text: '3rd', variant: 'note' } }
							]
						},
						{
							label: 'Magician',
							items: [
								{ label: 'Magician', slug: 'classes/magician' },
								{
									label: 'Wizard (Fire/Poison)',
									slug: 'classes/magician/fire-poison-wizard',
									badge: { text: '2nd', variant: 'danger' }
								},
								{ label: 'Mage (Fire/Poison)', slug: 'classes/magician/fire-poison-mage', badge: { text: '3rd', variant: 'danger' } },
								{
									label: 'Wizard (Ice/Lightning)',
									slug: 'classes/magician/ice-lightning-wizard',
									badge: { text: '2nd', variant: 'note' }
								},
								{ label: 'Mage (Ice/Lightning)', slug: 'classes/magician/ice-lightning-mage', badge: { text: '3rd', variant: 'note' } },
								{
									label: 'Cleric',
									slug: 'classes/magician/cleric',
									badge: { text: '2nd', variant: 'success' }
								},
								{ label: 'Priest', slug: 'classes/magician/priest', badge: { text: '3rd', variant: 'success' } }
							]
						},
						{
							label: 'Pirate',
							items: [
								{ label: 'Pirate', slug: 'classes/pirate' },
								{
									label: 'Brawler',
									slug: 'classes/pirate/brawler',
									badge: { text: '2nd', variant: 'tip' }
								},
								{ label: 'Marauder', slug: 'classes/pirate/marauder', badge: { text: '3rd', variant: 'tip' } },
								{
									label: 'Gunslinger',
									slug: 'classes/pirate/gunslinger',
									badge: { text: '2nd', variant: 'note' }
								},
								{ label: 'Outlaw', slug: 'classes/pirate/outlaw', badge: { text: '3rd', variant: 'note' } }
							]
						},
						{
							label: 'Thief',
							items: [
								{ label: 'Thief', slug: 'classes/thief' },
								{
									label: 'Assassin',
									slug: 'classes/thief/assassin',
									badge: { text: '2nd', variant: 'danger' }
								},
								{ label: 'Hermit', slug: 'classes/thief/hermit', badge: { text: '3rd', variant: 'danger' } },
								{
									label: 'Bandit',
									slug: 'classes/thief/bandit',
									badge: { text: '2nd', variant: 'caution' }
								},
								{ label: 'Chief Bandit', slug: 'classes/thief/chief-bandit', badge: { text: '3rd', variant: 'caution' } }
							]
						},
						{
							label: 'Warrior',
							items: [
								{ label: 'Warrior', slug: 'classes/warrior' },
								{
									label: 'Fighter',
									slug: 'classes/warrior/fighter',
									badge: { text: '2nd', variant: 'tip' }
								},
								{ label: 'Crusader', slug: 'classes/warrior/crusader', badge: { text: '3rd', variant: 'tip' } },
								{
									label: 'Page',
									slug: 'classes/warrior/page',
									badge: { text: '2nd', variant: 'note' }
								},
								{ label: 'White Knight', slug: 'classes/warrior/white-knight', badge: { text: '3rd', variant: 'note' } },
								{
									label: 'Spearman',
									slug: 'classes/warrior/spearman',
									badge: { text: '2nd', variant: 'success' }
								},
								{ label: 'Dragon Knight', slug: 'classes/warrior/dragon-knight', badge: { text: '3rd', variant: 'success' } }
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

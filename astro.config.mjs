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
						{
							label: 'Bowman',
							collapsed: true,
							items: [
								{ label: 'Bowman', slug: 'classes/bowman' },
								{
									label: 'Hunter',
									items: [
										{ label: 'Hunter', slug: 'classes/bowman/hunter' },
										{ label: 'Ranger', slug: 'classes/bowman/ranger' }
									]
								},
								{
									label: 'Crossbowman',
									items: [
										{ label: 'Crossbowman', slug: 'classes/bowman/crossbowman' },
										{ label: 'Sniper', slug: 'classes/bowman/sniper' }
									]
								}
							]
						},
						{
							label: 'Thief',
							collapsed: true,
							items: [
								{ label: 'Thief', slug: 'classes/thief' },
								{
									label: 'Assassin',
									items: [
										{ label: 'Assassin', slug: 'classes/thief/assassin' },
										{ label: 'Hermit', slug: 'classes/thief/hermit' }
									]
								},
								{
									label: 'Bandit',
									items: [
										{ label: 'Bandit', slug: 'classes/thief/bandit' },
										{ label: 'Chief Bandit', slug: 'classes/thief/chief-bandit' }
									]
								}
							]
						},
						{
							label: 'Warrior',
							collapsed: true,
							items: [
								{ label: 'Warrior', slug: 'classes/warrior' },
								{
									label: 'Fighter',
									items: [
										{ label: 'Fighter', slug: 'classes/warrior/fighter' },
										{ label: 'Crusader', slug: 'classes/warrior/crusader' }
									]
								},
								{
									label: 'Page',
									items: [
										{ label: 'Page', slug: 'classes/warrior/page' },
										{ label: 'White Knight', slug: 'classes/warrior/white-knight' }
									]
								},
								{
									label: 'Spearman',
									items: [
										{ label: 'Spearman', slug: 'classes/warrior/spearman' },
										{ label: 'Dragon Knight', slug: 'classes/warrior/dragon-knight' }
									]
								}
							]
						},
						{
							label: 'Magician',
							collapsed: true,
							items: [
								{ label: 'Magician', slug: 'classes/magician' },
								{
									label: 'Fire/Poison Wizard',
									items: [
										{ label: 'Wizard', slug: 'classes/magician/fire-poison-wizard' },
										{ label: 'Mage', slug: 'classes/magician/fire-poison-mage' }
									]
								},
								{
									label: 'Ice/Lightning Wizard',
									items: [
										{ label: 'Wizard', slug: 'classes/magician/ice-lightning-wizard' },
										{ label: 'Mage', slug: 'classes/magician/ice-lightning-mage' }
									]
								},
								{
									label: 'Cleric',
									items: [
										{ label: 'Cleric', slug: 'classes/magician/cleric' },
										{ label: 'Priest', slug: 'classes/magician/priest' }
									]
								}
							]
						},
						{
							label: 'Pirate',
							collapsed: true,
							items: [
								{ label: 'Pirate', slug: 'classes/pirate' },
								{
									label: 'Brawler',
									items: [
										{ label: 'Brawler', slug: 'classes/pirate/brawler' },
										{ label: 'Marauder', slug: 'classes/pirate/marauder' }
									]
								},
								{
									label: 'Gunslinger',
									items: [
										{ label: 'Gunslinger', slug: 'classes/pirate/gunslinger' },
										{ label: 'Outlaw', slug: 'classes/pirate/outlaw' }
									]
								}
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
								{ label: 'Overall', slug: 'equipment/armour/ovarall' },
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

import { defineCollection, z, type SchemaContext } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

export const imageSchema = ({ image }: SchemaContext) =>
	z.object({
		src: image(),
		type: z.string(),
		alt: z.string(),
	});

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	skills: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/data/skills' }),
		schema: ({ image }) => z.array(z.object({
			Icon: imageSchema({ image }),
			"Skill Name": z.string(),
			"Description": z.string(),
			"Type": z.string(),
			"Levels": z.array(z.object({
				Levels: z.number(),
				Effect: z.string()
			}))
		}))
	}),
	weapons: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/data/equipment/weapons' }),
		schema: z.array(z.object({
			name: z.string(),
			image_url: z.string(),
			requirements: z.object({
				level: z.number(),
				strength: z.number(),
				dexterity: z.number(),
				intelligence: z.number(),
				luck: z.number()
			}),
			classes: z.array(z.string()),
			stats: z.object({
				category: z.string(),
				attack_speed: z.string(),
				weapon_attack: z.optional(z.string()),
				number_of_upgrades_available: z.optional(z.string())
			}),
			sources: z.object({
				dropped_by: z.array(z.object({
					monster_name: z.string(),
					monster_id: z.string()
				})),
				sold_by: z.array(z.object({
					npc_name: z.string(),
					npc_id: z.string(),
					price: z.string(),
					npc_image: z.string()
				}))
			})
		}))
	})
};

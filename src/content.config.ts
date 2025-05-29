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
	})
};

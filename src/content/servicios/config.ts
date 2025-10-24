import { defineCollection, z } from 'astro:content';

const serviciosCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		puntos: z.array(z.string()).optional(),
		cover: z.string().optional(),
		// eliminamos la necesidad de definir la galería manualmente
	}),
});

export const collections = {
	servicios: serviciosCollection,
};

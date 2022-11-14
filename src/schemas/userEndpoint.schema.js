import { IdSchema } from 'src/schemas/id.schema';
import z from 'zod';

export const UserEndpointSchema = z.object({
	id: IdSchema,
	first_name: z.string(),
	last_name: z.string(),
	email: z.string(),
	password: z.string(),
	points: z.number(),
	roleId: IdSchema,
	createdAt: z.string(),
	updatedAt: z.string(),
});

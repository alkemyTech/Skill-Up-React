import { IdSchema } from 'src/schemas/id.schema';
import z from 'zod';

export const AccountEndpointSchema = z.object({
	id: IdSchema,
	creationDate: z.string(),
	money: z.number(),
	isBlocked: z.boolean(),
	userId: IdSchema,
	createdAt: z.string(),
	updatedAt: z.string(),
});

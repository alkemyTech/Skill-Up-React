import { IdSchema } from 'src/schemas/id.schema';
import z from 'zod';

export const AccountsCreateSchema = z.object({
	creationDate: z.string(),
	money: z.number(),
	isBlocked: z.boolean(),
	userId: IdSchema,
});

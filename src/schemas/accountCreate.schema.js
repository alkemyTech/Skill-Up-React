import { IdSchema } from 'src/schemas/id.schema';
import z from 'zod';

export const AccountsCreateSchema = z.object({
	creationDate: z.string().default(new Date().toISOString()),
	money: z.number().default(0),
	isBlocked: z.boolean().default(false),
	userId: IdSchema,
});

import { IdSchema } from 'src/schemas/id.schema';
import { z } from 'zod';

export const userEditSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	email: z.string(),
	password: z.string(),
	roleId: IdSchema,
});

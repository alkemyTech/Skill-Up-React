import z from 'zod';

export const CredendialsSchema = z.object({
	email: z.string(),
	password: z.string(),
});

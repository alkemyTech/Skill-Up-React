import z from 'zod';

export const AccountsIdPOSTEndpointSchema = z.object({
	error: z.string(),
	status: z.number(),
});
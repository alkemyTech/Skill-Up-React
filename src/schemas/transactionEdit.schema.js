import { MovementType } from 'src/models/movementType.model';
import { IdSchema } from 'src/schemas/id.schema';
import z from 'zod';

export const TransactionEditSchema = z.object({
	amount: z.string(),
	concept: z.string(),
	date: z.string(),
	type: z.nativeEnum(MovementType),
	accountId: IdSchema,
	userId: IdSchema,
	to_account_id: IdSchema,
});
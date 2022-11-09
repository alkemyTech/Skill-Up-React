import { MovementType } from 'src/models/movementType.model';
import z from 'zod';

export const MovementFormSchema = z.object({
	type: z.nativeEnum(MovementType),
	concept: z.string(),
	currencyCode: z.string(),
	isTransference: z.boolean(),
	amount: z.number().min(1),
});

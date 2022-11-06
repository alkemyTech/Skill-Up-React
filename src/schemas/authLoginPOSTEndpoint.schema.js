import { AccessTokenSchema } from 'src/schemas/accessToken.schema';
import { z } from 'zod';

export const AuthLoginPOSTEndpointSchema = z.object({
	accessToken: AccessTokenSchema,
});

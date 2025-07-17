import * as yup from 'yup';

import type { loginSchema } from './schema';

export type LoginForm = yup.InferType<typeof loginSchema>;

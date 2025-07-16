import * as yup from 'yup';

import type { newVisitorSchema } from './schema';

export type NewVisitorForm = yup.InferType<typeof newVisitorSchema>;

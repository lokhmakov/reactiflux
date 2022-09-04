import * as yup from 'yup';
import * as zod from 'zod';

const yupSchema = yup.string();
type A = yup.InferType<typeof yupSchema>;
export const x: A = 12; // wrong, but nothing happens

const zodSchema = zod.string();
type B = zod.infer<typeof zodSchema>; // string
export const y: B = 12; // TypeError

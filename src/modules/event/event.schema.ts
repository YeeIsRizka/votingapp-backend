import * as z from 'zod';
import { eventSchema } from './event.dto';

export const createEventSchema = eventSchema;

export const getEventsSchema = z.object({
  keyword: z.string().optional(),
  limitParam: z.string().default('10').transform(Number),
  pageParam: z.string().default('1').transform(Number),
  // isActive: z.string().optional(),
});

export const getActiveEventSchema = z.object({
  keyword: z.string().optional(),
  limitParam: z.string().default('15').transform(Number),
  pageParam: z.string().default('1').transform(Number),
});

export const createVoteSchema = z.object({
  candidateId: z.string().min(1, 'Candidate ID is required'),
});

export const getVoteIsValidSchema = z.object({
  userId: z.string().min(1, 'User ID is required'),
  eventId: z.string().min(1, 'Event ID is required'),
  candidateId: z.string().min(1, 'Candidate ID is required'),
  // transactionHash: z.string().min(1, 'Transaction hash is required'),
});

export type CreateEventSchemaType = z.infer<typeof createEventSchema>;
export type GetActiveEventSchemaType = z.infer<typeof getActiveEventSchema>;
export type GetEventsSchemaType = z.infer<typeof getEventsSchema>;
export type CreateVoteSchemaType = z.infer<typeof createVoteSchema>;
export type GetVoteIsValidSchemaType = z.infer<typeof getVoteIsValidSchema>;

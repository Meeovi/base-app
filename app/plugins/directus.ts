import { createDirectus, rest, readItem, readItems, createItem, deleteItem, uploadFiles, readSingleton } from '@directus/sdk';
import "dotenv"
import type { DirectusSchema } from '~/types/directus';

export default defineNuxtPlugin(() => {
const config = useRuntimeConfig()

const directus = createDirectus<DirectusSchema>(`${config.public.directus.url}`).with(rest());
	
	return {
		provide: { directus, readItem, readItems, createItem, deleteItem, uploadFiles, readSingleton },
	};
});
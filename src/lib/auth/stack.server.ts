import { StackServerApp } from '@stackframe/js';
import {
	PUBLIC_STACK_PROJECT_ID,
	PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
	PUBLIC_STACK_SECRET_SERVER_KEY
} from '$env/static/public';

export const stackServerApp = new StackServerApp({
	projectId: PUBLIC_STACK_PROJECT_ID,
	publishableClientKey: PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
	secretServerKey: PUBLIC_STACK_SECRET_SERVER_KEY,
	tokenStore: 'memory'
});

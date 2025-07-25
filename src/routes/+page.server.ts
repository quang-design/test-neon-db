import { sql } from '$lib/database/db.server';
import { stackServerApp } from '$lib/auth/stack.server';

export async function load() {
	const response = await sql`SELECT version()`;
	const user = await stackServerApp.getUser('af63a1e9-7290-421a-b8c7-27b4cd651365');
	// console.log(user);
	const { version } = response[0];

	// Extract only serializable properties from the user object
	const serializedUser = user
		? {
				id: user.id,
				displayName: user.displayName,
				primaryEmail: user.primaryEmail,
				primaryEmailVerified: user.primaryEmailVerified,
				profileImageUrl: user.profileImageUrl,
				signedUpAt: user.signedUpAt?.toISOString(),
				clientMetadata: user.clientMetadata,
				serverMetadata: user.serverMetadata
			}
		: null;

	return {
		version,
		user: serializedUser
	};
}

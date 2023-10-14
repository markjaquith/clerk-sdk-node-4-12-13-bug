import { writable, type Writable } from 'svelte/store'
import Clerk from '@clerk/clerk-js'
import type ClerkInstance from '@clerk/clerk-js'
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public'

// Create a writable store for Clerk
export const clerk: Writable<ClerkInstance | null> = writable(null)

// Initialize Clerk once
let clerkInstance: ClerkInstance | null = null

export async function initializeClerk(): Promise<void> {
	if (!clerkInstance && typeof window !== 'undefined') {
		clerkInstance = new Clerk(PUBLIC_CLERK_PUBLISHABLE_KEY)

		await clerkInstance
			.load({
				afterSignInUrl: '/',
				afterSignUpUrl: '/',
				signInUrl: '/sign-in',
				signUpUrl: '/sign-up',
			})
			.catch((error: Error) => {
				console.error('Failed to load Clerk:', error)
			})

		clerk.set(clerkInstance)
	}
}

initializeClerk()

<script lang="ts">
	import { clerkUI } from '$lib/clerk'
	import { clerk } from '$lib/clerk/clerk'
	import type { SignInProps } from '@clerk/types'

	type $$Props = SignInProps
</script>

<div
	class:loading={!$clerk}
	use:clerkUI={{ clerk: $clerk, componentType: 'SignIn', props: $$props }}
/>

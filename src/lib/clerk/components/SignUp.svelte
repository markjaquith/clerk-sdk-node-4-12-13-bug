<script lang="ts">
	import { clerkUI } from '$lib/clerk'
	import { clerk } from '$lib/clerk/clerk'
	import type { SignUpProps } from '@clerk/types'

	type $$Props = SignUpProps
</script>

<div
	class:loading={!$clerk}
	use:clerkUI={{ clerk: $clerk, componentType: 'SignUp', props: $$props }}
/>

<script lang="ts">
	import { clerkUI } from '$lib/clerk'
	import { clerk } from '$lib/clerk/clerk'
	import type { UserButtonProps } from '@clerk/types'

	type $$Props = UserButtonProps
</script>

<div use:clerkUI={{ clerk: $clerk, componentType: 'UserButton', props: $$props }} />

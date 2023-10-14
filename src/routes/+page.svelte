<script lang="ts">
	import { UserButton } from '$lib/clerk'
	import { clerk } from '$lib/clerk/clerk'
</script>

<h1>Green Wedding Shoes: Speech Generator</h1>

<p><a href="/playground">Playground</a></p>

{#if $clerk?.user}
	<div class="m-2">
		<UserButton afterSignOutUrl="/" />
	</div>
{:else}
	<div class="mx-auto text-center">
		<p><a href="/sign-in" class="px-2 py-1 m-1 text-black bg-blue-200 rounded">Sign In</a></p>
		<p class="py-2 text-neutral-500">— OR —</p>
		<p><a href="/start" class="px-2 py-1 m-1 text-black bg-blue-200 rounded">Sign Up</a></p>
	</div>
{/if}

<script lang="ts">
	import { onMount } from 'svelte';

	let gridWidth: number;
	let gridHeight: number;

	onMount(() => {
		gridWidth = window.innerWidth * 2;
		gridHeight = window.innerHeight * 2;

		const handleResize = () => {
			gridWidth = window.innerWidth * 2;
			gridHeight = window.innerHeight * 2;
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<svelte:head>
	<title>Clefer</title>
	<meta name="description" content="Clefer app" />
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
	/>
</svelte:head>

<div
	class="grid"
	role="button"
	tabindex="0"
	style="
		--grid-height: {gridHeight}px;
		--grid-width: {gridWidth}px; 
	"
></div>

<style>
	.grid {
		--d: 2px;

		margin: 16px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: var(--grid-width, 100vw);
		height: var(--grid-height, 100vh);
		z-index: -1;
		background: radial-gradient(
				circle at var(--d) var(--d),
				#000 calc(var(--d) - 1px),
				#0000 var(--d)
			)
			calc(50% - 18px) calc(50% - 18px) / 32px 32px;
	}
</style>

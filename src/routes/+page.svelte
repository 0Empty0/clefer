<script lang="ts">
	import { onMount } from 'svelte';

	import { Plus } from 'lucide-svelte';

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
	class="grid-layer"
	role="button"
	tabindex="0"
	style="
		--grid-height: {gridHeight}px;
		--grid-width: {gridWidth}px;
	"
>
	{#if true}
		<button
			class="group rounded-lg bg-midblack p-1 transition-all hover:border hover:border-gray hover:border-opacity-75 hover:bg-opacity-75"
		>
			<Plus color="#fafafa" size="32" class="group-hover:opacity-75" />
		</button>
	{/if}
</div>

<style lang="postcss">
	.grid-layer {
		@apply absolute left-1/2 top-1/2 -z-10 m-4 grid -translate-x-1/2 -translate-y-1/2 place-items-center;

		--d: 1px;
		width: var(--grid-width, 100vw);
		height: var(--grid-height, 100vh);
		background: radial-gradient(
				circle at var(--d) var(--d),
				theme(colors.white) calc(var(--d) - 1px),
				theme(colors.black) var(--d)
			)
			calc(50% - 1px) calc(50% - 1px) / 32px 32px;
	}
</style>

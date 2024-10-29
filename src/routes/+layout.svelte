<script lang="ts">
	import '../app.css';
	const copyright = $state({
		year: new Date().getFullYear(),
		owner: 'Eat The Sour Pap'
	});
	let { children } = $props();
</script>

<svelte:head>
	<title>SV:Base</title>
</svelte:head>
<main class="flex h-screen flex-col bg-gray-50">
	<header class="flex items-center justify-between bg-gray-100 p-8">
		<a href="/" class="transition-opacity duration-500 hover:opacity-30">
			<h1 class="text-4xl font-bold">Base</h1>
		</a>
		<nav class="flex gap-4 text-xs uppercase">
			<a href="/">root</a>
			<a href="/login">login</a>
			<a href="/register">register</a>
		</nav>
	</header>
	<section class="flex-grow p-8">
		{@render children()}
	</section>
	<footer class="bg-gray-200 p-8 text-xs">
		<p>{copyright.owner} &copy; {copyright.year}</p>
	</footer>
</main>

<style lang="postcss">
	main header nav a {
		@apply px-2 py-2 text-blue-500 transition-colors duration-500 hover:bg-blue-100 hover:text-blue-700;
	}

	:global(button) {
		@apply rounded-md bg-blue-500 px-2 py-1 text-sm text-white hover:bg-blue-600 active:bg-blue-700 active:outline-2 disabled:bg-gray-300;
		@apply active:ring-2 active:ring-purple-500;
	}
</style>

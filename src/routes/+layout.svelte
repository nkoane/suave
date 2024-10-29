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
		<h1 class="text-4xl font-bold">Base</h1>
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

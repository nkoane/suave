<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<h1>Register</h1>
<form method="post" action="?/register" use:enhance>
	<p class="bg-red-500">
		<label>
			Username
			<input name="username" />
		</label>
	</p>
	<label>
		Password
		<input type="password" name="password" />
	</label>
	<label>
		Confirm Password
		<input type="password" name="confirm-password" />
	</label>
	<button>Register</button>
</form>
<p style="color: red">{form?.message ?? ''}</p>

<script lang="ts">
	let { data } = $props();
</script>

<h1>Database Version</h1>
<p>{data.version}</p>
<p>{data.user?.displayName}</p>
<p>{data.user?.primaryEmail}</p>

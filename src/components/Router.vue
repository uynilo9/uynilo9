<script lang="ts" setup>
	const emit = defineEmits<{
		viewChanged: [view: number];
	}>();

	import * as vue from 'vue';
	const view = vue.ref(0);
</script>
<template>
	<div class="flex flex-row items-center gap-2">
		<p
			class="font-500 text-3.75"
			:class="view === 0 ? 'router-current' : 'router-default'"
			@click="view = 0, emit('viewChanged', view)"
			>About</p
		>
		<p
			class="font-500 text-3.75"
			:class="view === 1 ? 'router-current' : 'router-default'"
			@click="view = 1, emit('viewChanged', view)"
			>Projects</p
		>
	</div>
</template>

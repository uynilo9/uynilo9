<script lang="ts" setup>
	import * as vue from 'vue';
	import Header from '@components/Header.vue';
	import About from '@components/About.vue';
	import Projects from '@components/Projects.vue';
	const view = vue.ref(0);
</script>
<template>
	<div
		class="
            m-auto px-7.5 pt-5 pb-4.5 w-lg h-xs flex flex-col
            bg-gray:5 rounded-2.5
            shadow-lg shadow-black:10 @hover:shadow-black:25
            transition-shadow ease-in-out duration-250
        "
	>
		<Header @viewChanged="(newView: number) => view = newView" />
		<About v-if="view === 0" />
		<Projects v-if="view === 1" />
	</div>
</template>

<script lang="ts" setup>
	interface Badge {
	    name: string,
	    icon: string
	};
	const badges: Badge[] = [
		{
			name: 'ROC',
			icon: 'icon-roc'
		},
		{
			name: 'VSCode',
			icon: 'icon-vscode'
		},
	    {
			name: 'Verified',
	        icon: 'icon-check'
	    },
	];
	const labels = ['Unpro Programmer', 'ACG Lover', 'Highschool Student'];
	const label = labels[Math.floor(Math.random() * labels.length - 1) + 1];
</script>
<template>
	<div class="flex flex-row items-center gap-2.25">
		<img
			src="@assets/avatar.png"
			alt="@uynilo9"
			loading="eager"
			decoding="sync"
			class="max-w-10 max-h-10 rounded-full select-none pointer-events-none"
		/>
		<div class="min-w-30 grid gap-y-0.5">
			<div
				class="
					flex font-600 text-default text-4.25 items-center gap-x-1
					*:my-auto
				"
			>
				uynilo9
				<div class="flex font-500 text-default text-3.25 text-gray items-center gap-x-1">
					<div
						v-for="badge in badges"
						:class="badge.icon"
						:title="badge.name"
					></div>
					@uynilo9
				</div>
			</div>
			<p class=" text-default text-3 text-gray">#{{ label }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	interface Link {
	    name: string,
	    url: string,
	    icon: string
	};
	const links: Link[] = [
	    {
	        name: 'Apple Music',
	        url: 'https://music.apple.com/profile/uynilo9',
	        icon: 'icon-apple-music'
	    },
	    {
	        name: 'Discord',
	        url: 'https://discordapp.com/users/979017190009368586',
	        icon: 'icon-discord'
	    },
	    {
	        name: 'GitHub',
	        url: 'https://github.com/uynilo9',
	        icon: 'icon-github'
	    },
	    {
	        name: 'Reddit',
	        url: 'https://reddit.com/u/uynilo9_',
	        icon: 'icon-reddit'
	    },
	    {
	        name: 'Twitch',
	        url: 'https://twitch.tv/uynilo9',
	        icon: 'icon-twitch'
	    },
	    {
	        name: 'Twitter',
	        url: 'https://twitter.com/uynilo9',
	        icon: 'icon-twitter'
	    },
	    {
	        name: 'YouTube',
	        url: 'https://youtube.com/@uynilo9',
	        icon: 'icon-youtube'
	    },
	];
</script>
<template>
	<div class="flex">
		<div
			class="flex"
			v-for="link in links"
		>
			<a
				class="flex cursor-default"
				target="_blank"
				:href="link.url"
				:title="link.name"
			>
				<div
					class="cursor-pointer"
					:class="link.icon"
				></div>
			</a>
			<p
				v-if="link != links[links.length - 1]"
				class="mx-3 text-default text-gray select-none"
				>|</p
			>
		</div>
	</div>
</template>

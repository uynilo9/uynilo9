<script lang="ts" setup>
	interface Link {
	    name: string,
	    url: string,
	    icon: string
	};
	const links: Link[] = [
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
	        name: 'Spotify',
	        url: 'https://open.spotify.com/user/315prrl5b3npqcxe7wyfkux7e6dm',
	        icon: 'icon-spotify'
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
	    {
	        name: 'YouTube Music',
	        url: 'https://music.youtube.com/channel/UCB2jaRZOvHsoa-y1nZ_b73g',
	        icon: 'icon-youtube-music'
	    }
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

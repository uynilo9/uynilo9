<script lang="ts" setup>
	enum Status {
		Updating = 'Updating',
		Developing = 'Developing',
		Archived = 'Archived',
		Planning = 'Planning',
		Idle = 'Idle',
	}
	const projects: Project[] = [
	    {
	        name: '@uynilo9/uynilo9',
	        description: '✨ - My special repo for something amazing',
	        url: 'https://github.com/uynilo9/uynilo9',
	        status: Status.Updating,
	        websites: {
	            'GitHub': 'icon-github',
	            'Vercel': 'icon-vercel'
	        },
	        tools: {
	            'TypeScript': 'icon-ts',
	            'Vue': 'icon-vue',
	            'Vite': 'icon-vite',
	            'UnoCSS': 'icon-unocss',
	            'Bun': 'icon-bun'
	        }
	    },
	    {
	        name: '@uynilo9/note-pie',
	        description: '🥧 - The Note-pie modern MD notes app',
	        url: 'https://github.com/uynilo9/note-pie',
	        status: Status.Developing,
	        websites: {
	            'GitHub': 'icon-github'
	        },
	        tools: {
				'Go': 'icon-go',
				'Wails': 'icon-wails',
				'TypeScript': 'icon-ts',
	            'Vue': 'icon-vue',
	            'Vite': 'icon-vite',
	            'UnoCSS': 'icon-unocss',
				'Bun': 'icon-bun'
	        }
	    },
	    {
	        name: '@uynilo9/logger.go',
	        description: '🌴 - A simple logger for Go',
	        url: 'https://pkg.go.dev/github.com/uynilo9/logger.go',
	        status: Status.Updating,
	        websites: {
	            'Go Packages': 'icon-pkg.go.dev',
	            'GitHub': 'icon-github'
	        },
	        tools: {
	            'Go': 'icon-go'
	        }
	    },
	    {
	        name: '@uynilo9/bento',
	        description: '🍱 - The Bento programming language',
	        url: 'https://github.com/uynilo9/bento',
	        status: Status.Archived,
	        websites: {
	            'GitHub': 'icon-github'
	        },
	        tools: {
	            'Go': 'icon-go'
	        }
	    }
	];
</script>
<template>
	<div class="flex flex-col gap-3 overflow-y-scroll">
		<a
			v-for="project in projects"
			class="
                px-3 py-3.5 rounded-2.5
                border-solid border-1.75 border-gray:20 @hover:border-white:50
                grid gap-y-0.75
                transition-all ease-in-out duration-250
                decoration-none cursor-pointer select-none
            "
			target="_blank"
			:href="project.url"
		>
			<h3 class="text-4 text-default flex gap-x-2">
				{{ project.name }}
				<p
					class="text-3 m-y-auto"
					:class="
                        project.status === Status.Updating ? 'hidden' :
                        project.status === Status.Developing ? 'status-developing' :
                        project.status === Status.Archived ? 'status-archived' :
                        project.status === Status.Planning ? 'status-planning' :
                        project.status === Status.Idle ? 'status-idle' : ''
                    "
					>{{ project.status }}</p
				>
			</h3>
			<p
				class="text-3.5 text-default text-gray"
				>{{ project.description }}</p
			>
			<div class="flex items-center gap-1">
				<div
					v-for="websiteIcon, website in project.websites"
					:class="websiteIcon"
					:title="website"
				></div>
				<p class="mx-1 text-3.5 text-default text-gray select-none"
					>|</p
				>
				<div
					v-for="toolIcon, tool in project.tools"
					:class="toolIcon"
					:title="tool"
				></div>
			</div>
		</a>
	</div>
</template>

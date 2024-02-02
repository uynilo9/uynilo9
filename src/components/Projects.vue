<script lang="ts" setup>
    interface Project {
        name: string,
        description: string,
        url: string,
        website: string,
        icons: string[]
    };
    const projects: Project[] = [
        {
            name: '@uynilo9/uynilo9',
            description: '✨ - My special repo for something amazing',
            url: 'https://github.com/uynilo9/uynilo9',
            website: 'icon-github',
            icons: ['icon-ts', 'icon-vue', 'icon-vite', 'icon-unocss', 'icon-bun']
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
            <h3 class="text-4 text-default">{{ project.name }}</h3>
            <p class="text-3.5 text-default text-gray">{{ project.description }}</p>
            <div class="flex gap-1">
                <div
                    :class="project.website"
                    :title="project.website.slice(5)"
                ></div>
                <p class="text-3.5 text-default text-gray select-none">|</p>
                <div
                    v-for="icon in project.icons"
                    :class="icon"
                    :title="icon.slice(5)"
                ></div>
            </div>
        </a>
    </div>
</template>
<script lang="ts" setup>
    interface Project {
        name: string,
        description: string,
        url: string,
        websites: Record<string, string>,
        tools: Record<string, string>
    };
    const projects: Project[] = [
        {
            name: '@uynilo9/uynilo9',
            description: '✨ - My special repo for something amazing',
            url: 'https://github.com/uynilo9/uynilo9',
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
            name: '@face-hh/griddycode',
            description: 'A code editor made with Godot. Code has never been more lit!',
            url: 'https://github.com/face-hh/griddycode',
            websites: {
                'GitHub': 'icon-github',
                'YouTube': 'icon-youtube'
            },
            tools: {
                'GDScript': 'icon-gdscript',
                'Rust': 'icon-rust',
                'Lua': 'icon-lua'
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
            <h3 class="text-4 text-default">{{ project.name }}</h3>
            <p class="text-3.5 text-default text-gray">{{ project.description }}</p>
            <div class="flex items-center gap-1">
                <div
                    v-for="websiteIcon, website in project.websites"
                    :class="websiteIcon"
                    :title="website"
                ></div>
                <p class="mx-1 text-3.5 text-default text-gray select-none">|</p>
                <div
                    v-for="toolIcon, tool in project.tools"
                    :class="toolIcon"
                    :title="tool"
                ></div>
            </div>
        </a>
    </div>
</template>
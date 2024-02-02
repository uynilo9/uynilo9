<script lang="ts" setup>
    const labels = ['Unpro Programmer', 'ACG Lover', 'Highschool Student'];
    const label = labels[Math.floor(Math.random() * labels.length - 1) + 1];
</script>
<template>
    <div class="flex flex-row items-center gap-2.25">
        <img
            src="@assets/avatar.png" alt="@uynilo9"
            class="max-w-10 max-h-10 rounded-full select-none pointer-events-none max-sm:hidden"
        />
        <div class="min-w-30 grid gap-y-0.5">
            <p class="flex font-600 text-default text-4.25 items-center gap-x-2">
                uynilo9 <span class="flex font-500 text-default text-3.25 text-gray items-center">@uynilo9</span>
            </p>
            <p class=" text-default text-3 text-gray">#{{ label }}</p>
        </div>
    </div>
</template>
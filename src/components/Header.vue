<script lang="ts" setup>
    import Info from '@components/Info.vue';
    import Router from '@components/Router.vue';
</script>
<template>
    <div class="mb-7.5 flex flex-row flex-wrap justify-between">
        <Info />
        <Router @view-changed="(n: Number) => $emit('view-changed', n)"/>
    </div>
</template>
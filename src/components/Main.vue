<script lang="ts" setup>
    import Wrapper from '@components/Wrapper.vue';
    import Copyright from '@components/Copyright.vue';
    import Warning from '@components/Warning.vue';
</script>
<template>
    <div class="min-w-screen min-h-screen grid max-sm:hidden">
        <Wrapper />
        <Copyright />
    </div>
    <Warning />
</template>
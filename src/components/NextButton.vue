<script lang="ts" setup>
interface Props {
    content?: string;
}

const $props = defineProps<Props>();
</script>
<template>
    <button aria-label="Next step" role="button" v-if="$props.content">
        Confirm
    </button>
    <button aria-label="Next step" role="button" v-else>Next Step</button>
</template>
<style scoped>
button {
    padding: var(--pad-btn);
    border-radius: 5px;
    border: none;
    background-color: var(--primary-Marine-blue);
    color: var(--neutral-Alabaster);
    font-weight: 500;
    cursor: pointer;
}
</style>

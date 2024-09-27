<script lang="ts" setup>
interface Props {
    content?: string;
}

const $props = defineProps<Props>();
</script>
<template>
    <button
        aria-label="Next step"
        class="confirm"
        role="button"
        v-if="$props.content"
    >
        {{ $props.content }}
    </button>
    <button aria-label="Next step" role="button" v-else>Next Step</button>
</template>
<style scoped>
button {
    border-radius: 5px;
    border: none;
    background-color: var(--primary-Marine-blue);
    color: var(--neutral-Alabaster);
    font-weight: 600;
    cursor: pointer;
    padding: var(--pad-btn) 30px;
    
    &.confirm {
        background-color: var(--primary-Purplish-blue);
    }
}
</style>

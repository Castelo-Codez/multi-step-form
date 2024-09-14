<script lang="ts" setup>
import {$current} from "../../store/store";
</script>
<template>
    <button
        aria-label="Go to the previous step"
        role="button"
        @click="$current--"
    >
        Go Back
    </button>
</template>
<style scoped>
button {
    border: none;
    background: none;
    color: var(--neutral-Cool-gray);
    cursor: pointer;
    padding: var(--pad-btn);
    transition: 0.4s;
    font-weight: 600;
    &:hover {
        color: var(--primary-Marine-blue);
    }
}
</style>

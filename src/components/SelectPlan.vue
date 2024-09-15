<script setup lang="ts">
import NextButton from "./NextButton.vue";
import GoBack from "./GoBack.vue";
import {$current, $selectedFeatures} from "../../store/store";

function $nextStep() {}
</script>
<template>
    <div aria-label="step - select plan" class="step-controllers">
        <h1 aria-label="plan name" aria-level="1" class="font-bold">
            Select Your Plan
        </h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div></div>
    </div>
    <div class="controllers" aria-label="controllers buttons">
        <GoBack v-if="$current > 0" />
        <NextButton @click="$nextStep" />
    </div>
</template>
<style>
.controllers {
    justify-content: space-between;
}
</style>

<script lang="ts" setup>
import GoBack from "./GoBack.vue";
import NextButton from "./NextButton.vue";
import {computed} from "vue";
import {$current, $planType, $selectedFeatures} from "../../store/store";
function $nextStep() {
    $current.value++;
}

const $mainPlan = computed(() => {
    return JSON.parse($selectedFeatures.selectedPlan as string);
});

const $totalPrice = computed(() => {
    let $totalPrice = 0;
    $totalPrice += JSON.parse($selectedFeatures.selectedPlan as string).price;
    let $clonedArr = $selectedFeatures.additionalFeatures?.map((el) =>
        JSON.parse(el)
    );
    if ($clonedArr) {
        for (let i = 0; i < $clonedArr?.length; i++) {
            for (let [key, value] of Object.entries($clonedArr[i])) {
                if (typeof value === "number") {
                    $totalPrice += value;
                }
            }
        }
    }
    return $totalPrice;
});
function $goBack() {
    $current.value = 1;
}
</script>
<template>
    <div aria-label="step - finishing up" class="step-controllers">
        <h1 aria-label="plan name" aria-level="1" class="font-bold">
            Finishing up
        </h1>
        <p>Double-check everything looks Ok berfore confirming</p>
        <div>
            <h2 aria-label="main plan info" class="main-plan-info">
                <div>
                    <span aria-label="plan name" class="plan-name">
                        {{ $mainPlan.title }}
                        <span v-if="$planType">(yearly)</span>
                        <span v-else>(monthly)</span>
                    </span>
                    <button @click="$goBack">change</button>
                </div>
                <span aria-label="price" v-if="$planType">
                    +${{ $mainPlan.price }}/yr
                </span>
                <span aria-label="price" v-else>
                    +${{ $mainPlan.price }}/mo
                </span>
            </h2>
            <div aria-label="line" class="line"></div>
            <ul
                role="list"
                aria-label="additional features selected"
                v-if="$selectedFeatures.additionalFeatures?.length"
            >
                <li
                    role="listitem"
                    v-for="feature in $selectedFeatures.additionalFeatures"
                    :aria-label="JSON.parse(feature).title + 'feature'"
                >
                    <span aria-label="feature name" class="freature-name">{{
                        JSON.parse(feature).title
                    }}</span>
                    <span
                        aria-label="feature price"
                        v-if="$planType"
                        class="freature-price"
                        >${{ JSON.parse(feature).price }}/yr</span
                    >
                    <span
                        aria-label="feature price"
                        v-else
                        class="freature-price"
                        >${{ JSON.parse(feature).price }}/mo</span
                    >
                </li>
            </ul>
        </div>
        <div aria-label="total price info" class="total-price-info">
            <span v-if="$planType">Total (per year)</span>
            <span v-else>Total (per month)</span>
            <span aria-label="total price" v-if="$planType"
                >${{ $totalPrice }}/yr</span
            >
            <span aria-label="total price" v-else>${{ $totalPrice }}/mo</span>
        </div>
    </div>
    <div class="controllers" aria-label="controllers buttons">
        <GoBack v-if="$current > 0" />
        <NextButton content="Confirm" @click="$nextStep" />
    </div>
</template>
<style scoped>
.step-controllers {
    > div:not(.total-price-info) {
        background-color: var(--neutral-Alabaster);
        padding: 18px;
        border-radius: 5px;
        > h2 {
            text-transform: capitalize;
            font-size: 0.999rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            > div {
                button {
                    display: block;
                    margin-top: 8px;
                    background: none;
                    border: none;
                    text-transform: capitalize;
                    font-weight: 600;
                    font-size: 0.8rem;
                    color: var(--neutral-Cool-gray);
                    text-decoration: underline;
                    cursor: pointer;
                    &:hover {
                        color: var(--primary-Purplish-blue);
                    }
                }
            }
            > span {
                text-transform: none;
                font-size: 0.77777rem;
                font-weight: 700;
            }
        }
        .line {
            height: 1px;
            background-color: var(--neutral-Light-gray);
            margin-bottom: 5px;
            & + ul {
                padding-top: 20px;
                li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 18px;
                    span {
                        &:first-child {
                            text-transform: capitalize;
                            color: var(--neutral-Cool-gray);
                            font-size: 0.8rem;
                            & + span {
                                font-size: 0.8rem;
                                font-weight: 600;
                                color: var(--primary-Marine-blue);
                            }
                        }
                    }
                }
            }
        }
    }
    .total-price-info {
        margin-top: 10px;
        padding: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            &:first-child {
                color: var(--neutral-Cool-gray);
                font-size: 0.999rem;
                & + span {
                    color: var(--primary-Purplish-blue);
                    font-size: 0.99rem;
                    font-weight: 700;
                }
            }
        }
    }
}
</style>

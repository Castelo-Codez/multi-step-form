<script setup lang="ts">
import NextButton from "./NextButton.vue";
import GoBack from "./GoBack.vue";
import {ref, watch} from "vue";
import {$current, $planType, $selectedFeatures} from "../../store/store";
const Plan = ref();
function $nextStep() {
    $current.value++;
}
watch(Plan, (newVal) => {
    $selectedFeatures.selectedPlan = newVal;
});
</script>
<template>
    <div aria-label="step - select plan" class="step-controllers">
        <h1 aria-label="plan name" aria-level="1" class="font-bold">
            Select Your Plan
        </h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div aria-label="plans" class="plans">
            <div aria-label="plan-container">
                <input
                    type="radio"
                    id="acrade"
                    v-model="Plan"
                    checked
                    value="acrade"
                    name="plan"
                    aria-label="acrade plan"
                />
                <label for="acrade">
                    <span class="icon" aria-label="icon plan"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                        >
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
                                <path
                                    fill="#FFF"
                                    fill-rule="nonzero"
                                    d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
                                />
                            </g></svg
                    ></span>
                    <div aria-label="plan info" class="plan info">
                        <article role="article">
                            <span aria-label="plan name" class="plan-name">
                                Acrade
                            </span>
                            <span
                                aria-label="pricing-monthly"
                                class="pricing-monthly"
                                v-if="!$planType"
                                >$9/mo</span
                            >
                            <span
                                v-if="$planType"
                                aria-label="pricing-yearly"
                                class="pricing-yearly"
                                >$90/yr</span
                            >
                            <span aria-label="free" v-if="$planType"
                                >2 months free</span
                            >
                        </article>
                    </div>
                </label>
            </div>
            <div aria-label="plan-container">
                <input
                    type="radio"
                    id="advanced"
                    v-model="Plan"
                    name="plan"
                    value="advanced"
                    aria-label="advanced plan"
                />
                <label for="advanced">
                    <span class="icon" aria-label="icon plan" role="img"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                        >
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="20" cy="20" r="20" fill="#F9818E" />
                                <path
                                    fill="#FFF"
                                    fill-rule="nonzero"
                                    d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
                                />
                            </g></svg
                    ></span>
                    <div aria-label="plan info" class="plan info">
                        <article role="article">
                            <span aria-label="plan name" class="plan-name">
                                advanced
                            </span>
                            <span
                                aria-label="pricing-monthly"
                                class="pricing-monthly"
                                v-if="!$planType"
                                >$12/mo</span
                            >
                            <span
                                aria-label="pricing-yearly"
                                class="pricing-yearly"
                                v-if="$planType"
                                >$120/yr</span
                            >
                            <span aria-label="free" v-if="$planType"
                                >2 months free</span
                            >
                        </article>
                    </div>
                </label>
            </div>
            <div aria-label="plan-container">
                <input
                    type="radio"
                    id="pro"
                    v-model="Plan"
                    name="plan"
                    value="pro"
                    aria-label="pro plan"
                />
                <label for="pro">
                    <span class="icon" aria-label="icon plan" role="img"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                        >
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="20" cy="20" r="20" fill="#483EFF" />
                                <path
                                    fill="#FFF"
                                    fill-rule="nonzero"
                                    d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
                                />
                            </g></svg
                    ></span>
                    <div aria-label="plan info" class="plan info">
                        <article role="article">
                            <span aria-label="plan name" class="plan-name">
                                pro
                            </span>
                            <span
                                aria-label="pricing-monthly"
                                v-if="!$planType"
                                class="pricing-monthly"
                                >$15/mo</span
                            >
                            <span
                                aria-label="pricing-yearly"
                                class="pricing-yearly"
                                v-if="$planType"
                                >$150/yr
                            </span>
                            <span aria-label="free" v-if="$planType"
                                >2 months free</span
                            >
                        </article>
                    </div>
                </label>
            </div>
        </div>
        <div aria-label="plan controllers" class="plan-controllers">
            <input
                type="checkbox"
                id="planSwitcher"
                aria-label="switch the plan time"
                role="checkbox"
                style="display: none"
                v-model="$planType"
            />
            <label for="planSwitcher">
                <span>monthly</span>
                <div aria-hidden="true"></div>
                <span>yearly</span>
            </label>
        </div>
    </div>
    <div class="controllers" aria-label="controllers buttons">
        <GoBack v-if="$current > 0" />
        <NextButton @click="$nextStep" />
    </div>
</template>
<style>
.plans {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
    > div {
        flex: 1;
        input {
            display: none;
            &:checked + label {
                background-color: var(--neutral-Magnolia);
                border: 1px solid var(--primary-Purplish-blue);
            }
        }
        label {
            padding: 20px 18px;
            display: block;
            cursor: pointer;
            border: 1px solid var(--neutral-Light-gray);

            border-radius: 10px;
            span {
                display: block;
            }
            > span {
                margin-bottom: 30px;
            }
            .plan.info {
                article {
                    span {
                        margin-bottom: 6px;
                        &.plan-name {
                            font-size: 0.9rem;
                            font-weight: 600;
                            text-transform: capitalize;
                            & + span {
                                color: var(--neutral-Cool-gray);
                                & + span {
                                    color: var(--neutral-Cool-gray);
                                }
                            }
                        }
                        &:not(.plan-name) {
                            font-size: 0.8rem;
                        }
                    }
                }
            }
        }
    }
}
.plan-controllers {
    margin-top: 20px;
    border-radius: 8px;
    margin-top: 41px;
    height: 42px;
    background-color: var(--neutral-Alabaster);
    display: flex;
    justify-content: center;
    align-items: center;
    label {
        display: flex;
        column-gap: 15px;
        align-items: center;
        cursor: pointer;
        div {
            width: 38px;
            height: 19px;
            background-color: var(--primary-Marine-blue);
            border-radius: 33px;
            position: relative;
            &::before {
                border-radius: 50%;
                content: "";
                position: absolute;
                width: 13px;
                height: 13px;
                background-color: var(--neutral-White);
                top: 50%;
                transform: translateY(-50%);
                left: 4px;
                transition: 0.4s;
            }
        }
        span {
            text-transform: capitalize;
            font-size: 0.79rem;
            font-weight: 800;
            &:nth-child(3) {
                color: var(--neutral-Cool-gray);
            }
        }
    }
    input:checked + label {
        span {
            color: var(--neutral-Cool-gray);
            &:nth-child(3) {
                color: var(--primary-Marine-blue);
            }
        }
        div {
            &::before {
                transform: translate(16px, -50%);
            }
        }
    }
}
.controllers {
    justify-content: space-between;
}
</style>

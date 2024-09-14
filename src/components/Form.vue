<script lang="ts" setup>
import PersonalInfoSetp from "./PersonalInfo.vue";
import {$reactiveState} from "../../store/store";
</script>
<template>
    <div aria-label="parent" class="parent">
        <div class="pattern-layout">
            <ul role="list" aria-label="current step">
                <li role="listitem" aria-label="your info step">
                    <span
                        aria-label="current step num"
                        :class="[$reactiveState.personalInfo ? 'active' : '']"
                        class="step-num"
                        >1</span
                    >
                    <div aria-label="step info" class="step-info">
                        <span>Step 1</span>
                        <span>Your Info</span>
                    </div>
                </li>
                <li role="listitem" aria-label="select a plan">
                    <span
                        :class="[$reactiveState.selectAplan ? 'active' : '']"
                        aria-label="current step num"
                        class="step-num"
                        >2</span
                    >
                    <div aria-label="step info" class="step-info">
                        <span>Step 2</span>
                        <span>select plan</span>
                    </div>
                </li>
                <li role="listitem" aria-label="add-ons">
                    <span
                        :class="[$reactiveState.pickAdd ? 'active' : '']"
                        aria-label="current step num"
                        class="step-num"
                        >3</span
                    >
                    <div aria-label="step info" class="step-info">
                        <span>Step 3</span>
                        <span>add-ons</span>
                    </div>
                </li>
                <li role="listitem" aria-label="summary">
                    <span
                        :class="[
                            $reactiveState.finishingUp || $reactiveState.last
                                ? 'active'
                                : '',
                        ]"
                        aria-label="current step num"
                        class="step-num"
                        >4</span
                    >
                    <div aria-label="step info" class="step-info">
                        <span>Step 4</span>
                        <span>summary</span>
                    </div>
                </li>
            </ul>
        </div>
        <div aria-label="steps" class="steps-wrapper">
            <PersonalInfoSetp v-if="$reactiveState.personalInfo" />
        </div>
    </div>
</template>
<style>
.parent {
    max-width: 800px;
    min-width: 250px;
    width: 800px;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns:250px 1fr;
        background-color: var(--neutral-White);
        padding: 20px;
    }
}
.pattern-layout {
    background-image: url("/images/bg-sidebar-mobile.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 13px 75px 75px;
    @media (min-width: 768px) {
        padding: 20px;
        border-radius: 10px;
        background-position: 69% 98%;
    }
    ul {
        display: flex;
        align-items: center;
        padding: 20px 10px;
        justify-content: center;
        column-gap: 11px;
        @media (min-width: 768px) {
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            column-gap: 0;
            row-gap: 30px;
        }

        li {
            @media (min-width: 768px) {
                display: flex;
                column-gap: 17px;
                align-items: center;
            }
            .step-num {
                width: 5vw;
                height: 5vw;
                border: 1px solid var(--neutral-White);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                color: var(--neutral-White);
                font-weight: 800;
                @media (min-width: 991px) {
                    width: 2.3vw;
                    height: 2.3vw;
                    display: flex;
                    column-gap: 17px;
                    align-items: center;
                }
            }
            .step-num.active {
                background-color: var(--primary-Light-blue);
                color: var(--primary-Marine-blue);
                border: beige;
                transition: 0.4s;
            }
            .step-info {
                display: none;
                @media (min-width: 768px) {
                    display: block;
                    span {
                        display: block;
                        margin-bottom: 5px;
                        &:nth-child(1) {
                            text-transform: uppercase;
                            color: var(--neutral-Light-gray);
                            & + span {
                                text-transform: uppercase;
                                font-size: 16px;
                                font-weight: 600;
                                color: var(--neutral-Alabaster);
                                letter-spacing: 1px;
                            }
                        }
                    }
                }
            }
        }
    }
}
.steps-wrapper {
    background-color: var(--neutral-White);
    min-height: 300px;
    width: 85%;
    margin: auto;
    border-radius: 5px;
    position: relative;
    bottom: 57px;
    @media (min-width: 768px) {
        width: 100%;
        bottom: 0;
        position: static;
        padding: 30px;
    }
    .controllers {
        position: absolute;
        background-color: var(--neutral-Alabaster);
        padding: 10px;
        bottom: -29%;
        width: 100%;
        display: flex;
        align-items: center;
        @media (min-width: 768px) {
            position: static;
        }
    }
    .step-controllers {
        color: var(--primary-Marine-blue);
        padding: 25px;
        h1 {
            letter-spacing: 0.4px;
            margin-bottom: 12px;
            font-size: 2.4rem;
            & + p {
                color: var(--neutral-Cool-gray);
                line-height: 1.5;
                margin-bottom: 20px;
            }
        }
    }
}
</style>

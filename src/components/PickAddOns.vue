<script lang="ts" setup>
import NextButton from "./NextButton.vue";
import GoBack from "./GoBack.vue";
import {$current, $planType, $selectedFeatures} from "../../store/store";

function $nextStep() {}
</script>
<template>
    <div aria-label="step - select plan" class="step-controllers">
        <h1 aria-label="plan name" aria-level="1" class="font-bold">
            Pick add-ons
        </h1>
        <p>Add-ons help enhance your gaming experience.</p>
    </div>
    <div aria-label="additional features" class="additional-features">
        <div>
            <input
                style="display: none"
                type="checkbox"
                v-model="$selectedFeatures.additionalFeatures"
                :value="
                    $planType
                        ? JSON.stringify({title: 'online service', price: 10})
                        : JSON.stringify({title: 'online service', price: 1})
                "
                id="online-service"
                role="checkbox"
                checked
                aria-label="add online service feature"
            />

            <label for="online-service">
                <div>
                    <div aria-hidden="true">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                        >
                            <path
                                fill="none"
                                stroke="#FFF"
                                stroke-width="2"
                                d="m1 4 3.433 3.433L10.866 1"
                            />
                        </svg>
                    </div>
                    <article>
                        <h1 aria-label="feature name">online service</h1>
                        <p aria-label="feature info">
                            acess to multiplayer games
                        </p>
                    </article>
                </div>
                <span v-if="$planType">+$10/yr</span>
                <span v-else>+$1/mo</span>
            </label>
        </div>
        <div>
            <input
                style="display: none"
                type="checkbox"
                v-model="$selectedFeatures.additionalFeatures"
                :value="
                    $planType
                        ? JSON.stringify({title: 'larger storage', price: 20})
                        : JSON.stringify({title: 'larger storage', price: 2})
                "
                role="checkbox"
                id="larger-storage"
                aria-label="add larger storage feature"
            />

            <label for="larger-storage">
                <div>
                    <div aria-hidden="true">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                        >
                            <path
                                fill="none"
                                stroke="#FFF"
                                stroke-width="2"
                                d="m1 4 3.433 3.433L10.866 1"
                            />
                        </svg>
                    </div>

                    <article>
                        <h1 aria-label="feature name">larger storage</h1>
                        <p aria-label="feature info">Extra 1TB of cloud save</p>
                    </article>
                </div>
                <span v-if="$planType">+$20/yr</span>
                <span v-else>+$2/mo</span>
            </label>
        </div>
        <div>
            <input
                style="display: none"
                type="checkbox"
                v-model="$selectedFeatures.additionalFeatures"
                :value="
                    $planType
                        ? JSON.stringify({
                              title: 'customizable profile',
                              price: 20,
                          })
                        : JSON.stringify({
                              title: 'customizable profile',
                              price: 2,
                          })
                "
                id="customizable-profile"
                role="checkbox"
                aria-label="add customizable profile feature"
            />

            <label for="customizable-profile">
                <div>
                    <div aria-hidden="true">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                        >
                            <path
                                fill="none"
                                stroke="#FFF"
                                stroke-width="2"
                                d="m1 4 3.433 3.433L10.866 1"
                            />
                        </svg>
                    </div>

                    <article>
                        <h1 aria-label="feature name">customizable profile</h1>
                        <p aria-label="feature info">
                            custom theme on your profile
                        </p>
                    </article>
                </div>
                <span v-if="$planType">+$20/yr</span>
                <span v-else>+$2/mo</span>
            </label>
        </div>
    </div>
    <div class="controllers" aria-label="controllers buttons">
        <GoBack v-if="$current > 0" />
        <NextButton @click="$nextStep" />
    </div>
</template>
<style scoped>
.additional-features {
    div {
        @media (max-width: 768px) {
            padding: 0px 10px;
        }
        label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            cursor: pointer;
            gap: 10px;
            margin-bottom: 23px;
            padding: 17px 25px;
            border: 1px solid var(--neutral-Light-gray);
            border-radius: 8px;
            > div {
                display: flex;
                align-items: center;
                column-gap: 40px;
                > div {
                    width: 18px;
                    height: 18px;
                    border: 1px solid var(--neutral-Light-gray);
                    border-radius: 3px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    padding: 2px;
                    & + article {
                        h1 {
                            font-size: 1rem;
                            color: var(--primary-Marine-blue);
                            margin-bottom: 5px;
                            text-transform: capitalize;
                            & + p {
                                font-size: 0.9rem;
                                text-transform: capitalize;
                                color: var(--neutral-Cool-gray);
                            }
                        }
                    }
                }
            }
            span {
                font-weight: 700;
                font-size: 0.8rem;
                color: var(--primary-Marine-blue);
            }
        }
        input {
            &:checked + label {
                background-color: var(--neutral-Alabaster);
                border: 1px solid var(--primary-Purplish-blue);
                > div {
                    div {
                        background-color: var(--primary-Purplish-blue);
                    }
                }
            }
        }
    }
}
.controllers {
    justify-content: space-between;
}
</style>

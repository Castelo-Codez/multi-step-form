<script lang="ts" setup>
import NextButton from "./NextButton.vue";
import GoBack from "./GoBack.vue";
import {$current, $selectedFeatures} from "../../store/store";
import {ref, watch} from "vue";
import isEmail from "validator/lib/isEmail";
const $name = ref("");
const $errorOfName = ref(false);
const $errorMsgOfName = ref("");
const $email = ref("");
const $errorOfEmail = ref(false);
const $errorMsgOfEmail = ref("");
const $phoneNumber = ref("");
const $errorOfPhoneNumber = ref(false);
const $errorMsgOfNumber = ref("");
const $errors = ref([$errorOfName, $errorOfEmail, $errorOfPhoneNumber]);
function $checkForm() {
    watch(
        $name,
        (newValue) => {
            $errorOfName.value = false;
            $errorMsgOfName.value = "";
            if (newValue === "") {
                $errorOfName.value = true;
                $errorMsgOfName.value = "this field is required";
                return;
            }
            if (newValue.length < 5) {
                $errorOfName.value = true;
                $errorMsgOfName.value = "Must Be At Last 5 Chatacters";
                return;
            }
            let $reg = /[\W 0-9]/gi;
            if ($reg.test(newValue)) {
                $errorOfName.value = true;
                $errorMsgOfName.value = "Incorrect Name";
                return;
            }
        },
        {
            immediate: true,
        }
    );
    watch(
        $email,
        (newValue) => {
            $errorOfEmail.value = false;
            $errorMsgOfEmail.value = "";
            if (newValue === "") {
                $errorOfEmail.value = true;
                $errorMsgOfEmail.value = "this field is required";
                return;
            }
            if (!isEmail(newValue)) {
                $errorOfEmail.value = true;
                $errorMsgOfEmail.value = "Incorrect Email";
                return;
            }
        },
        {
            immediate: true,
        }
    );
    watch(
        $phoneNumber,
        (newValue) => {
            $errorOfPhoneNumber.value = false;
            $errorMsgOfNumber.value = "";
            if (newValue === "") {
                $errorOfPhoneNumber.value = true;
                $errorMsgOfNumber.value = "this field is required";
                return;
            }
            if (!/\+\d\s\d{3}\s\d{3}\s\d{3}/gi.test(newValue)) {
                $errorOfPhoneNumber.value = true;
                $errorMsgOfNumber.value = "Incorrect Number";
                return;
            }
        },
        {
            immediate: true,
        }
    );

    let $status = $errors.value.every((el) => {
        return el.value === false;
    });
    if ($status) {
        $selectedFeatures.email = $email.value;
        $selectedFeatures.name = $name.value;
        $selectedFeatures.phoneNmbr = $phoneNumber.value;
        $current.value++;
    }
}
</script>
<template>
    <div aria-label="step - personal info" class="step-controllers">
        <h1 aria-label="plan name" aria-level="1" class="font-bold">
            Personal Info
        </h1>
        <p>Please provide your name,email address,and phone number</p>
        <div>
            <form>
                <div aria-label="Name Container" class="input-container">
                    <label for="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        :has-error="$errorOfName"
                        v-model="$name"
                        placeholder="e.g. Stephan King"
                    />
                    <span
                        v-if="$errorOfName"
                        aria-label="name error"
                        v-text="$errorMsgOfName"
                    ></span>
                </div>
                <div aria-label="Email Container" class="input-container">
                    <label for="emailAdress">Email</label>
                    <input
                        type="text"
                        id="emailAdress"
                        name="email"
                        v-model="$email"
                        :has-error="$errorOfEmail"
                        placeholder="e.g. StephanKing@lorem.com"
                    />
                    <span aria-label="email error" v-if="$errorOfEmail">{{
                        $errorMsgOfEmail
                    }}</span>
                </div>

                <div
                    aria-label="phone number container"
                    class="input-container"
                >
                    <label for="phonenum">phone number</label>
                    <input
                        type="text"
                        id="phonenum"
                        v-model="$phoneNumber"
                        :has-error="$errorOfPhoneNumber"
                        placeholder="e.g.+1 234 567 890"
                    />
                    <span
                        aria-label="number error"
                        v-if="$errorOfPhoneNumber"
                        >{{ $errorMsgOfNumber }}</span
                    >
                </div>
            </form>
        </div>
    </div>
    <div class="controllers" aria-label="controllers buttons">
        <GoBack v-if="$current > 0" />
        <NextButton @click="$checkForm" />
    </div>
</template>
<style scoped>
form {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    .input-container {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        position: relative;
        label {
            text-transform: capitalize;
        }
        input {
            padding: 12px;
            border: 1px solid var(--neutral-Light-gray);
            border-radius: 8px;
            &:focus {
                border: 1px solid var(--primary-Purplish-blue);
                outline: 0px;
            }
            &[has-error="true"] {
                border: 0;
                border: 1px solid var(--primary-Strawberry-red);
            }
            & + span {
                color: var(--primary-Strawberry-red);
                position: absolute;
                top: 0;
                right: 0;
                font-size: 0.74rem;
                font-weight: 600;
                text-transform: capitalize;
            }
        }
    }
}
.controllers {
    justify-content: flex-end;
}
</style>

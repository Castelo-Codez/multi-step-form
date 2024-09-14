import {reactive, ref, watch} from "vue";

const $current = ref(0);

const arrayOfSteps = ref([
    "personalInfo",
    "selectAplan",
    "pickAdd",
    "finishingUp",
    "last",
]);

const $reactiveState = reactive({
    personalInfo: true,
    selectAplan: false,
    pickAdd: false,
    finishingUp: false,
    last: false,
});

interface SelectedFeatures {
    name: string | null;
    email: string | null;
    phoneNmbr: string | null;
}

let $selectedFeatures: SelectedFeatures = reactive({
    name: null,
    email: null,
    phoneNmbr: null,
});
watch(
    () => $current.value,
    (newValue) => {
        if (newValue < 0) {
            $current.value = 0;
            newValue = 0;
        }
        if (newValue >= arrayOfSteps.value.length) {
            $current.value = arrayOfSteps.value.length - 1;
            newValue = arrayOfSteps.value.length - 1;
        }
        let $targetElement = arrayOfSteps.value[newValue];
        for (let [key, value] of Object.entries($reactiveState)) {
            //@ts-expect-error
            $reactiveState[key] = false;
        } //@ts-expect-error
        $reactiveState[$targetElement] = true;
    }
);

watch($selectedFeatures, (newValue) => {
    window.localStorage.setItem("selected-features", JSON.stringify(newValue));
});

export {$reactiveState, $current, $selectedFeatures};

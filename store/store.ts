import {reactive, ref, watch} from "vue";
const $planType = ref(false);
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
    selectedPlan: string | null;
    additionalFeatures: any[] | null;
    $totalPrice: number | null;
}

let $selectedFeatures: SelectedFeatures = reactive({
    name: null,
    email: null,
    phoneNmbr: null,
    selectedPlan: JSON.stringify({title: "acrade", price: 9}),
    additionalFeatures: [],
    $totalPrice: 0,
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

watch($planType, (newValue) => {
    if (newValue) {
        let $yearlyPlanType = [
            {title: "acrade", price: 90},
            {title: "advanced", price: 120},
            {title: "pro", price: 150},
        ].find(
            (el) =>
                JSON.parse($selectedFeatures.selectedPlan as string).title ===
                el.title
        );
        $selectedFeatures.selectedPlan = JSON.stringify($yearlyPlanType);
        let $yearlyFeaturesArray = [
            {title: "online service", price: 10},
            {title: "larger storage", price: 20},
            {
                title: "customizable profile",
                price: 20,
            },
        ];
        let $clonedArr = [];
        if ($selectedFeatures.additionalFeatures) {
            for (
                let i = 0;
                i < $selectedFeatures.additionalFeatures?.length;
                i++
            ) {
                for (let $m = 0; $m < $yearlyFeaturesArray.length; $m++) {
                    if (
                        JSON.parse($selectedFeatures.additionalFeatures[i])
                            .title === $yearlyFeaturesArray[$m].title
                    ) {
                        $clonedArr.push($yearlyFeaturesArray[$m]);
                    }
                }
            }
        }
        $selectedFeatures.additionalFeatures = $clonedArr.map((el) =>
            JSON.stringify(el)
        );
        return;
    }
    let $monthlyPlanType = [
        {title: "acrade", price: 9},
        {title: "advanced", price: 12},
        {title: "pro", price: 15},
    ].find(
        (el) =>
            JSON.parse($selectedFeatures.selectedPlan as string).title ===
            el.title
    );
    $selectedFeatures.selectedPlan = JSON.stringify($monthlyPlanType);
    let $monthlyFeaturesArray = [
        {title: "online service", price: 1},
        {title: "larger storage", price: 2},
        {
            title: "customizable profile",
            price: 2,
        },
    ];
    let $clonedArr = [];
    if ($selectedFeatures.additionalFeatures) {
        for (let i = 0; i < $selectedFeatures.additionalFeatures?.length; i++) {
            for (let $m = 0; $m < $monthlyFeaturesArray.length; $m++) {
                if (
                    JSON.parse($selectedFeatures.additionalFeatures[i])
                        .title === $monthlyFeaturesArray[$m].title
                ) {
                    $clonedArr.push($monthlyFeaturesArray[$m]);
                }
            }
        }
    }
    $selectedFeatures.additionalFeatures = $clonedArr.map((el) =>
        JSON.stringify(el)
    );
});

watch($selectedFeatures, (newValue) => {
    window.localStorage.setItem("selected-features", JSON.stringify(newValue));
});

export {$reactiveState, $current, $selectedFeatures, $planType};

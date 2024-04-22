<script setup>
const props = defineProps({
    heading: {
        type: String,
        default: '',
    },
    subHeading: {
        type: String,
        default: '',
    },
});
</script>
<template>
    <div>
        <h1 class="text-2xl sm:text-3xl text-black-1 font-bold text-center">{{ heading }}</h1>
        <p class="text-sm sm:text-base text-black-1 opacity-70 font-normal text-center mt-1 sm:mt-3">{{ subHeading }}</p>
    </div>
</template>
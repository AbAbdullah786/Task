<script setup>
const props = defineProps({
    text: {
        type: String,
        default: '',
    },
    valid: {
        type: Boolean,
        default: false,
    },
})
</script>
<template>
    <button 
        class="w-full max-w-96 sm:max-w-108 rounded-lg text-white p-2 md:p-3 text-sm sm:text-base font-medium mb-5"
        :class="valid ? 'bg-primary' : 'bg-primary-5' "
        type="submit"
        :disabled="!valid"
    >
        {{ text }}
    </button>
</template>
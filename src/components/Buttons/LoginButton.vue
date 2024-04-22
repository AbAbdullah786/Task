<script setup>
const props = defineProps({
    text: {
        type: String,
        default: '',
    },
    icon: {
        type: String,
        default: '',
    },
})
</script>
<template>
    <div 
        class="bg-white border border-gray-1 flex items-center justify-center gap-3 rounded-lg p-2 md:py-3 w-full max-w-96 sm:max-w-108 mb-4 cursor-pointer"
    >
      <component :is="icon"/>
      <span class="text-sm sm:text-base font-medium text-black-1">{{text}}</span>

    </div>

</template>
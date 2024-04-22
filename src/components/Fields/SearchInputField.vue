<script setup>
import SearchIcon from "@/components/Icons/SearchIcon.vue";
const props = defineProps({
    id: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    valueModel: {
        type: String,
        default: '',
    },
    bgColor: {
        type: String,
        default: '#041B20',
    },
    radius: {
        type: String,
        default: '32px',
    },
    borderColor: {
        type: String,
        default: '#06262D',
    },
    color: {
        type: String,
        default: '#BCBCBC80',
    },
    height: {
        type: String,
        default: '',
    },
})
</script>
<template>
    <div :id="id" class="relative">
        <i class="absolute left-2.5 translate-y-1/2">
            <SearchIcon />
        </i>
        <input 
            :id="id" 
            class="search-input border border-gray-1 bg-card rounded-lg text-sm lg:text-base font-poppins font-normal outline-none w-60 lg:w-80" 
            type="text" 
            :placeholder="placeholder"
        >
    </div>
</template>
<style scoped>
.search-input {
    padding: 7px 7px 7px 32px;
}
@media (max-width: 860px) {
    #nav-search {
        display: none;
    }
}
</style>
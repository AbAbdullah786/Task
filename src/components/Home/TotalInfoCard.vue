<script setup>
import ArrowUpIcon from '../Icons/ArrowUpIcon.vue';


const props = defineProps({
    headign: {
        type: String,
        default: '',
    },
    number: {
        type: String,
        default: '',
    },
    total: {
        type: Object,
        default: '',
    },
    icon: {
        type: String,
        default: '',
    },
});
</script>
<template>

    <div class="flex flex-col gap-2.5">

        <div class="flex items-center gap-1.5">
            <span class="text-base text-box-heading font-normal">{{headign}}</span>
            <span class="flex items-center">
                <component :is=icon />
                <span 
                    class="font-medium text-sm font-inter"
                    :class="icon === ArrowUpIcon ? 'text-primary' : 'text-secondary' "
                >
                    {{number}}
                </span>
            </span>
        </div>

        <span class="text-black-1 font-poppins font-semibold text-2xl">{{total}}</span>

    </div>

</template>
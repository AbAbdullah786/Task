<script setup>

const props = defineProps({
    options: {
        type: Array,
        default: [],
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        default: '14',
    },
    color: {
        type: String,
        default: '14',
    },
});

const emits = defineEmits(['selectedValue']);

const selectOption = (option) => {
    emits('selectedValue', option)
}

</script>

<template>
    <div 
        class="dropdown-menu1 bg-white" 
        :style="{display: isActive ? 'block' : 'none'}"
    >
        <ul class="options m-0 bg-white">
            <li v-for="(option, index) in options" :key="index" 
                class="option text-sm text-box-heading"
                :style="{fontSize:size, color:color}"
                @click="selectOption(option)"
            >
                <RouterLink v-if="option === 'Logout'" to="/">
                    {{ option }}
                </RouterLink>
                <span v-else>
                    {{ option }}
                </span> 

            </li>
        </ul>
    </div>
</template>

<style>
.dropdown-menu1 {
    position: absolute;
    right: 0px;
    width: 100%;
    min-width: 100px;
    border-radius: 8px;
    padding: 0.5rem;
    /* display: none; */
    z-index: 3;
    border: 0.5px solid rgba(212, 225, 228, 1);
    margin-top: 8px;
}
.dropdown-menu1 .options {
    padding: 0%;
}
.options {
    width: 100%;
    padding: 0.5rem;
    margin: 0px;
    border-radius: 5.5px;
    box-shadow: 0px 13.864680290222168px 27.729360580444336px 0px #00000005;
}

.options .option {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 3px 5px;
    cursor: pointer;
    border-radius: 6px;
    line-height: 20px;
}
.options .option:hover {
    background: #f2f2f2;
}

</style>
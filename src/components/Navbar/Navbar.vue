<script setup>
import Logo from "@/components/Logo.vue";
import LineIcon from "@/components/Icons/LineIcon.vue";
import HomeIcon from "@/components/Icons/HomeIcon.vue";
import ArrowDownIcon from "@/components/Icons/ArrowDownIcon.vue";
import SearchInputField from "@/components/Fields/SearchInputField.vue";
import BellIocn from "@/components/Icons/BellIcon.vue";
import QuestionIocn from "@/components/Icons/QuestionIcon.vue";
import SettingIocn from "@/components/Icons/SettingIcon.vue";
import MenuIcon from "@/components/Icons/MenuIcon.vue";
import SubMenu from "@/components/Menu/SubMenu.vue";

import { ref } from 'vue';

const active = ref(false);
const active1 = ref(false);

const selectedValue = (value) => {
    active.value = false;
}
</script>
<template>
    <nav class="flex items-center justify-between gap-1 sm:gap-3 lg:gap-5 border-b border-gray-1 h-16 px-4 sm:h-16">

        <div class="flex items-center gap-1 sm:gap-2.5 lg:gap-5">
            <Logo size="sm" />

            <LineIcon />

            <div class="relative">
                <div class="flex items-center gap-1 lg:gap-1.5 cursor-pointer"
                    @click="active1 = !active1"
                >
                    <HomeIcon class=" sm:ms-1.5"/>
                    <span class="text-xs sm:text-sm lg:text-base text-box-heading font-inter font-medium whitespace-nowrap">PMS HUB/HOME</span>
                    <ArrowDownIcon />
                </div>
                <SubMenu 
                    :options="['Option1', 'Option2', 'Option3']"
                    :isActive=active1
                />
            </div>

        </div>


        <div class="flex items-center gap-1.5 sm:gap-3 lg:gap-5">
            <SearchInputField
                id="nav-search"
                placeholder="Search anything"
            />
            
            <span>
                <LineIcon  class=" hidden sm:block"/>
            </span>

            <div class="flex items-center gap-1.5 sm:gap-2 lg:gap-3 nav-icon">
                <span class="cursor-pointer">
                    <BellIocn />
                </span>
                <span class="cursor-pointer">
                    <QuestionIocn />
                </span>
                <span class="cursor-pointer nav-icon">
                    <SettingIocn />
                </span>
            </div>
            
            <span class="nav-icon">
                <LineIcon />
            </span>

            <span class="cursor-pointer nav-icon">
                <MenuIcon />
            </span>

            <div class="relative">
                <img 
                    id="user-image"
                    class="w-7 h-7 sm:w-8 sm:h-8 rounded-full cursor-pointer" 
                    src="../../assets/image/avatar-image.jpg"
                    alt="user"
                    @click="active = !active"
                >
                <SubMenu 
                    :options="['Option 1', 'Option 2', 'Logout']"
                    :isActive=active
                    @selectedValue="selectedValue"
                />
            </div>
        </div>
    </nav>
</template>
<style scoped>
nav ul li {
    cursor: pointer;
}

@media (max-width: 480px) {
    .nav-icon {
        display: none;
    }
}
</style>
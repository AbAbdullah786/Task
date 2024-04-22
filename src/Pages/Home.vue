<script setup>
import Navbar from '../components/Navbar/Navbar.vue';
import TotalInfoCard from "@/components/Home/TotalInfoCard.vue";
import ArrowUpIcon from '@/components/Icons/ArrowUpIcon.vue';
import ArrowDownIcon from '@/components/Icons/ArrowDownIcon.vue';
import CreateDownIcon from '@/components/Icons/CreateDownIcon.vue';
import UserIcon from "@/components/Icons/UserIcon.vue";
import UserIcon1 from "@/components/Icons/UserIcon1.vue";
import FilterIcon from "@/components/Icons/FIlterIcon.vue";
import PlusIcon from "@/components/Icons/PlusIcon.vue";
import SubMenu from "@/components/Menu/SubMenu.vue";

import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
console.log(store)
const active = ref(false);

const selectedValue = (value) => {
    active.value = false;
}
</script>
<template>
    <div class="min-h-screen flex flex-col">
        <Navbar />

        <div class="m-4">

            <div class="border border-gray-1 rounded-xl mb-5">

                <div class="grid-card">
                    
                    <div class="grid-item border-dashed border-gray-1 m-4">
                        <TotalInfoCard 
                            headign="Total Project"
                            number="2"
                            :total="store.projects"
                            :icon="ArrowUpIcon"
                        />
                    </div>
                    
                    <div class=" grid-item border-dashed border-gray-1 m-4">
                        <TotalInfoCard 
                            headign="Total Tasks"
                            number="4"
                            :total="store.tasks"
                            :icon="ArrowUpIcon"
                        />
                    </div>

                    <div class=" grid-item border-dashed border-gray-1 m-4">
                        <TotalInfoCard 
                            headign="Assigned Tasks"
                            number="3"
                            :total="store.assignedTasks"
                            :icon="CreateDownIcon"
                        />
                    </div>

                    <div class="grid-item border-dashed border-gray-1 m-4">
                        <TotalInfoCard 
                            headign="Completed Tasks"
                            number="1"
                            :total="store.comTasks"
                            :icon="ArrowUpIcon"
                        />
                    </div>

                    <div class="m-4">
                        <TotalInfoCard 
                            headign="Overdue Tasks"
                            number="2"
                            :total="store.overdueTasks"
                            :icon="CreateDownIcon"
                        />
                    </div>
                    
                </div>
            </div>

            <div class="border border-gray-1 rounded-lg p-3">

                <div class="flex items-center justify-between flex-wrap gap-3 border-b border-dashed border-gray-2 pb-3 mb-3">

                    <div class="font-inter font-medium flex items-center gap-1.5 sm:gap-2 lg:gap-5">
                        <div class="flex items-center gap-1 sm:gap-3 text-sm text-white">
                            <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green flex items-center justify-center relative z-10">AD</span>
                            <UserIcon  class=" -ml-5"/>

                            <UserIcon1 />
                        </div>
    
                        <div class="flex items-center res-list gap-1 sm:gap-3">
                            <div class="flex items-center gap-1 cursor-pointer relative">
                                <span class="text-xs sm:text-sm text-box-heading whitespace-nowrap">Status catagory</span>
                                <ArrowDownIcon />
                            </div>
        
                            <div class="flex items-center gap-1 cursor-pointer">
                                <span class="text-xs sm:text-sm text-box-heading whitespace-nowrap">Workspaces</span>
                                <ArrowDownIcon />
                            </div>
        
                            <div class="flex items-center gap-1 cursor-pointer">
                                <span class="text-xs sm:text-sm text-box-heading whitespace-nowrap">Quick filter</span>
                                <ArrowDownIcon />
                            </div>
                        </div>
    
                    </div>

                    <div class="relative">
                        <div class="flex items-center gap-1 sm:gap-1.5 bg-gray rounded-lg px-2 py-1 cursor-pointer"
                            @click="active = !active"
                        >
                            <FilterIcon />
                            <span class="text-sm sm:text-base font-inter font-medium text-box-heading whitespace-nowrap">View settings</span>
                        </div>
                        <SubMenu 
                            :options="['Option1', 'Option2', 'Option3']"
                            :isActive=active
                            @selectedValue="selectedValue"
                        />
                    </div>

                </div>

                <div class="">
                    <table class="w-full border-collapse border border-gray-1 rounded-lg font-poppins">
                      <!-- First row with 4 columns -->
                      <thead class="bg-card h-11 md:h-14 text-base font-medium text-box-heading">
                        <td class=" border border-gray-1 w-1/2 sm:w-2/5 md:w-30%"></td>
                        <td class="border border-gray-1 text-center text-sm sm:text-base">JAN</td>
                        <td class="border border-gray-1 text-center text-sm sm:text-base">FEB</td>
                        <td class="border border-gray-1 text-center text-sm sm:text-base">MAR</td>
                      </thead>
                      
                      <tbody>
                        <tr class="bg-white ">
                            <td class="border border-gray-1 px-3 py-1 sm:py-2">
                                
                                <div class="flex items-center justify-between flex-wrap gap-1.5 sm:gap-3">

                                    <div class="flex items-center gap-0.5 sm:gap-2">
                                        <PlusIcon />
                                        <span class="text-xs sm:text-sm md:text-base text-black1 whitespace-nowrap font-medium">My Hive</span>
                                    </div>
                                    <div class="flex items-center">
                                        <img src="../assets/image/avatar-image.jpg" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full" alt="img">
                                        <img src="../assets/image/avatar-image.jpg" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full -ml-2 sm:-ml-2.5" alt="img">
                                        <img src="../assets/image/avatar-image.jpg" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full -ml-2 sm:-ml-2.5" alt="img">
                                    </div>

                                </div>
                            </td> 
                            <td colspan="3" class="border border-gray-1 px-3 py-1 sm:py-2">
                                <div class="flex">
                                  <div class="rounded-md bg-primary h-7 py-1 ml-25% mr-20%" style="width: 80%;"></div>
                                </div>
                            </td>
                        </tr>
                        <tr class="bg-white">
                            <td class="border border-gray-1 px-3 py-1 sm:py-2">
                                
                                <div class="flex items-center justify-between flex-wrap gap-1.5 sm:gap-3">

                                    <div class="flex items-center gap-0.5 sm:gap-2">
                                        <PlusIcon />
                                        <span class="text-xs sm:text-sm md:text-base text-black1 whitespace-nowrap font-medium">My Hive</span>
                                    </div>
                                    <div class="flex items-center">
                                        <img src="../assets/image/avatar-image.jpg" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full" alt="img">
                                        <img src="../assets/image/avatar-image.jpg" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full -ml-2 sm:-ml-2.5" alt="img">
                                        <img src="../assets/image/avatar-image.jpg" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full -ml-2 sm:-ml-2.5" alt="img">
                                    </div>

                                </div>
                            </td> 
                            <td colspan="3" class="border border-gray-1 px-3 py-1 sm:py-2">
                                <div class="flex">
                                  <div class="rounded-md bg-primary h-7 py-1 ml-50% mr-30%" style="width: 80%;"></div>
                                </div>
                            </td>
                        </tr>
                        <tr class="bg-white">
                            <td class="border border-gray-1 px-3 py-1 sm:py-2">
                                
                                <div class="flex items-center justify-between flex-wrap gap-1.5 sm:gap-3">

                                    <div class="flex items-center gap-0.5 sm:gap-2">
                                        <PlusIcon />
                                        <span class="text-xs sm:text-sm md:text-base text-black1 whitespace-nowrap font-medium">My Hive</span>
                                    </div>
                                    <div class="flex items-center">
                                        <img src="../assets/image/avatar-image.jpg" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full" alt="img">
                                        <img src="../assets/image/avatar-image.jpg" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full -ml-2 sm:-ml-2.5" alt="img">
                                        <img src="../assets/image/avatar-image.jpg" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full -ml-2 sm:-ml-2.5" alt="img">
                                    </div>

                                </div>
                            </td> 
                            <td colspan="3" class="border border-gray-1 px-3 py-1 sm:py-2">
                                <div class="flex">
                                  <div class="rounded-md bg-primary h-7 py-1 ml-25% mr-40%" style="width: 80%;"></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                  </div>
                        
                
            </div>

        </div>

    </div>
</template>

<style scoped>
.grid-card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    row-gap: 1rem;
    column-gap: 1.5rem;
}
.grid-item {
    border-right: 1px dashed rgba(212, 225, 228, 1);
    margin-right: 0;
}
@media (max-width: 436px) {
    .res-list {
        display: none;
    }
    .grid-card .flex-col {
        align-items: center;
    }
    .grid-item {
        border-right: 0px;
        margin-right: 16px;
        padding-bottom: 10px;
        border-bottom: 1px dashed rgba(212, 225, 228, 1);
    }
}
</style>
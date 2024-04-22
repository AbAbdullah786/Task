<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(['checkValidity'])

const handleInput = (value) => {
  if (value.includes('@')) {
    emits('checkValidity', true);
  }
  else {
    emits('checkValidity', false);
  }
}
</script>

<template>
  <div class="w-full max-w-96 sm:max-w-108 mb-5">

    <label
      v-if="label"
      class="text-sm sm:text-base font-normal text-box-heading text-uppercase block"
      :for="id"
    >
      {{ label }}
    </label>

    <div class="relative">
      <input
        class="border border-gray-1 focus:outline-none rounded-lg text-gray-1 placeholder:text-gray-1 text-sm sm:text-base font-normal p-2 md:px-4 md:py-3 w-full"
        :type="type"
        :id="id"
        :placeholder="placeholder"
        :value="modelValue"
        @input="handleInput($event.target.value)"
      />
    </div>
    
  </div>
</template>
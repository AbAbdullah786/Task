<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text"
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(['update:modelValue']);
</script>
<template>
  <input 
    class="border border-gray-1 rounded-lg w-12 h-12 sm:w-16 sm:h-16 text-center focus:outline-none"
    :id="id"
    :type="type"
    :value="modelValue"
    maxlength="1"
    :autofocus="autofocus"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<style scoped>
input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
</style>
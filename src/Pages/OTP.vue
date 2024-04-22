<script setup>
import { ref } from "vue";
import Logo from "@/components/Logo.vue";
import Title from "@/components/Title.vue";
import OtpInputField from "@/components/Fields/OtpInputField.vue";
import SubmitBtn from "@/components/Buttons/SubmitBtn.vue";
import Footer from "@/components/Footer/Footer.vue";
import router from "@/router";

const input1 = ref("");
const input2 = ref("");
const input3 = ref("");
const input4 = ref("");
const input5 = ref("");
const isValid = ref(false);
const msg = ref(false);

const focusNextInput = (inputRef) => {
  const currentInputIndex = inputRef.split("input")[1];
  const nextInputIndex = parseInt(currentInputIndex) + 1;
  const nextInput = document.getElementById(`input${nextInputIndex}`);
  if (nextInput) {
    nextInput.focus();
  } else {
    isValid.value = true;
  }
};

function formSumbit() {
  router.push("/home");
}
</script>
<template>
  <div class="flex flex-col items-center min-h-screen mx-5">
    <div class="mt-6">
      <Logo />
    </div>

    <div
      class="mt-4 sm:mt-12 w-full max-w-96 sm:max-w-128 font-poppins flex flex-col items-center"
    >
      <Title
        heading="Check your email for a code"
        subHeading="We've sent a 6-character code to john_brown@company.com
                The code expires shortly, so please enter it soon."
      />

      <form class="mt-12" @submit.prevent="formSumbit">
        <div class="flex justify-between gap-2 sm:gap-3 mb-5">
          <OtpInputField
            id="input1"
            v-model="input1"
            type="number"
            :autofocus="true"
            @input="
              () => {
                if (input1.length === 1) focusNextInput('input1');
              }
            "
          />
          <OtpInputField
            id="input2"
            v-model="input2"
            type="number"
            @input="
              () => {
                if (input2.length === 1) focusNextInput('input2');
              }
            "
          />
          <OtpInputField
            id="input3"
            v-model="input3"
            type="number"
            @input="
              () => {
                if (input3.length === 1) focusNextInput('input3');
              }
            "
          />
          <OtpInputField
            id="input4"
            v-model="input4"
            type="number"
            @input="
              () => {
                if (input4.length === 1) focusNextInput('input4');
              }
            "
          />
          <OtpInputField
            id="input5"
            v-model="input5"
            @input="
              () => {
                if (input5.length === 1) focusNextInput('input5');
              }
            "
          />
        </div>

        <SubmitBtn text="Contue" :valid="isValid" />

        <div class="text-sm sm:text-base font-normal text-box-heading">
          <p class="text-center">
            Didn't get and SMS?
            <span 
              class="font-medium text-primary cursor-pointer"
              @click="msg = true"
            >
              Send again</span
            >
          </p>

          <p v-if="msg" class="text-center mt-2 text-primary">
            We've sent a code to your email
          </p>

          <p class="text-center my-4 sm:my-6">
            Can't find your code? Check your spam folder!
          </p>
        </div>
      </form>
    </div>

    <Footer />
  </div>
</template>

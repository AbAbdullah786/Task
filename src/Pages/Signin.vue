<script setup>
import Logo from '@/components/Logo.vue';
import Title from '@/components/Title.vue';
import LoginButton from '@/components/Buttons/LoginButton.vue';
import GoogleIcon from '@/components/Icons/GoogleIcon.vue'
import AppleIcon from '@/components/Icons/AppleIcon.vue'
import FormInputField from '@/components/Fields/FormInputField.vue';
import SubmitBtn from '@/components/Buttons/SubmitBtn.vue';
import Footer from '@/components/Footer/Footer.vue';

import { ref } from 'vue';
import router from '@/router';

const email = ref('');
const valid = ref(false);

function submitForm() {
    router.push('/otp');
}
</script>
<template>
    <div class="flex flex-col items-center min-h-screen mx-5">

        <div class="mt-6">
            <Logo />
        </div>

        <div class="mt-4 sm:mt-12 w-full sm:max-w-128 font-poppins">
            
            <Title 
                heading="Hi, Welcome Back to Streamed!"
                subHeading="We suggest using the email address that you use at work."
            />

            <form 
                class="mt-6 sm:mt-10 flex flex-col items-center"
                @submit.prevent="submitForm"
            >

                <LoginButton 
                    text="Continue with Google"
                    :icon="GoogleIcon"
                />

                <LoginButton 
                    text="Continue with Apple"
                    :icon="AppleIcon"
                />

                <div class="w-full max-w-96 sm:max-w-108 mt-1 mb-5 flex items-center justify-center">
                    <div class="border-b border-gray-1 w-full"></div>
                    <span class="text-sm sm:text-base text-box-heading px-2 sm:px-4">OR</span>
                    <div class="border-b border-gray-1 w-full"></div>
                </div>

                <FormInputField
                    id="email"
                    type="email"
                    placeholder="e.g. john_brown@company.com"
                    v-model="email"
                    label="Your Email"
                    @checkValidity="(n) => valid = n"
                />

                <SubmitBtn 
                    text="Continue"
                    :valid="valid"
                />

                <div class="bg-card rounded-lg w-full max-w-96 sm:max-w-108 p-3 text-sm sm:text-base text-box-heading font-normal leading-5 mb-10 text-center">
                    We'll email you a magic code for a password-free
                    sign-in. Or you can
                    <span class="text-primary font-medium cursor-pointer">sign in manually instead</span>.
                </div>

            </form>

        </div>
        
    </div>
    <Footer />
</template>
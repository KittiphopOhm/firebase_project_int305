<script setup>
import { ref } from 'vue';

const emits = defineEmits(['submitForm'])
const isShowPassword = ref(false)
const user = ref({
    username:'',
    email:'',
    password:''
})
</script>

<template>
    <div class="w-full h-screen">
        <div class="w-full h-full flex justify-center items-center p-80">
            <div class="w-full h-full flex flex-col justify-center items-center rounded-2xl space-y-10">
                <div class="m-10">
                    <h1 class="text-[50px] tracking-widest">Login</h1>
                </div>
                <div class="w-full flex flex-col justify-center items-center space-y-5">
                    <div class="w-full">
                        <input v-model="user.username" type="text" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Username">
                    </div>
                    <div class="w-full">
                        <input v-model="user.email" type="email" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Email">
                    </div>
                    <div class="relative w-full">
                        <input v-model="user.password" :type="isShowPassword ? 'text' : 'password'" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Password">
                        <div v-if="isShowPassword" @click="isShowPassword = !isShowPassword" class="cursor-pointer">
                            <svg class="absolute top-4 right-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" d="M12 9.005a4 4 0 1 1 0 8a4 4 0 0 1 0-8Zm0 1.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5ZM12 5.5c4.613 0 8.596 3.15 9.701 7.564a.75.75 0 1 1-1.455.365a8.504 8.504 0 0 0-16.493.004a.75.75 0 0 1-1.456-.363A10.003 10.003 0 0 1 12 5.5Z"/></svg>
                        </div>
                        <div v-if="!isShowPassword" @click="isShowPassword = !isShowPassword" class="cursor-pointer">
                            <svg class="absolute top-4 right-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 16a5 5 0 0 1-5 5m-5-5a5 5 0 0 1 5-5m-3 13.654A13.38 13.38 0 0 0 16 25c7.18 0 13-6 13-9c0-1.336-1.155-3.268-3.071-5M19.5 7.47A13.49 13.49 0 0 0 16 7C8.82 7 3 13 3 16c0 1.32 1.127 3.22 3 4.935M7 25L25 7"/></svg>
                        </div>
                    </div>
                </div>
                <div class="w-full flex flex-col justify-center items-center space-y-3">
                    <div class="w-full bg-blue-300 p-3 rounded-lg cursor-pointer text-center">
                        <button @click="$emit('submitForm', user)" class="cursor-pointer">Save</button>
                    </div>
                    <router-link :to="{name: 'Home'}" class="w-full bg-gray-300 p-3 rounded-lg cursor-pointer text-center">
                        <button class="cursor-pointer">Cancel</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
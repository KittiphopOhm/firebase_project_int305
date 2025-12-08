<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const brand = computed(() => route.params.brand)
</script>

<template>
    <div class="w-full h-full space-y-5">
        <div class="w-full h-[90vh]">
            <div class="w-full h-full">
                <div class="relative w-full h-full">
                    <img 
                        class="w-full h-full object-cover object-center" 
                        src="https://www.apple.com/v/airpods-max/j/images/overview/bento/midnight/bento_1_airpod_max_midnight__4jy1tkqh9qay_xlarge.jpg" 
                        alt="AirPods Max"
                    >
                    <div class="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-12">
                        <button class="py-2 px-6 sm:py-2.5 sm:px-8 md:py-3 md:px-10 lg:py-3 lg:px-12 xl:px-15 bg-blue-400 hover:bg-blue-500 transition-colors rounded-full text-sm sm:text-base font-semibold cursor-pointer shadow-lg">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full h-screen p-10">
            <div class="w-full h-full">
                <div>
                    <h1 class="text-[50px] font-semibold">{{ brand }}</h1>
                </div>
            </div>
        </div>

    </div>
</template>
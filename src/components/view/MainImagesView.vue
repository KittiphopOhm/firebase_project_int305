<script setup>
</script>

<template>
    <div class="w-full h-[95vh] overflow-hidden">
        <div class="w-full h-full">
            <div class="relative w-full h-full flex justify-center items-center border-0">
                <video autoplay muted loop playsinline class="w-full h-full object-cover border-0">
                    <source
                        src="https://www.apple.com/105/media/us/airpods-max/2024/e8f376d6-82b2-40ca-8a22-5f87de755d6b/anim/max-loop/large.mp4"
                        type="video/mp4" />
                </video>
                <router-link :to="{ name: 'Payment', params: { id: 'jvDI8fn3YOYpY4UnwH61' } }" class="absolute 
                 bottom-4 right-4 
                 sm:bottom-6 sm:right-6 
                 md:bottom-8 md:right-8 
                 lg:bottom-10 lg:right-12">
                    <button
                        class="py-2 px-6 sm:py-2.5 sm:px-8 md:py-3 md:px-10 text-white bg-blue-400 hover:bg-blue-500transition-colors rounded-full text-sm sm:text-base md:text-lg font-semibold cursor-pointer shadow-lg">Buy</button>
                </router-link>
                <div class="absolute 
                 left-4 bottom-24
                 sm:left-8 sm:bottom-32
                 md:left-12 md:bottom-36
                 lg:left-16 lg:bottom-40
                 bg-none">

                    <p class="font-semibold text-blue-500 
                    text-sm sm:text-base md:text-lg">
                        New
                    </p>

                    <h1 class="font-bold 
                     text-[32px] 
                     sm:text-[42px] 
                     md:text-[55px] 
                     lg:text-[60px] 
                     text-gray-800 leading-tight">
                        Apple AirPods Max
                    </h1>

                    <p class="text-[16px] 
                    sm:text-[20px] 
                    md:text-[24px] 
                    lg:text-[25px] 
                    text-gray-800">
                        High-fidelity audio with industry-leading ANC.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

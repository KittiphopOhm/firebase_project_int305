<script setup>
</script>

<template>
    <div class="w-full h-[90vh] overflow-hidden">
        <div class="w-full h-full">
            <div class="relative w-full h-full flex justify-center items-center">
                <video
                    autoplay
                    muted
                    loop
                    playsinline
                    class="w-full h-full object-cover">
                    <source src="https://www.apple.com/105/media/us/airpods-max/2024/e8f376d6-82b2-40ca-8a22-5f87de755d6b/anim/max-loop/large.mp4" type="video/mp4">
                </video>

                <div class="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-12">
                    <button class="py-2 px-6 sm:py-2.5 sm:px-8 md:py-3 md:px-10 bg-blue-400 hover:bg-blue-500 transition-colors rounded-full text-sm sm:text-base font-semibold cursor-pointer shadow-lg">
                    Buy
                    </button>
                </div>

                <div class="absolute bottom-30 left-30">
                    <p class="font-semibold text-blue-500">New</p>
                    <h1 class="font-bold text-[60px] text-gray-800">Apple AirPods Max</h1>
                    <p class="text-[25px] text-gray-800">High-fidelity audio with industry-leading ANC.</p>
                </div>

            </div>
        </div>
    </div>
</template>
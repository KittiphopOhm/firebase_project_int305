<script setup>
import { ref } from 'vue'

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const selectedImage = ref(0)
</script>

<template>
    <div class="relative flex justify-center items-center h-full bg-white mt-5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <div class="order-1">
                    <div class="rounded-3xl p-8 sm:p-12 lg:p-16 mb-6 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                        <img 
                            :src="product?.images?.[selectedImage]" 
                            :alt="product.model"
                            class="w-full h-auto object-contain max-h-[400px] lg:max-h-[500px]">
                    </div>
                    <div class="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
                        <button
                            v-for="(image, index) in product?.images" 
                            :key="index"
                            @click="selectedImage = index"
                            class="rounded-2xl p-3 sm:p-4 transition-all duration-200 border cursor-pointer"
                            :class="selectedImage === index ? 'border-gray-200' : 'border-transparent'">
                            <img 
                                :src="image" 
                                alt="product"
                                class="w-full h-auto object-contain"
                            >
                        </button>
                    </div>
                </div>

                <div class="w-full h-full flex flex-col justify-center order-2 lg:sticky lg:top-8">
                    <div class="mb-8">
                        <router-link :to="{name: 'ProductListBrand', params: {brand: product.brand}}" class="font-semibold my-1 text-2xl">
                            {{ product.brand }}
                        </router-link>
                        <p class="text-3xl sm:text-6xl font-semibold text-gray-900 mb-2">
                            {{ product.model }}
                        </p>
                        <p class="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
                            ${{ product?.price?.toFixed(2) }}
                        </p>
                        <p class="text-sm sm:text-base text-gray-500">
                            {{ `In stock (${product.stock} available)` }}
                        </p>
                    </div>

                    <div class="space-y-6 sm:space-y-8">
                        <div class="pb-6 sm:pb-8 border-b border-gray-200">
                            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {{ product.title }}
                            </p>
                        </div>

                        <div class="pt-2">
                            <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Delivery & Returns</h2>
                            <div class="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600">
                                <p class="flex items-start">
                                    <svg class="w-5 h-5 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                                    </svg>
                                    Free delivery on orders over ฿1,000
                                </p>
                                <p class="flex items-start">
                                    <svg class="w-5 h-5 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                    </svg>
                                    14-day return policy
                                </p>
                                <p class="flex items-start">
                                    <svg class="w-5 h-5 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                    1-year warranty included
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-3 sm:space-y-4 mt-10 sm:mb-12">
                        <button class="w-full bg-blue-400 text-white py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg hover:bg-blue-700 transition-colors duration-200">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
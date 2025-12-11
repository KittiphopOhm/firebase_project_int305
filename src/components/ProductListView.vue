<script setup>
import { watch } from 'vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
});
const emits = defineEmits(['filter']);

const route = useRoute();
const brand = computed(() => route.params.brand);
const categories = ref([]);

watch(brand, () => {
    categories.value = [];
});

const resetFilter = () => {
    categories.value = [];
    emits('filter', []);
};
</script>

<template>
    <div class="w-full h-full space-y-5 bg-gray-50">
        <div class="w-full h-full p-4 sm:p-6 md:p-10">
            <div class="w-full h-full">
                
                <!-- Title -->
                <div class="mb-5">
                    <h1 class="text-[32px] sm:text-[40px] md:text-[50px] font-semibold">
                        {{ !brand ? "Products" : brand }}
                    </h1>
                </div>

                <!-- Filter -->
                <form class="mb-5 flex flex-wrap gap-2">
                    <input v-model="categories" @change="$emit('filter', categories)" 
                        value="Headphones" type="checkbox"
                        class="btn checked:bg-blue-400 checked:border-blue-400"
                        aria-label="Headphones"/>

                    <input v-model="categories" @change="$emit('filter', categories)" 
                        value="Gaming Headset" type="checkbox"
                        class="btn checked:bg-blue-400 checked:border-blue-400"
                        aria-label="Gaming Headset"/>

                    <input v-model="categories" @change="$emit('filter', categories)" 
                        value="Earbuds" type="checkbox"
                        class="btn checked:bg-blue-400 checked:border-blue-400"
                        aria-label="Earbuds"/>

                    <input v-model="categories" @change="$emit('filter', categories)" 
                        value="Speaker" type="checkbox"
                        class="btn checked:bg-blue-400 checked:border-blue-400"
                        aria-label="Speaker"/>

                    <input @click="resetFilter"
                        class="btn btn-square checked:bg-blue-400 checked:border-blue-400"
                        type="reset" value="×"/>
                </form>

                <!-- Product List -->
                <div class="w-full h-full flex flex-col justify-center items-center">

                    <div v-if="products.length <= 0">
                        <h1 class="text-[32px] sm:text-[40px] md:text-[50px] m-3 text-gray-400">
                            No Products
                        </h1>
                    </div>

                    <div
                        class="w-full grid 
                               grid-cols-1 
                               sm:grid-cols-2 
                               lg:grid-cols-3 
                               gap-y-10 sm:gap-y-16 md:gap-y-20 
                               gap-x-5 sm:gap-x-8 md:gap-x-10">

                        <router-link
                            v-for="product in products"
                            :key="product.id"
                            :to="{ name: 'ProductDetail', params: { brand: product.brand, id: product.id } }">

                            <div class="relative w-full h-[420px] sm:h-[460px] md:h-[500px]
                                        flex flex-col justify-center items-center
                                        bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">

                                <div class="m-1">
                                    <img :src="product.images[0]" alt="product"
                                        class="w-[200px] sm:w-[250px] md:w-[300px]" />
                                </div>

                                <div>
                                    <h1 class="text-[20px] sm:text-[24px] md:text-[30px] font-semibold">
                                        {{ product.model }}
                                    </h1>
                                </div>

                                <div class="w-full text-center">
                                    <p class="text-[12px] sm:text-[13px] md:text-[14px]">
                                        {{ product.title }}
                                    </p>
                                </div>

                                <div class="absolute top-4 sm:top-5 md:top-6 left-6">
                                    <p class="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                                        {{ product.brand }}
                                    </p>
                                </div>

                                <div class="absolute top-4 sm:top-5 md:top-6 right-6
                                            flex justify-center items-center text-center">
                                    <p class="w-full h-full font-semibold text-yellow-500">
                                        {{ product.rating.toFixed(1) }}
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                        viewBox="0 0 36 36">
                                        <path fill="#FFAC33"
                                          d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"/>
                                    </svg>
                                </div>

                                <div>
                                    <p class="font-semibold text-[18px] sm:text-[19px] md:text-[20px]">
                                        ${{ product.price.toFixed(2) }}
                                    </p>
                                </div>
                            </div>
                        </router-link>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

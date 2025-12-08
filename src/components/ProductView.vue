<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
})
const emits = defineEmits(['filter'])
const route = useRoute()
const brand = computed(() => route.params.brand)
const categories = ref([])
const resetFilter = () => {
  categories.value = []
  emits('filter', [])
}

</script>

<template>
    <div class="w-full h-full space-y-5 bg-gray-100">
        <div class="w-full h-full p-10">
            <div class="w-full h-full">
                <div>
                    <h1 class="text-[50px] font-semibold">{{ !brand ? "Products" : brand }}</h1>
                </div>
                <form class="mb-5">
                    <input v-model="categories" @change="$emit('filter', categories)" value="Headphones" class="btn checked:bg-blue-400 checked:border-blue-400" type="checkbox" name="frameworks" aria-label="Headphones"/>
                    <input v-model="categories" @change="$emit('filter', categories)" value="Gaming Headset" class="btn  ml-1 checked:bg-blue-400 checked:border-blue-400" type="checkbox" name="frameworks" aria-label="Gaming Headset"/>
                    <input v-model="categories" @change="$emit('filter', categories)" value="Earbuds" class="btn  ml-1 checked:bg-blue-400 checked:border-blue-400" type="checkbox" name="frameworks" aria-label="Earbuds"/>
                    <input v-model="categories" @change="$emit('filter', categories)" value="Speaker" class="btn  ml-1 checked:bg-blue-400 checked:border-blue-400" type="checkbox" name="frameworks" aria-label="Speaker"/>
                    <input @click="resetFilter" class="btn btn-square  ml-1 checked:bg-blue-400 checked:border-blue-400" type="reset" value="×"/>
                </form>

                <div class="w-full h-full">
                    <div class="w-full h-full flex flex-col justify-center items-center">
                        <div v-if="products.length <= 0">
                            <h1 class="text-[50px] m-3 text-gray-400">No Products</h1>
                        </div>
                        <div class="w-full h-full grid grid-cols-3 gap-y-20 gap-x-10">
                            <div v-for="product in products" :key="product.id">
                                <div class="relative w-full h-[500px] flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl p-10">
                                    <div class="m-1">
                                        <img :src="product.images[0]" alt="product" width="300" height="300">
                                    </div>
                                    <div>
                                        <h1 class="text-[30px] font-semibold">{{ product.model }}</h1>
                                    </div>
                                    <div class="w-full h-full text-center">
                                        <p class="text-[14px]">{{ product.title }}</p>
                                    </div>
                                    <div class="absolute top-6 left-10">
                                        <p class="text-[20px] font-semibold">{{ product.brand }}</p>
                                    </div>
                                    <div class="absolute top-6 right-10 flex justify-center items-center text-center">
                                        <p class="w-full h-full font-semibold text-yellow-500">{{ product.rating.toFixed(1) }}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 36 36"><path fill="#FFAC33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"/></svg>
                                    </div>
                                    <div>
                                        <p class="font-semibold text-[20px]">${{ product.price.toFixed(2) }}</p>
                                    </div>
                                    <div class="absolute bottom-10 right-10">
                                        <button class="w-6 h-6 bg-blue-400 rounded-full font-semibold">></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
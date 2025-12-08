<script setup>

const props = defineProps({
    brands: {
        type: Array,
        required: true
    }
})

</script>

<template>
    <div class="w-full h-full">
        <div class="w-full bg-gray-200 p-3 fixed top-0 left-0 z-50 shadow">
            <div class="w-full flex justify-center items-center gap-x-6">
                <router-link :to="{ name: 'ProductList' }">
                    <p class="font-semibold">Headphone Shop</p>
                </router-link>

                <div v-for="(brand, index) in brands" :key="index">
                    <router-link :to="{ name: 'ProductListBrand', params: { brand: brand.name } }">
                        <button class="cursor-pointer">{{ brand.name }}</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="pt-15">
            <slot />
        </div>
    </div>

</template>
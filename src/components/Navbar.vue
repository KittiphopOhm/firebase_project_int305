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
        <div class="w-full h-full bg-gray-300 p-5">
            <div class="w-full h-full flex justify-center items-center gap-x-6">
                <router-link :to="{name: 'ProductList'}">
                    <p class="font-semibold">Headphone Shop</p>
                </router-link>
                <div v-for="(brand, index) in brands" :key="index">
                    <router-link :to="{name: 'ProductListBrand', params: {brand: brand.name}}">
                        <button class="cursor-pointer">{{ brand.name }}</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
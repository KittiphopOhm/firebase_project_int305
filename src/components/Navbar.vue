<script setup>
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import db from '../../firebase/init'

const brands = ref([])
const fetchBrnads = () => {
    const brandColl = collection(db, "brands")
    const qry = query(brandColl, orderBy("name", "asc"))
    onSnapshot(qry, (snapshot) => {
        brands.value = []
        snapshot.forEach((doc) => {
            let data = doc.data()
            data.id = doc.id
            brands.value.push(data)
        })
    })
}

onMounted(() => {
    fetchBrnads()
})

</script>

<template>
    <div class="w-full h-full">
        <div class="w-full bg-gray-50 p-3 fixed top-0 left-0 z-50">
            <div class="w-full flex justify-center items-center gap-x-6">
                <router-link :to="{ name: 'ProductList' }">
                    <p class="font-semibold text-[14px]">Headphone Shop</p>
                </router-link>

                <div v-for="(brand, index) in brands" :key="index">
                    <router-link :to="{ name: 'ProductListBrand', params: { brand: brand.name } }">
                        <button class="cursor-pointer text-[14px]">{{ brand.name }}</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="pt-10">
            <slot />
        </div>
    </div>

</template>
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

                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" fill-rule="evenodd" d="M8 7V6a4 4 0 1 1 8 0v1h3c.552 0 1 .449 1 1.007v12.001c0 1.1-.895 1.992-1.994 1.992H5.994A1.994 1.994 0 0 1 4 20.008v-12C4 7.45 4.445 7 5 7zm1.2 0h5.6V6a2.8 2.8 0 0 0-5.6 0zM8 8.2H5.2v11.808c0 .436.356.792.794.792h12.012a.794.794 0 0 0 .794-.792V8.2H16V11h-1.2V8.2H9.2V11H8z"/></svg>
                </button>
                <router-link :to="{name: 'Signup'}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 20 20"><path fill="#000000" d="M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0Z"/></svg>
                </router-link>
            </div>
        </div>
        <div class="pt-10">
            <slot />
        </div>
    </div>

</template>
<script setup>
import ProductView from './ProductView.vue';
import Navbar from './Navbar.vue';
import { onMounted, ref } from 'vue';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import db from '../../firebase/init';

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
    <div>
        <Navbar :brands="brands" />
        <ProductView />
    </div>
</template>
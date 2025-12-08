<script setup>
import ProductView from './ProductView.vue';
import Navbar from './Navbar.vue';
import { onMounted, ref } from 'vue';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import db from '../../firebase/init';
import { useRoute } from 'vue-router';

const route = useRoute()
const products = ref([])
const fetchProducts = () => {
    const productColl = collection(db, "products")
    if (!route.params.brand) {
        const qry = query(productColl, orderBy("brand", "asc"))
        onSnapshot(qry, (snapshot) => {
            products.value = []
            snapshot.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                products.value.push(data)
            })
        })
    }
}



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
    fetchProducts()
})



</script>

<template>
    <div>
        <Navbar :brands="brands" />
        <ProductView :products="products" />
    </div>
</template>
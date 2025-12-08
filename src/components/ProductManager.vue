<script setup>
import ProductView from './ProductView.vue';
import Navbar from './Navbar.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import db from '../../firebase/init';
import { useRoute } from 'vue-router';

const route = useRoute()
const brand = computed(() => route.params.brand)
const products = ref([])
const fetchProducts = () => {
    const productColl = collection(db, "products")
    let qry = null
    if (!route.params.brand) {
        qry = query(productColl, orderBy("brand", "asc"))
    } else {
        qry = query(productColl, where("brand", "==", brand.value))
    }
    onSnapshot(qry, (snapshot) => {
        products.value = []
        snapshot.forEach((doc) => {
            let data = doc.data()
            data.id = doc.id
            products.value.push(data)
        })
    })
}

watch(brand, () => {
    fetchProducts()
})

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

const filterByCategories = (categories) => {
    const productsColl = collection(db, "products")
    if (categories.length > 0 && brand.value) {
        const qry = query(productsColl,where("brand", "==", brand.value), where("category", "in", categories), orderBy("brand", "asc"))
        onSnapshot(qry, (snapshot) => {
            products.value = []
            snapshot.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                products.value.push(data)
            })
        })
    }
    else if (categories.length > 0) {
        const qry = query(productsColl, where("category", "in", categories), orderBy("brand", "asc"))
        onSnapshot(qry, (snapshot) => {
            products.value = []
            snapshot.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                products.value.push(data)
            })
        })
    }
    else {
        fetchProducts()
    }
}

onMounted(() => {
    fetchBrnads()
    fetchProducts()
})



</script>

<template>
    <div>
        <Navbar :brands="brands" />
        <ProductView :products="products" @filter="filterByCategories" />
    </div>
</template>
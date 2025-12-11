<script setup>
import ProductView from './view/ProductListView.vue';
import Navbar from './view/Navbar.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { collection, getCountFromServer, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import db from '../../firebase/init';
import { useRoute } from 'vue-router';
import MainImages from './MainImages.vue';

const route = useRoute()
const brand = computed(() => route.params.brand)
const products = ref([])
const countProduct = ref(0)
const fetchProducts = async () => {
    const productColl = collection(db, "products")
    let qry = null
    if (!route.params.brand) {
        qry = query(productColl, orderBy("brand", "asc"))
    } else {
        qry = query(productColl, where("brand", "==", brand.value))
    }
    const snap = await getCountFromServer(qry)
    countProduct.value = snap.data().count
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

const filterByCategories = async (categories) => {
    const productsColl = collection(db, "products")
    if (categories.length > 0 && brand.value) {
        const qry = query(productsColl, where("brand", "==", brand.value), where("category", "in", categories),
         orderBy("brand", "asc"))
        const snap = await getCountFromServer(qry)
        countProduct.value = snap.data().count
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
        const snap = await getCountFromServer(qry)
        countProduct.value = snap.data().count
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
    fetchProducts()
})
</script>

<template>
    <div>
        <Navbar />
        <MainImages />
        <ProductView :products="products" @filter="filterByCategories" :countProducts="countProduct" />
    </div>
</template>
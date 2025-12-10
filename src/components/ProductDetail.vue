<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import db from '../../firebase/init';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import ProductDetailView from './ProductDetailView.vue';
import Navbar from './Navbar.vue';

const route = useRoute()
const id = route.params.id
const product = ref({})

const fetchProduct = async () => {
    if (id) {
        const productRef = doc(db, "products", id)
        onSnapshot(productRef, (snapshot) => {
            product.value = {}
            let data = snapshot.data()
            data.id = snapshot.id
            product.value = data
        })
    }
}

onMounted(() => {
    fetchProduct()
})


</script>

<template>
    <Navbar />
    <ProductDetailView :product="product" />
</template>
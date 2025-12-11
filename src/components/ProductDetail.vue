<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import db from '../../firebase/init';
import { doc, onSnapshot } from 'firebase/firestore';
import ProductDetailView from './view/ProductDetailView.vue';
import Navbar from './view/Navbar.vue';

const route = useRoute()
const router = useRouter()
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

const toBuy = () => {
    console.log(product.value);
    if (product.value.stock > 0) {
        router.push({ name: 'Payment', params: { id: product.value.id } })
    } else {
        alert(`Out of stock`)
    }
}

onMounted(() => {
    fetchProduct()
})


</script>

<template>
    <Navbar />
    <ProductDetailView :product="product" @toBuyProduct="toBuy" />
</template>
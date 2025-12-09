<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import db from '../../firebase/init';
import { doc, getDoc } from 'firebase/firestore';
import ProductDetailView from './ProductDetailView.vue';
import Navbar from './Navbar.vue';

const route = useRoute()
const id = route.params.id
const product = ref({})

const fetchProduct = async () => {
    if (id) {
        const productRef = doc(db, "products", id)
        const productSnap = await getDoc(productRef)
        let data = productSnap.data()
        data.id = productSnap.id
        product.value = data 
        console.log(product.value);
        
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
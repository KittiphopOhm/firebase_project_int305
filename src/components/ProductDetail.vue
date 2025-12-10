<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import db from '../../firebase/init';
import { doc, onSnapshot } from 'firebase/firestore';
import ProductDetailView from './ProductDetailView.vue';
import Navbar from './Navbar.vue';
import Alert from './Alert.vue';

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

const isShow = ref(false)
const title = ref('')
const isSuccessfully = ref('')
const toBuy = () => {
    console.log(product.value);
    if (product.value.stock > 0) {
        router.push({name: 'Payment', params: {id: product.value.id}})
    } else {
        isShow.value = true
        title.value = 'Out of stock'
        isSuccessfully.value = 'No'
        setTimeout(() => {
            isShow.value = false
            title.value = ''
            isSuccessfully.value = ''
            router.push({name: 'ProductList'})
        }, 1000)
    }
    
}

onMounted(() => {
    fetchProduct()
})


</script>

<template>
    <Navbar />
    <Alert :isShow="isShow" :title="title" :isSuccessfully="isSuccessfully" />
    <ProductDetailView :product="product" @toBuyProduct="toBuy" />
</template>
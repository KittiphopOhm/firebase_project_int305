<script setup>
import { onMounted, ref } from 'vue';
import PaymentView from './PaymentView.vue';
import { useRoute } from 'vue-router';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import db from '../../firebase/init';
import Alert from './Alert.vue';

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
    }
}

const isShow = ref(false)
const title = ref('')
const isSuccessfully = ref('')
const createOrder = async (orderData) => {
    orderData.product = product.value
    const orderColl = collection(db, "orders")
    const addOrder = await addDoc(orderColl, orderData)
    if (addOrder) {
        isShow.value = true
        title.value = 'Your order has been completed successfully.'
        isSuccessfully.value = 'Yes'
        setTimeout(() => {
            isShow.value = false
            title.value = ''
            isSuccessfully.value = ''
        }, 2000)
    } else {
        isShow.value = true
        title.value = 'Your order could not be completed.'
        isSuccessfully.value = 'No'
        setTimeout(() => {
            isShow.value = false
            title.value = ''
            isSuccessfully.value = ''
        }, 2000)
    }
}

onMounted(() => {
    fetchProduct()
})



</script>

<template>
    <Alert :isShow="isShow" :title="title" :isSuccessfully="isSuccessfully" />
    <PaymentView :product="product" @createOrder="createOrder" />
    
</template>
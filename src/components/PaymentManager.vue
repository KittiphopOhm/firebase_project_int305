<script setup>
import { onMounted, ref } from 'vue';
import PaymentView from './PaymentView.vue';
import { useRoute, useRouter } from 'vue-router';
import { addDoc, collection, doc, getDoc, increment, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore';
import db from '../../firebase/init';
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
            console.log(product.value.id);
            

        })
    }
}

const isShow = ref(false)
const title = ref('')
const isSuccessfully = ref('')
const createOrder = async (orderData) => {
    orderData.product = product.value
    orderData.date = serverTimestamp()
    orderData.status = "Pending"
    const orderColl = collection(db, "orders")
    const addOrder = await addDoc(orderColl, orderData)
    if (addOrder) {
        const productRef = doc(db, "products", product.value.id)
        await updateDoc(productRef, {
            stock: increment(-1)
        })
        isShow.value = true
        title.value = 'Your order has been completed successfully.'
        isSuccessfully.value = 'Yes'
        setTimeout(() => {
            isShow.value = false
            title.value = ''
            isSuccessfully.value = ''
            router.push({name: 'OrderDetail', params: {id: addOrder.id}})
        }, 1000)
    } else {
        isShow.value = true
        title.value = 'Your order could not be completed.'
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
    <Alert :isShow="isShow" :title="title" :isSuccessfully="isSuccessfully" />
    <PaymentView :product="product" @createOrder="createOrder" />
</template>
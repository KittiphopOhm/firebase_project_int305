<script setup>
import OrderDetailView from './view/OrderDetailView.vue';
import Navbar from './view/Navbar.vue';
import { useRoute } from 'vue-router';
import { collection, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import db from '../../firebase/init';
import { onMounted, ref } from 'vue';

const route = useRoute()
const id = route.params.id
const order = ref({})

const fetchOrder = async () => {
    if (id) {
        const orderRef = doc(db, "orders", id)
        onSnapshot(orderRef, (snapshot) => {
            order.value = {}
            let data = snapshot.data()
            data.id = snapshot.id
            order.value = data
        })
    }
}

const changeStatus = async (orderId) => {
    const orderRef = doc(db, "orders", orderId)
    await updateDoc(orderRef, {
        status: "Confirm"
    })
}

onMounted(() => {
    fetchOrder()
})


</script>

<template>
    <Navbar />
    <OrderDetailView :orderDetail="order" @confirmStatus="changeStatus" />
</template>
<script setup>
import OrderDetailView from './OrderDetailView.vue';
import Navbar from './Navbar.vue';
import { useRoute } from 'vue-router';
import { collection, doc, getDoc } from 'firebase/firestore';
import db from '../../firebase/init';
import { onMounted, ref } from 'vue';

const route = useRoute()
const id = route.params.id
const order = ref({})
console.log(id);

const fetchOrder = async () => {
    if (id) {
        const orderRef = doc(db, "orders", id)
        const orderSnap = await getDoc(orderRef)
        let data = orderSnap.data()
        data.id = orderSnap.id
        order.value = data
        console.log(order.value);
        
        
    }
}

onMounted(() => {
    fetchOrder()
})


</script>

<template>
    <Navbar />
    <OrderDetailView :orderDetail="order" />
</template>
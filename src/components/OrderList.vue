<script setup>
import OrderListView from './OrderListView.vue';
import Navbar from './Navbar.vue';
import { collection, onSnapshot, query } from 'firebase/firestore';
import db from '../../firebase/init';
import { onMounted, ref } from 'vue';


const orders = ref([])
const fetchOrders = () => {
    const orderColl = collection(db, "orders")
    const qry = query(orderColl)
    onSnapshot(qry, (snapshot) => {
        orders.value = []
        snapshot.forEach((doc) => {
            let data = doc.data()
            data.id = doc.id
            orders.value.push(data)
            console.log(orders.value);
            
        })

    })
}

onMounted(() => {
    fetchOrders()
})



</script>

<template>
    <Navbar />
    <OrderListView :orders="orders" />
</template>
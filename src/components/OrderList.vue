<script setup>
import OrderListView from './OrderListView.vue';
import Navbar from './Navbar.vue';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import db from '../../firebase/init';
import { onMounted, ref } from 'vue';


const orders = ref([])
const fetchOrders = () => {
    const orderColl = collection(db, "orders")
    const qry = query(orderColl, orderBy("date", "desc"))
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

const filterOrders = (status) => {
    console.log(status);
    
    if (!status.includes("All") && status.length > 0) { 
        const orderColl = collection(db, "orders")
        const qry = query(orderColl, where("status", "==", status))
        onSnapshot(qry, (snapshot) => {
            orders.value = []
            snapshot.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                orders.value.push(data)
            })
        })
    } else {
        fetchOrders()
    }
}

onMounted(() => {
    fetchOrders()
})



</script>

<template>
    <Navbar />
    <OrderListView :orders="orders" @filter-orders="filterOrders" />
</template>
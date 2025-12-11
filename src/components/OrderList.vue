<script setup>
import OrderListView from './OrderListView.vue';
import Navbar from './Navbar.vue';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import db from '../../firebase/init';
import { onMounted, ref } from 'vue';


const orders = ref([])
const email = ref(sessionStorage.getItem("email"))
const fetchOrders = () => {
    const orderColl = collection(db, "orders")
    const qry = query(orderColl, where("email", "==", email.value), orderBy("date", "desc"))
    onSnapshot(qry, (snapshot) => {
        orders.value = []
        snapshot.forEach((doc) => {
            let data = doc.data()
            data.id = doc.id
            orders.value.push(data)
        })
    })
}

const filterOrders = (status) => {
    console.log(status);
    
    if (!status.includes("All") && status.length > 0) { 
        const orderColl = collection(db, "orders")
        const qry = query(orderColl, where("email", "==", email.value), where("status", "==", status))
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
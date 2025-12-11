<script setup>
import OrderListView from './OrderListView.vue';
import Navbar from './Navbar.vue';
import { collection, getCountFromServer, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import db from '../../firebase/init';
import { onMounted, ref } from 'vue';

const orders = ref([])
const email = ref(sessionStorage.getItem("email"))
const countOrder = ref(0)
const fetchOrders = async () => {
    const orderColl = collection(db, "orders")
    const qry = query(orderColl, where("email", "==", email.value), orderBy("date", "desc"))
    const snap = await getCountFromServer(qry)
    countOrder.value = snap.data().count
    onSnapshot(qry, (snapshot) => {
        orders.value = []
        snapshot.forEach((doc) => {
            let data = doc.data()
            data.id = doc.id
            orders.value.push(data)
        })
    })
}

const filterOrders = async (status) => {
    if (!status.includes("All") && status.length > 0) { 
        const orderColl = collection(db, "orders")
        const qry = query(orderColl, where("email", "==", email.value), where("status", "==", status))
        const snap = await getCountFromServer(qry)
        countOrder.value = snap.data().count
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
    <OrderListView :orders="orders" @filter-orders="filterOrders" :countOrders="countOrder" />
</template>
<script setup>
import LoginSignupView from './LoginSignupView.vue';
import db from '../../firebase/init';
import bcrypt from "bcryptjs"
import { addDoc, collection, getDocs, query, serverTimestamp, where } from 'firebase/firestore';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const submit = async (user) => {
    const accColl = collection(db, "accounts")
    const hashPassword = await bcrypt.hash(user.password, 10)
    const qry = query(accColl, where("email", "==", user.email))
    const accSnap = await getDocs(qry)
    if (accSnap.empty) {
        await addDoc(accColl, {
            username: user.username,
            email: user.email,
            password: hashPassword,
            createAt: serverTimestamp()
        })
        router.push({name: 'ProductList'})
    } else {
        return
    }
}

</script>

<template>
    <div>
        <LoginSignupView @submit-form="submit" />
    </div>
</template>
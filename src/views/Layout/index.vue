<template>
    <div>
        <Fixed />
        <Nav></Nav>
        <Header />
        <RouterView />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Nav from './components/LayoutNav.vue'
import Header from './components/LayoutHeader.vue'
import Footer from './components/LayoutFooter.vue'
import Fixed from './components/LayoutFixed.vue'

//导航列表action
import { useStore } from '@/stores/index.js'
import { onMounted } from 'vue'

const categoryStore = useStore()

onMounted(async () => {
    await categoryStore.getCategoryAPI()
})
</script>

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategory } from '@/apis/layout'

export const useStore = defineStore('category', () => {
    let categoryList = ref([])

    const getCategoryAPI = async () => {
        let result = await getCategory()
        categoryList.value = result.result
    }


    return{
        categoryList,
        getCategoryAPI,
    }
})
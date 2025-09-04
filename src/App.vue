<script setup>
import { useUserStore } from './stores/user'
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import { useThemeStore } from './stores/theme'
import isMobile from 'ismobilejs'
const userStore = useUserStore()
const route = useRoute()
const themeStore = useThemeStore()

// 计算属性来判断是否显示 Footer
// const showFooter = computed(() => {
//   // 在 videoPlay 路由下不显示 Footer
//   return !route.path.includes('/videoPlay')
// })

onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
   <router-view></router-view>
</template>

<style scoped>

</style>

<style>


</style>

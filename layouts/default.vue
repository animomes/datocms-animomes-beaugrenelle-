<template>
  <div class="bg-gray-200">
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { mapActions } from 'vuex'
export default {
  components: { Navbar },
  data() {
    return {
      navbarOpen: false
    }
  },
  methods: {
    ...mapActions(['fetchHomePage']),
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen
    }
  },
  async mounted() {
    await this.fetchHomePage()
  }
}
</script>

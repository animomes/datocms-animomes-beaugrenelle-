<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between overflow-hidden"
    >
      <div
        class="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
          to="/"
        >
          <img
            src="./../static/animomes-logo.png"
            alt="logo animomes"
            class="block w-32"
          />
        </router-link>
      </div>

      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <NavItem
            v-for="social in socials"
            :key="social.url"
            :link="social.url"
          >
            <component :is="`icon-${social.label}`" class="h-6 w-6" />
          </NavItem>

          <li class="flex items-center">
            <button
              class=" flex items-center bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
              type="button"
              style="transition: all 0.15s ease 0s;"
            >
              <IconLock class="h-6 w-6" />
              <span class="ml-2">Se connecter</span>
            </button>
          </li>
        </ul>
      </div>
      <div
        class="lg:hidden  items-center justify-end bg-transparent shadow-none flex"
      >
        <IconBurger class="text-white h-6 w-6 cursor-pointer" />
      </div>
    </div>
  </nav>
</template>

<script>
import IconLock from '@/components/base/icons/lock'
import IconBurger from '@/components/base/icons/burger'
import IconFacebook from '@/components/base/icons/facebook'
import IconTwitter from '@/components/base/icons/twitter'
import NavItem from '@/components/base/NavItem'
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  components: { IconBurger, IconLock, IconFacebook, IconTwitter, NavItem },
  computed: {
    ...mapGetters(['socials'])
  }
}
</script>

<style scoped></style>

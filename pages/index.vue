<template>
  <div>
    <section class="hero h-screen" v-if="homepage">
      <Hero :cover="cover">
        <div class="container relative text-white z-20 mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  This is a simple example of a Landing Page you can build using
                  Tailwind Starter Kit. It features multiple CSS components
                  based on the Tailwindcss design system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Hero>
    </section>
  </div>
</template>

<script>
import { request } from '~/lib/datocms'
import { toHead } from 'vue-datocms'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { HOME_PAGE_QUERY } from '@/queries'
import Hero from '~/components/Hero'

export default {
  components: { Hero },
  async asyncData({ params }) {
    const data = await request({
      query: HOME_PAGE_QUERY
    })

    return { ready: !!data, ...data }
  },
  computed: {
    cover() {
      return this.homepage.cover.responsiveImage.src
    }
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'PPP')
    }
  },
  head() {
    if (!this.ready) {
      return
    }

    return toHead(this.site.favicon)
  }
}
</script>

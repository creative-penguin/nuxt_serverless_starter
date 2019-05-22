<template>
   <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
         <a class="navbar-item" href="/">
            Site Name
         </a>

         <a
            role="button"
            class="navbar-burger burger"
            :class="{ 'is-active': isMobileMenuOpen }"
            aria-label="menu"
            aria-expanded="false"
            @click="toggleMobileMenu">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
         </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isMobileMenuOpen }">
         <div class="navbar-end">
            <a
               v-for="page in pages"
               :key="page.title"
               class="navbar-item"
               :href="page.to">
               {{ page.title }}
            </a>
         </div>
      </div>
   </nav>
</template>

<script>
export default {
   name: 'NavBar',
   data() {
      return {
         isMobileMenuOpen: false,
         pages: [
            {
               to: '/',
               title: 'Home',
            },
         ],
      };
   },

   watch: {
      '$route'() {
         this.isMobileMenuOpen = false;
      },
   },

   methods: {
      toggleMobileMenu() {
         this.isMobileMenuOpen = !this.isMobileMenuOpen;
      },
   },
};
</script>

<template>
   <div class="default-template">
      <nav-bar />

      <content-wrapper />
   </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import ContentWrapper from '../components/ContentWrapper.vue';

export default {
   components: { NavBar, ContentWrapper },
};
</script>

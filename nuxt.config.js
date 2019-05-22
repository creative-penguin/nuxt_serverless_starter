export default {
   mode: 'universal',

   /*
   ** Headers of the page
   */
   head: {
      titleTemplate: '%s - {Site Name}',
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         {
            hid: 'description',
            name: 'description',
            content: 'Some description',
         },
         {
            hid: 'keywords',
            name: 'keywords',
            content: 'some keywords go here',
         },
      ],
   },

   router: {
      base: '/',
   },

   /*
   ** Customize the progress-bar color
   */
   loading: { color: '#fff' },

   /*
   ** Global CSS
   */
   css: [
      { src: '~assets/scss/main.scss', lang: 'scss' },
   ],

   /*
   ** Plugins to load before mounting the App
   */
   plugins: [],

   /*
   ** Nuxt.js modules
   */
   modules: [
      'nuxt-buefy',
   ],

   /*
   ** Build configuration
   */
   build: {
      extractCSS: true,
   },

   /*
   ** Environment variables to be used in Vue
   */
   env: {},
};

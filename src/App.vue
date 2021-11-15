<template>
  <ion-app >
    <ion-router-outlet />
  </ion-app>  
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  // computed:{
  //   notIsLoginPage(){
  //     return this.$route.name !== "login";
  //   }
  // }
})

</script>
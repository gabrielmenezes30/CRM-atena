<template>
    <ion-col size="3">
            <ion-card class="cardGrid" type="button" href="" target="_blank">
              <div class="contentCard">
                <div class="inner ion-margin-start">
                  <h1>{{number}}</h1>
                  <p>{{title}}</p>
                </div>
                <div class="iconGrid">
                  <ion-icon name="paper-plane-sharp"></ion-icon>
                </div>
              </div>
              <a href="link">
                <div class="linkGrid">
                  <div class="container-icon-grid">
                    <ion-icon name="arrow-forward-circle"> </ion-icon>
                  </div>
                </div>
              </a>
            </ion-card>
        </ion-col>
</template>

<script>
import {IonIcon, IonCard} from '@ionic/vue';
import { defineComponent } from 'vue';
import { addIcons } from 'ionicons';
addIcons({

})

export default defineComponent({
    name: 'Card',
    components:{
    IonCard, 
    IonIcon,
    },
    // exportando propriedades do props para os cards na Dashboard
    props:{
        number: Number,
        title: String,
        icon: String
    }
});
</script>


<style>

</style>
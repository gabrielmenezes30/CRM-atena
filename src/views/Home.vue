<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
           <ion-buttons slot="start">
      <ion-button @click="openMenu()">
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </ion-button>
    </ion-buttons>
        <ion-item lines="none">
        <ion-title>Dashbord</ion-title>
          <ion-avatar slot="end">
            <ion-img src="/assets/img/avatar.png" width="10px"></ion-img>
          </ion-avatar>
        </ion-item>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<script lang="ts">
import { personCircle, search } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonItem,
  IonIcon,
  IonAvatar
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  componentes:{
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonButtons,
    IonIcon,
    IonAvatar
  },
  setup(){
    const openMenu = () => {
      console.log('clickes star!')
    } 
    return {personCircle, openMenu, search};
  }
})
</script>

<style>


</style>
<template>
<div id="app">
  <ion-page>

  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end" v-on:click="a">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
        <ion-title class="ion-text-center"> Atena </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list lines="none">
        <ion-item>
          <router-link :to="{ path: '/login' }">Home</router-link>
        </ion-item>
        <ion-item>
          <ion-icon name="arrow-down"></ion-icon>
          Alvos
        </ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
      <ion-buttons class="buttonProfileDropDown" slot="end" @click="toggle()">
        <ion-thumbnail class="ion-margin-end">
          <img src="../../../public/assets/img/profile.png" alt="Avatar" />
        </ion-thumbnail>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-card class="card ion-float-end ion-margin-end" v-show="IsOpen">
      <ion-card-header>
        <div class="card-profile">
          <ion-avatar>
            <img src="../../../public/assets/img/profile.png" alt="Avatar" />
          </ion-avatar>
        </div>
        <p class="ion-text-center">Nome - Cargo</p>
      </ion-card-header>

      <ion-card-content>
        <div class="buttonDropdown">
          <ion-button color="primary">Perfil</ion-button>
          <ion-button color="danger">Sair</ion-button>
        </div>
      </ion-card-content>
    </ion-card>

    <slot />
  </ion-content>

  <ion-router-outlet id="main"></ion-router-outlet>
  </ion-page>
</div>
</template>


<script src="./LayoutPadrao.ts"></script>

<style>
@import "./LayoutPadrao.css";
</style>
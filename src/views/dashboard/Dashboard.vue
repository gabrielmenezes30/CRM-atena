<template>
  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center"> Atena </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list lines="none">
        <ion-item>
          <ion-icon name="layers" />
          Dashboard
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

    <ion-card class="teste"> 
      <ion-card-header class="card-container">
        <ion-card-subtitle color="light">Dashboard</ion-card-subtitle>
      </ion-card-header>
      <ion-grid>
        <ion-row class="ionRow">
          <ion-col size="3">
            <ion-card class="cardGrid" type="button" href="" target="_blank">
              <div class="contentCard">
                <div class="inner ion-margin-start">
                  <h1>150</h1>
                  <p>Alvos</p>
                </div>
                <div class="iconGrid">
                  <ion-icon name="paper-plane-sharp"></ion-icon>
                </div>
              </div>
              <a href="">
                <div class="linkGrid">
                  <div class="container-icon-grid">
                    <ion-icon name="arrow-forward-circle"> </ion-icon>
                  </div>
                </div>
              </a>
            </ion-card>
          </ion-col>
          <ion-col size="3">
            <ion-card class="cardGrid" type="button" href="" target="_blank">
              <div class="contentCard">
                <div class="inner ion-margin-start">
                  <h1>150</h1>
                  <p>Leads</p>
                </div>
                <div class="iconGrid">
                  <ion-icon name="people-sharp"></ion-icon>
                </div>
              </div>
              <a href="#">
                <div class="linkGrid">
                  <div class="container-icon-grid">
                    <ion-icon name="arrow-forward-circle"> </ion-icon>
                  </div>
                </div>
              </a>
            </ion-card>
          </ion-col>
          <ion-col size="3">
            <ion-card class="cardGrid" type="button" href="" target="_blank">
              <div class="contentCard">
                <div class="inner ion-margin-start">
                  <h1>150</h1>
                  <p>Contratos abertos</p>
                </div>
                <div class="iconGrid">
                  <ion-icon name="newspaper-sharp"></ion-icon>
                </div>
              </div>
              <a href="">
                <div class="linkGrid">
                  <div class="container-icon-grid">
                    <ion-icon name="arrow-forward-circle"> </ion-icon>
                  </div>
                </div>
              </a>
            </ion-card>
          </ion-col>
          <ion-col size="3">
            <ion-card class="cardGrid" type="button" href="" target="_blank">
              <div class="contentCard">
                <div class="inner ion-margin-start">
                  <h1>150</h1>
                  <p>Comissões</p>
                </div>
                <div class="iconGrid">
                  <ion-icon name="wallet-sharp"></ion-icon>
                </div>
              </div>
              <a href="">
                <div class="linkGrid">
                  <div class="container-icon-grid">
                    <ion-icon name="arrow-forward-circle"> </ion-icon>
                  </div>
                </div>
              </a>
            </ion-card>
          </ion-col>
          
        </ion-row>
      </ion-grid>
    </ion-card>
  </ion-content>
  

  <ion-router-outlet id="main"></ion-router-outlet>
</template>


<script src="./Dashboard.ts"></script>

<style>
@import "./Dashboard.css";
</style>
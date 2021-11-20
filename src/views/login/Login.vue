<template >
  <ion-page>
    <ion-content class="background-color">
      <div class="flex-center">
        <div class="containerLogin">
          <ion-thumbnail>
            <ion-img src="/assets/img/icon.png"></ion-img>
          </ion-thumbnail>

          <ion-text>
            <h2>Atena CRM</h2>
          </ion-text>
          <ion-card>
            <ion-card-header>
              <ion-card-title
                color="dark"
                class="ion-text-center ion-padding-top">Inicie sua sessão
                </ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <ion-item lines="none">
                <ion-input  class="input" placeholder="CPF"></ion-input>
              </ion-item>
              <ion-item lines="none">
                <ion-input class="input" type="password" placeholder="Senha" autocomplete="on"></ion-input>
              </ion-item>
              <ion-button type="submit" size="full" class="ion-margin-top"
                >Acessar</ion-button> 
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>


<script src="./Login.ts"></script>



<style>
@import './Login.css';
</style>


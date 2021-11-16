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
                <ion-input placeholder="CPF"> </ion-input>
              </ion-item>
              <ion-item lines="none">
                <ion-input type="password" placeholder="Senha" autocomplete="on"></ion-input>
              </ion-item>
              <ion-button type="submit" size="full" class="ion-margin-top"
                >Acessar</ion-button
              > 
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>


<script>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonInput,
  IonLabel,
  IonItem,
  IonImg,
  IonButton,
} from "@ionic/vue";

export default {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonInput,
  IonLabel,
  IonItem,
  IonImg,
  IonButton,
};
</script>



<style>
.flex-center{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.background-color{
    --background: #800080;
}
.cor{
    --color: #800080;
}
.containerLogin {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ion-card {
  width: 360px;
  height: 230px;
}

ion-card-title {
  font-size: 15px;
  font-weight: normal;
}

ion-thumbnail {
  --size: 90px;
}
ion-button {
  --background: #6c757d;
}
ion-text h2 {
  font-weight: 300;
  font-size: 34px;
  color: #ffffff;
}
</style>


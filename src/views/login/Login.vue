<template >
  <ion-page>
    <ion-content class="background-color">
      <div class="flex-center">
        <div class="containerLogin">
          <ion-thumbnail>
            <ion-img src="/assets/img/icon.png" width=""></ion-img>
          </ion-thumbnail>

          <ion-text color="light">
            <h2>ATENA CRM</h2>
          </ion-text>
          <ion-card>
            <ion-card-header>
              <ion-card-title color="dark" class="ion-text-center">Inicie sua seção</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <ion-item>
                <ion-input placeholder="CPF"> </ion-input>
              </ion-item>
              <ion-item>
                <ion-input placeholder="Senha" autocomplete="on"></ion-input>
              </ion-item>
              <ion-button type="submit" size="full" class="ion-margin-top">Acessar</ion-button>
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
.containerLogin {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ion-card {
  width: 340px;
  height: 220px;
}

ion-card-title {
  font-size: 15px;
  font-weight: normal;
}

ion-thumbnail {
  --size: 100px;
}
ion-button {
  --background: #6c757d;
}
</style>
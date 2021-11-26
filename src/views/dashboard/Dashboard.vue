<template id="app">

  <div >

    <layout-padrao>

    <ion-card class=""> 
      <ion-card-header class="card-container">
        <ion-card-subtitle color="light">Dashboard</ion-card-subtitle>
      </ion-card-header>
      <ion-grid>
        <ion-row class="ionRow">
          <!-- Props dos Cards na Dashboard -->
          <Card
          number="150"
          title="Alvos"
           />
            <Card
          number="43"
          title="Leads"
           />
            <Card
          number="150"
          title="Contratos Abertos"
           />
            <Card
          number="65"
          title="Comissões"
           />
          
         
        </ion-row>
      </ion-grid>
    </ion-card>
    <h1>

    <router-link :to="{path: 'dashboard'}">
          Dashboard
    </router-link>
    </h1>

 
    </layout-padrao>
  </div>
 
  

</template>


<script src="./Dashboard.ts"></script>

<style>
@import "./Dashboard.css";
</style>
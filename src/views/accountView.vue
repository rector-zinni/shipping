<template>
    <div class="pa-2 ">
<v-card
elevation="1"
title="Logis"
color="dark"
class="text-grey bg-dark"
>
<hr>
<div class="text-center">
    <img elevation="12" width="50" src="../assets/logo.svg" alt="" srcset="">
</div>
<p class=" pa-2">
    <b>Packages</b>
</p>

<v-card-text >
    <v-list lines="two" class="bg-dark text-grey">

      <v-list-item
        v-for="folder in shipment_data"
        :key="folder.productName"
        :title="folder.productName"
        :subtitle="folder.shipmentTracking"
        class="list"
      >
        <template v-slot:prepend>
          <v-avatar color="grey-lighten-1">
            {{ folder.recieverName.charAt(0) }}
              {{ folder.recieverName.charAt(1) }}
          </v-avatar>
        </template>

        <template v-slot:append>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-delete"
            variant="text"
            class="delete-btn"
            @click="delete_user(`${folder.id}`)"
          
          ></v-btn>
        </template>
      </v-list-item>


     
    </v-list>

</v-card-text>


</v-card>
    </div>
</template>

<script>
import db from '@/fire'
import { doc, deleteDoc } from "firebase/firestore";

    export default {
      data() {
        return {
            shipments:[],
            spinner:false
        }
      }, 
      mounted(){
       
      } ,
      methods:{
   async delete_user(id){
        this.spinner = true;
        await deleteDoc(doc(db.db, "shipment", id)).then((e)=>{
            alert('deleted successfully')
        }).catch((e)=>{
                alert('error occured '+e)
        });


        }
      },
      props:{
        shipment_data:Object,
      }
    }
</script>

<style>
.list:hover{
background-color: #242424;
color: rgb(154, 158, 161);
}
.delete-btn:hover{
color: red !important;
background-color: rgb(245, 173, 165);
}
</style>
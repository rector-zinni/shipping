<template>
  <div>
<trackView></trackView>
<div class="text-right bg-dark">
  <v-btn to="/login" icon>
    <v-icon>mdi-lock</v-icon>
  </v-btn>
</div>
  </div>
</template>

<script >
  import trackView from '@/views/trackView.vue'
  


  export default{
    components:{
     trackView


    },
    data(){
      return{
shipment:[]
      }
    },
   created () {
        console.log("Current cities in CA: ");
        // eslint-disable-next-line no-undef
      //this.getShipment()
    },
    
  }
</script>

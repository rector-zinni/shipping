<template>
 <div class="pa-1 bg-dark">
        <v-card
    class="mx-auto bg-dark"
    color="grey-lighten-3"
    
  >
    <v-card-text>
      <v-text-field
      v-model="track_id"
        :loading="loading"
        density="compact"
        variant="solo"
       
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick()"
      >
      <template v-slot:label>
          <span>
            Enter your <strong>tracking</strong> here <v-icon icon="mdi-file-find"></v-icon>
          </span>
        </template>
    </v-text-field>
    </v-card-text>
  </v-card > 
        <v-card v-if="visible_pointer==true&&track_id==tracking_no" title="Tracking" class="pa-1 bg-dark text-grey">




    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn  append-icon="mdi-plus" class="rounded-pill ma-3" v-bind="props"> package info </v-btn>
      </template>
      <v-card style="background-color:white" >
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Package Info</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              variant="text"
              @click="dialog = false"
            >
              close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
       <div>
        <v-parallax src="../assets/logo.svg" :height="200"></v-parallax>
       </div>
       <h3 class="pa-2">Reciever Information</h3>
       <hr>
        <div
        class="pa-4"
        >
      
            <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Reciever Name:</b> {{recieverName}}</p>
            <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Reciever Address: </b> {{recieverAddress}}</p>
            <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Country: </b> {{place}}</p>
        </div>


        <h3 class="pa-2">Package Information</h3>
        <hr>
        <div
        class="pa-4"
        >
      
        <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Package Name: </b> {{productName}}</p>
        <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Description: </b> {{productDescription}}</p>

        </div>

      <p></p>
       
      <h3 class="pa-2">Shipment Information</h3>
        <hr>
        <div
        class="pa-4"
        >
      
        <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Origin: </b> {{shipmentOrigin}}</p>
        <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> package: </b> {{shipmentPackage}}</p>
        <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Status: </b> {{shipmentStatus}}</p>
        <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Destination: </b> {{shipmentDestination}}</p>
        <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Carrier: </b> {{shipmentCarrier}}</p>
        <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Type of Shipment: </b> {{shipmentType}}</p>
        <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Weight: </b>{{shipmentWeight}}</p>
     <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Shipment Mode: </b> {{shipmentMode}}</p>
            <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Carrier Reference No: </b>{{shipmentCarrierRef}}</p>
            
            <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Quantity: </b> {{shipmentQuantity}}</p>
           
            <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Payment Mode: </b> {{shipmentPaymentMode}}Winning package</p>
            <p class="pack-info"><v-icon size="12">mdi-circle</v-icon><b> Total Frieght: </b> {{shipmentTotalFreight}}</p>
        </div>
      </v-card>
    </v-dialog>
    


   
    <div class="row d-flex justify-content-center mt-70 mb-70">

<div class="col-md-6">
    <p >{{Track_id}}</p>

<v-radio class="mt-3" label="Package has left Courier facility" value="1"></v-radio>
<p class="pl-5">{{shipmentOrigin}}</p>
<p class="pa-3 mt-2"><b>Comment</b> <br/> {{shipmentProduct}}</p>
  <div class="main-card mb-3 card">
                              <div class="card-body">
                                  <h5 class="card-title">User Timeline</h5>
                                  <div class="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                    
                                     
                                      
                                     
                                     
                                      


                                      
                                     
                                      <div class="vertical-timeline-item vertical-timeline-element" >
                                          <div>
                                              <span class="vertical-timeline-element-icon bounce-in">
                                                  <i class="badge badge-dot badge-dot-xl badge-primary"> </i>
                                              </span>
                                              <div class="vertical-timeline-element-content bounce-in">
                                                  <h4 class="timeline-title text-success">Package set for delivery <v-icon>mdi-checkbox-marked-circle</v-icon></h4>
                                                  <p>Package shipped on {{date1}} in {{route1}} Logis wharehose facilty center</p>
                                                  <span class="vertical-timeline-element-date">{{time1}}</span>
                                              </div>
                                          </div>
                                      </div>



                                      <div class="vertical-timeline-item vertical-timeline-element" v-show="route2===''?false:true">
                                          <div>
                                              <span class="vertical-timeline-element-icon bounce-in">
                                                  <i class="badge badge-dot badge-dot-xl badge-primary"> </i>
                                              </span>
                                              <div class="vertical-timeline-element-content bounce-in">
                                                  <h4 class="timeline-title text-success">Shipping Schedule Stop <v-icon>mdi-checkbox-marked-circle</v-icon></h4>
                                                  <p>Package on-transit in {{route2}} for scheldule stop on {{date2}} </p>
                                                  <span class="vertical-timeline-element-date">{{time2}}</span>
                                              </div>
                                          </div>
                                      </div>
                                    
                                      

                                      <div class="vertical-timeline-item vertical-timeline-element" v-show="route3===''?false:true">
                                          <div>
                                              <span class="vertical-timeline-element-icon bounce-in">
                                                  <i class="badge badge-dot badge-dot-xl badge-primary"> </i>
                                              </span>
                                              <div class="vertical-timeline-element-content bounce-in">
                                                  <h4 class="timeline-title text-grey">Custom Routine Check <v-icon>mdi-checkbox-marked-circle</v-icon></h4>
                                                  <p>Custom routine check in  {{route3}} - {{date3}} </p>
                                                  <span class="vertical-timeline-element-date">{{time3}}</span>
                                              </div>
                                          </div>
                                      </div>


                                      <div class="vertical-timeline-item vertical-timeline-element" v-show="route4===''?false:true">
                                          <div>
                                              <span class="vertical-timeline-element-icon bounce-in">
                                                  <i class="badge badge-dot badge-dot-xl badge-primary"> </i>
                                              </span>
                                              <div class="vertical-timeline-element-content bounce-in">
                                                  <h4 class="timeline-title text-success">Shipping Completed <v-icon>mdi-checkbox-marked-circle</v-icon></h4>
                                                  <p>Package Arrived at Logis warehouse facility in  {{route4}} on {{date4}} </p>
                                                  <span class="vertical-timeline-element-date">{{time4}}</span>
                                              </div>
                                          </div>
                                      </div>
                                      
                                         
                                      
                                  </div>
                              </div>
                          </div>        
 
</div> 
</div>



</v-card>



<v-row v-else-if="track_id=='track'&&visible_pointer==false" style="height: 90vh;" class="text-center pa-1 bg-dark" >
<v-col align-self="center" class="pa-1">
    <v-card class=" bg-dark text-grey ">
        <v-card-text>
            <p class="pa-1">
                <h2>Enter Tracking number to track your package <v-icon>mdi-magnify</v-icon></h2>
                <span><strong></strong></span>
            </p>
        </v-card-text>
    </v-card>
</v-col>
</v-row>

<v-row v-else style="height: 90vh;" class="text-center pa-1 bg-dark" >
<v-col align-self="center" class="pa-1">
    <v-card class="bg-dark text-grey ">
        <v-card-text>
            <p class="pa-1">
                <h2>No package found, try again <v-icon>mdi-magnify</v-icon></h2>
            </p>
        </v-card-text>
    </v-card>
</v-col>
</v-row>




    
   

    </div>

   
</template>

<script>
  import db from "@/fire"
  import { collection,onSnapshot,query,where} from 'firebase/firestore'
export default {
   
    data () {
        

        return {
            visible_pointer:false,
            track_id:'track',
            loading:false,
            dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        shipment_data:[],
        recieverName:'',
        recieverAddress:'',
        place:'',
        productName:'',
        shipmentOrigin:'',
        shipmentPackage:'',
        shipmentStatus:'',
        shipmentDestination:'',
        shipmentCarrier:'',
        shipmentType:'',
        shipmentWeight:'',
        shipmentMode:'',
        shipmentCarrierRef:'',
        shipmentProduct:'',
        shipmentQuantity:'',
        shipmentPaymentMode:'',
        shipmentTotalFreight:'',
        tracking_no:'',
        date1:'',
        time1:'',
        route1:'',
        date2:'',
        time2:'',
        route2:'',
        date3:'',
        time3:'',
        route3:'',
        date4:'',
        time4:'',
        route4:''


       
         

        }
        
    },
    methods: {
        onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
          this.getShipment()
        }, 2000)
      },

      gohome(){
        window.location.href="index.html"
      },
     
    async  getShipment(){
        const q = await query(collection(db.db, "shipment"), where("shipmentTracking", "==", this.track_id));
        // eslint-disable-next-line no-unused-vars
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
         
            querySnapshot.forEach((doc) => {
                
       
                this.recieverName=doc.data().recieverName
                this.recieverAddress=doc.data().recieverAddress
                this.place=doc.data().place
                this.productName=doc.data().productName
                this.shipmentOrigin=doc.data().shipmentOrigin
                this.shipmentPackage=doc.data().shipmentPackage
                this.shipmentStatus=doc.data().shipmentStatus
                this.shipmentDestination=doc.data().shipmentDestination
                this.shipmentCarrier=doc.data().shipmentCarrier
                this.shipmentType=doc.data().shipmentType
                this.shipmentWeight=doc.data().shipmentWeight
                this.shipmentMode=doc.data().shipmentMode
                this.shipmentCarrierRef=doc.data().shipmentCarrierRef
                this.shipmentProduct=doc.data().shipmentProduct
                this.shipmentQuantity=doc.data().shipmentQuantity
                this.shipmentPaymentMode=doc.data().shipmentPaymentMode
                this.shipmentTotalFreight=doc.data().shipmentTotalFreight
                this.tracking_no=doc.data().shipmentTracking
                this.date1=doc.data().date1
                this.time1=doc.data().time1
                this.route1=doc.data().route1
                this.date2=doc.data().date2
                this.time2=doc.data().time2
                this.route2=doc.data().route2
                this.date3=doc.data().date3
                this.time3=doc.data().time3
                this.route3=doc.data().route3
                this.date4=doc.data().date4
                this.time4=doc.data().time4
                this.route4=doc.data().route4
                if(this.recieverName===""){
                    this.visible_pointer=false
                }else{
                    this.visible_pointer=true
                }

            });

           
        })
      }
 
    },
}
</script>

<style  scoped>
.theme-background{
    background-color: #1e1e1e;
    color: hsl(0, 0%, 90%);
}
.theme-background-font{
    font-size: 12px;
}
.theme-background-margin{
    margin: 0;
}
body{
     background-color: #eee;
}

.mt-30{
     margin-top: 70px;
}

.mb-70{
     margin-bottom: 30px;
}

.card {
    box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
    border-width: 0;
    transition: all .2s;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(26,54,126,0.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
}
.vertical-timeline {
    width: 100%;
    position: relative;
    padding: 1.5rem 0 1rem;
}

.vertical-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 67px;
    height: 100%;
    width: 4px;
    background: #e9ecef;
    border-radius: .25rem;
}

.vertical-timeline-element {
    position: relative;
    margin: 0 0 1rem;
}

.vertical-timeline--animate .vertical-timeline-element-icon.bounce-in {
    visibility: visible;
    animation: cd-bounce-1 .8s;
}
.vertical-timeline-element-icon {
    position: absolute;
    top: 0;
    left: 60px;
}

.vertical-timeline-element-icon .badge-dot-xl {
    box-shadow: 0 0 0 5px #fff;
}

.badge-dot-xl {
    width: 18px;
    height: 18px;
    position: relative;
}
.badge:empty {
    display: none;
}


.badge-dot-xl::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: .25rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -5px 0 0 -5px;
    background: #fff;
}

.vertical-timeline-element-content {
    position: relative;
    margin-left: 90px;
    font-size: .8rem;
}

.vertical-timeline-element-content .timeline-title {
    font-size: .8rem;
    text-transform: uppercase;
    margin: 0 0 .5rem;
    padding: 2px 0 0;
    font-weight: bold;
}

.vertical-timeline-element-content .vertical-timeline-element-date {
    display: block;
    position: absolute;
    left: -90px;
    top: 0;
    padding-right: 10px;
    text-align: right;
    color: #adb5bd;
    font-size: .7619rem;
    white-space: nowrap;
}

.vertical-timeline-element-content:after {
    content: "";
    display: table;
    clear: both;
}
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
.pack-info{
    font-size: 15px;
    padding: 5px;

}
</style>
<template>

<v-app id="inspire">
  <v-navigation-drawer
        expand-on-hover
        rail
        v-model="drawer"
        class="bg-dark text-grey"
      >
        <v-list
       
        >
          <v-list-item
            prepend-avatar="../assets/logo.svg"
            title="logis"
            subtitle="Courier Service"
            style="color:rgb(187, 183, 183);"
            append-icon="md-plus"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-package" title="Add Package" value="myfiles" @click="showBackend"></v-list-item>
          <v-list-item prepend-icon="mdi-delete" title="Delete Package" value="shared" @click="showNav"></v-list-item>
          <v-list-item prepend-icon="mdi-cog-outline" title="Update Package" value="starred" @click="update_ship"></v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Logis</v-toolbar-title>
    </v-app-bar>

    <v-main>
     <account :shipment_data="shipement_info" v-show="nav_b"></account>
        <div v-show="backend">

    
<v-form ref="form" v-model="valid" lazy-validation class="bg-dark text-white pa-3">
  <h2>Product Information</h2>
  <v-text-field label="Product Name" v-model="product.name" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Product Description" v-model="product.description" :rules="[rules.required]"></v-text-field>

  <h2>Receiver Information</h2>
  <v-text-field label="Receiver Name" v-model="receiver.name" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Receiver Address" v-model="receiver.address" :rules="[rules.required]"></v-text-field>

  <h2>Shipment Information</h2>
  <v-text-field label="Origin" v-model="shipment.origin" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Package" v-model="shipment.package" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Status" v-model="shipment.status" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Destination" v-model="shipment.destination" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Carrier" v-model="shipment.carrier" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Type of Shipment" v-model="shipment.type" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Weight" v-model="shipment.weight" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Shipment Mode" v-model="shipment.mode" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Carrier Reference Number" v-model="shipment.carrierRef" :rules="[rules.required]"></v-text-field>
  <v-textarea label="Comment" v-model="shipment.product" :rules="[rules.required]"></v-textarea>
  <v-text-field label="Quantity" v-model="shipment.quantity" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Payment Mode" v-model="shipment.paymentMode" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Total Freight" v-model="shipment.totalFreight" :rules="[rules.required]"></v-text-field>
  <hr>
  <v-text-field label="Tracking Number" v-model="shipment.tracking" :rules="[rules.required]"></v-text-field>
  <h2>Route Information</h2>
 
  <v-text-field label="Route1" v-model="shipment.route1" :rules="[rules.required]"></v-text-field>
  <v-row>
    <v-col>
      <v-text-field label="Date" v-model="shipment.date1" :rules="[rules.required]"></v-text-field>
    </v-col>
    <v-col>
      <v-text-field label="Time" v-model="shipment.time1" :rules="[rules.required]"></v-text-field>
    </v-col>
  </v-row>
  <v-text-field label="Route2" v-model="shipment.route2" ></v-text-field>
  <v-row>
    <v-col>
      <v-text-field label="Date" v-model="shipment.date2" ></v-text-field>
    </v-col>
    <v-col>
      <v-text-field label="Time" v-model="shipment.time2" ></v-text-field>
    </v-col>
  </v-row>
  <v-text-field label="Route3" v-model="shipment.route3" ></v-text-field>
  <v-row>
    <v-col>
      <v-text-field label="Date" v-model="shipment.date3" ></v-text-field>
    </v-col>
    <v-col>
      <v-text-field label="Time" v-model="shipment.time3" ></v-text-field>
    </v-col>
  </v-row>
  <v-text-field label="Route4" v-model="shipment.route4" ></v-text-field>
  <v-row>
    <v-col>
      <v-text-field label="Date" v-model="shipment.date4" ></v-text-field>
    </v-col>
    <v-col>
      <v-text-field label="Time" v-model="shipment.time4" ></v-text-field>
    </v-col>
  </v-row>

  <v-btn :disabled="!valid"  :loading="spinner" @click="get_location" class="light" append-icon="mdi-plus">Add package</v-btn>
</v-form>
</div>  
<div v-show="update_shipping">

    
<v-form ref="form" lazy-validation class="bg-dark text-white pa-3">
  <h1>Update Shipment Information</h1>
  <v-select
      v-model="selected_value"
      :items="shipId"
      density="compact"
      label="Shipping ID"
      
    ></v-select>

    <hr>
  <h2>Product Information</h2>
  <v-text-field label="productName" v-model="update_product.productName" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Product Description" v-model="update_product.productDescription" :rules="[rules.required]"></v-text-field>

  <h2>Receiver Information</h2>
  <v-text-field label="Receiver Name" v-model="update_receiver.name" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Receiver Address" v-model="update_receiver.address" :rules="[rules.required]"></v-text-field>

  <h2>Shipment Information</h2>
  <v-text-field label="Origin" v-model="update_shipment.origin" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Package" v-model="update_shipment.package" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Status" v-model="update_shipment.status" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Destination" v-model="update_shipment.destination" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Carrier" v-model="update_shipment.carrier" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Type of Shipment" v-model="update_shipment.type" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Weight" v-model="update_shipment.weight" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Shipment Mode" v-model="update_shipment.mode" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Carrier Reference Number" v-model="update_shipment.carrierRef" :rules="[rules.required]"></v-text-field>
  <v-textarea label="Comment" v-model="update_shipment.product" :rules="[rules.required]"></v-textarea>
  <v-text-field label="Quantity" v-model="update_shipment.quantity" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Payment Mode" v-model="update_shipment.paymentMode" :rules="[rules.required]"></v-text-field>
  <v-text-field label="Total Freight" v-model="update_shipment.totalFreight" :rules="[rules.required]"></v-text-field>
  <hr>
  <v-text-field label="Tracking Number" v-model="update_shipment.tracking" :rules="[rules.required]"></v-text-field>
  <hr>
  <h2>Route Information</h2>
 
 <v-text-field label="Route1" v-model="update_shipment.route1" :rules="[rules.required]"></v-text-field>
 <v-row>
   <v-col>
     <v-text-field label="Date" v-model="update_shipment.date1" :rules="[rules.required]"></v-text-field>
   </v-col>
   <v-col>
     <v-text-field label="Time" v-model="update_shipment.time1" :rules="[rules.required]"></v-text-field>
   </v-col>
 </v-row>
 <v-text-field label="Route2" v-model="update_shipment.route2" ></v-text-field>
 <v-row>
   <v-col>
     <v-text-field label="Date" v-model="update_shipment.date2"></v-text-field>
   </v-col>
   <v-col>
     <v-text-field label="Time" v-model="update_shipment.time2" ></v-text-field>
   </v-col>
 </v-row>
 <v-text-field label="Route3" v-model="update_shipment.route3" ></v-text-field>
 <v-row>
   <v-col>
     <v-text-field label="Date" v-model="update_shipment.date3" ></v-text-field>
   </v-col>
   <v-col>
     <v-text-field label="Time" v-model="update_shipment.time3" ></v-text-field>
   </v-col>
 </v-row>
 <v-text-field label="Route4" v-model="update_shipment.route4" ></v-text-field>
 <v-row>
   <v-col>
     <v-text-field label="Date" v-model="update_shipment.date4" ></v-text-field>
   </v-col>
   <v-col>
     <v-text-field label="Time" v-model="update_shipment.time4" ></v-text-field>
   </v-col>
 </v-row>

  <v-btn   :loading="spinner1" @click="update_data" class="light" append-icon="mdi-plus">Update Package</v-btn>
</v-form>
</div>    


    </v-main>
  </v-app>
</template>


  
  <script>

  import db from '@/fire'
  import account from '@/views/accountView.vue'
 import { collection, doc, setDoc,onSnapshot,query,updateDoc } from 'firebase/firestore'
  export default {
    components:{
account
    },
    data: () => ({
      spinner1:false,
      to_update:[],
      selected_value:'',
      valid1:true,
      update_shipping:false,
      shipement_info:[],
      backend:true,
      nav_b:false,
        drawer: null ,
      valid: true,
      product: {
        name: '',
        description: ''
      },
      receiver: {
        name: '',
        address: ''
      },
      shipment: {
        origin: '',
        package: '',
        status: '',
        destination: '',
        carrier: '',
        type: '',
        weight: '',
        mode: '',
        carrierRef: '',
        product: '',
        quantity: '',
        paymentMode: '',
        totalFreight: '',
        tracking:'',
        route1:'',
        route2:"",
        route3:"",
        route4:'',
        date1:'',
        date2:'',
        date3:'',
        date4:'',
        time1:'',
        time2:'',
        time3:'',
        time4:''
        

      },
      shipment_location:[],
      rules: {
        required: value => !!value || 'Required.'
      },
      spinner:false,
      clientIp:'',
      update_product: {
        name: '',
        description: ''
      },
      update_receiver: {
        name: '',
        address: ''
      },
      update_shipment: {
        origin: '',
        package: '',
        status: '',
        destination: '',
        carrier: '',
        type: '',
        weight: '',
        mode: '',
        carrierRef: '',
        product: '',
        quantity: '',
        paymentMode: '',
        totalFreight: '',
        tracking:'',
        route1:'',
        route2:"",
        route3:"",
        route4:'',
        date1:'',
        date2:'',
        date3:'',
        date4:'',
        time1:'',
        time2:'',
        time3:'',
        time4:''

      },
      shipId:[]
    }),
    methods: {
      async update_data(){
        const onRef = doc(db.db, "shipment", this.selected_value);
        await updateDoc(onRef, {
          productName : this.update_product.productName,
          productDescription:this.update_product.productDescription,
          recieverName:this.update_receiver.name,
          recieverAddress:this.update_receiver.address,
          shipmentOrigin:this.update_shipment.origin,
          shipmentPackage:this.update_shipment.package,
          shipmentStatus:this.update_shipment.status,
          shipmentDestination:this.update_shipment.destination,
          shipmentCarrier:this.shipment.carrier,
          shipmentType:this.update_shipment.type,
          shipmentWeight:this.update_shipment.weight,
          shipmentMode:this.update_shipment.mode,
          shipmentCarrierRef:this.update_shipment.carrierRef,
          shipmentProduct:this.update_shipment.product,
          shipmentQuantity:this.update_shipment.quantity,
          shipmentPaymentMode:this.update_shipment.paymentMode,
          shipmentTotalFreight:this.update_shipment.totalFreight,
          shipmentTracking:this.update_shipment.tracking,
          route1:this.update_shipment.route1,
          route2:this.update_shipment.route2,
          route3:this.update_shipment.route3,
          route4:this.update_shipment.route4,
          date1:this.update_shipment.date1,
          date2:this.update_shipment.date2,
          date3:this.update_shipment.date3,
          date4:this.update_shipment.date4,
          time1:this.update_shipment.time1,
          time2:this.update_shipment.time2,
          time3:this.update_shipment.time3,
          time4:this.update_shipment.time4

        }).then((e)=>{
          alert('Shipment Data Updated');

        }).catch((e)=>{
          alert("error while updating "+e);
        });
        
        
      },
      update_ship(id_ship){
this.to_update=this.shipement_info.filter((e)=>{
return e.id==id_ship
})
alert(this.to_update)
      },
      submit() {
        if (this.$refs.form.validate()) {
      
        }
      },
      
     async get_location(){
      this.spinner=true;
    await fetch(`http://ip-api.com/json//${this.clientIp}`).then(response => response.json())
  .then(response => {
    this.shipment_location=response
    this.add_package()
  });
      },
      async add_package(){
        const package_data={
          productName : this.product.name,
          productDescription:this.product.description,
          recieverName:this.receiver.name,
          recieverAddress:this.receiver.address,
          shipmentOrigin:this.shipment.origin,
          shipmentPackage:this.shipment.package,
          shipmentStatus:this.shipment.status,
          shipmentDestination:this.shipment.destination,
          shipmentCarrier:this.shipment.carrier,
          shipmentType:this.shipment.type,
          shipmentWeight:this.shipment.weight,
          shipmentMode:this.shipment.mode,
          shipmentCarrierRef:this.shipment.carrierRef,
          shipmentProduct:this.shipment.product,
          shipmentQuantity:this.shipment.quantity,
          shipmentPaymentMode:this.shipment.paymentMode,
          shipmentTotalFreight:this.shipment.totalFreight,
          shipmentTracking:this.shipment.tracking,
          trackday:new Date().toDateString(),
          time:new Date().toTimeString(),
          place:this.shipment_location.country,
          route1:this.shipment.route1,
          route2:this.shipment.route2,
          route3:this.shipment.route3,
          route4:this.shipment.route4,
          date1:this.shipment.date1,
          date2:this.shipment.date2,
          date3:this.shipment.date3,
          date4:this.shipment.date4,
          time1:this.shipment.time1,
          time2:this.shipment.time2,
          time3:this.shipment.time3,
          time4:this.shipment.time4

        }

        try {
          const newid =   doc(collection(db.db, "shipment"));
        await setDoc(newid, {...package_data,id:newid.id});
                    console.log("Document written with ID: ",newid.id);
                    alert('tracking added with Package information')

                    this.spinner = false
                } catch (e) {
                    this.spinner = false
                    console.error("Error adding document: ", e);
                    alert('error while adding package'+e)
                }

      },
      showBackend(){
        this.backend=true;
        this.nav_b=false;
        this.update_shipping=false;
      },
      showNav(){
        this.backend=false;
        this.nav_b=true;
        this.update_shipping=false
      },
        update_ship(){
          this.backend=false;
        this.nav_b=false;
        this.update_shipping=true 
        }
    },
    computed: {
      ipaddress(){
        fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(response => {
    this.clientIp = response.ip;
  });
  return this.clientIp
      },
     
    },
    mounted() {
                // eslint-disable-next-line no-undef
        const q = query(collection(db.db, "shipment"));
        // eslint-disable-next-line no-unused-vars
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            this.shipement_info = []
            this.shipId=[]
            querySnapshot.forEach((doc) => {
                
                this.shipement_info.push(doc.data());
                this.shipId.push(doc.data().id)
            });
           
        });
    },
    watch: {
                selected_value: function (newValue) {
                  const a= newValue
                  this.to_update=this.shipement_info.filter((e)=>{
                    
                  return e.id==a
})
              this.update_product.productName=this.to_update[0].productName
              this.update_product.productDescription=this.to_update[0].productDescription
              this.update_receiver.name=this.to_update[0].recieverName
              this.update_receiver.address=this.to_update[0].recieverAddress
              this.update_shipment.origin=this.to_update[0].shipmentOrigin
              this.update_shipment.package=this.to_update[0].shipmentPackage
              this.update_shipment.status=this.to_update[0].shipmentStatus
              this.update_shipment.destination=this.to_update[0].shipmentDestination
              this.update_shipment.carrier=this.to_update[0].shipmentCarrier
              this.update_shipment.type=this.to_update[0].shipmentType
              this.update_shipment.weight=this.to_update[0].shipmentWeight
              this.update_shipment.mode=this.to_update[0].shipmentMode
              this.update_shipment.carrierRef=this.to_update[0].shipmentCarrierRef
              this.update_shipment.product=this.to_update[0].shipmentProduct
              this.update_shipment.quantity=this.to_update[0].shipmentQuantity
              this.update_shipment.paymentMode=this.to_update[0].shipmentPaymentMode
              this.update_shipment.totalFreight=this.to_update[0].shipmentTotalFreight
              this.update_shipment.tracking=this.to_update[0].shipmentTracking,
              this.update_shipment.route1=this.to_update[0].route1,
          this.update_shipment.route2=this.to_update[0].route2,
         this.update_shipment.route3=this.to_update[0].route3,
          this.update_shipment.route4=this.to_update[0].route4,
          this.update_shipment.date1=this.to_update[0].date1,
         this.update_shipment.date2=this.to_update[0].date2,
          this.update_shipment.date3=this.to_update[0].date3,
          this.update_shipment.date4=this.to_update[0].date4,
          this.update_shipment.time1=this.to_update[0].time1,
          this.update_shipment.time2=this.to_update[0].time2,
          this.update_shipment.time3=this.to_update[0].time3,
          this.update_shipment.time4=this.to_update[0].time4
                }
            },
  }
  </script>
  
  <style scoped>
  /* Add your custom CSS for the neon dark color scheme here */
  </style>
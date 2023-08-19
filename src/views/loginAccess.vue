<template>
      <div class="home fit">
 
 <div class="center-div mb-4">
     <img src="../assets/logo.svg" alt="" width="50" srcset="" >
 <p class="display-5 fw-bold icon-col mb-5" style="margin:0;">Logis </p>

 <div  class="login-form light-icon-col" >
 <!--  -->
 
   <!-- Email input -->
   <v-text-field
 label="Online access"
 v-model="oa"
 variant="solo-inverted"
 ></v-text-field>
 
   <!-- Password input -->
 <v-text-field
 label="passcode"
 v-model="pw"
 type="password"
 variant="solo-inverted"
 ></v-text-field>
   <!-- 2 column grid layout for inline styling -->
   <div class="row mt-2">
     <div class="col d-flex justify-content-center">
       <!-- Checkbox -->
       <div class="form-check checkmack">
         <input class="form-check-input "  type="checkbox" value="" id="form2Example31" checked />
         <label class="form-check-label" for="form2Example31"> Remember me </label>
       </div>
     </div>
 
     <div class="col">
       <!-- Simple link -->
       <a href="#!" class="text-dark">Forgot password?</a>
     </div>
   </div>
 
   <!-- Submit button -->
   <div class="d-grid gap-2">
      <button class="btn  btn-md mt-3 fw-bold " style="background:#0c0c0c;color:aliceblue" type="button" @click="login">{{log_status}} 
 &nbsp;&nbsp;&nbsp;
         <v-progress-circular
       :size="30"
       color="light"
       indeterminate
       v-show="spin"
     ></v-progress-circular>
      </button>
 </div>
   <!-- Register buttons -->
  <!--  <div class="text-center">
     <p>Not a member? <a href="#!">Register</a></p>
     
   </div> -->
 
 <!--  -->
 
 </div>
 </div>
 
   </div>
</template>

<script>
// @ is an alias to /src

import router from '@/router'

export default {
  
    components: {

    },
    data() {
        return {
            log: false,
            oa:"",
            pw:"",
            spin_loader:true,
            spin:false,
            log_status:"Log in"

        }
    },
    mounted() {
        

        
       
    },
    methods: {
        login(){
           if(this.oa=="admin"&&this.pw=="admin"){
            router.push('backend')
           }else{
            alert('incorrect password')
           }
        }
    },
}
</script>
<style>
.home {
    height: 100vh;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
}

.center-div {
    display: inline-block;
    width: 90%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.login-form {}

.form-control:focus {
    outline: 0 !important;
    border-color: initial;
    box-shadow: none !important;
}
.checkmack:hover input{
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.checkmack input:checked{
  background-color: #373637;
}
.fit{
    background: rgb(44, 42, 42);
  background-size: cover; /* This property scales the background image to fit within the container */
  background-repeat: no-repeat; /* This property prevents the background image from repeating */
  background-position: center; /* This property centers the background image within the container */
}
</style>
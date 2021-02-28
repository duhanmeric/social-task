<template>
  <div id="register">
    <div class="row mx-0 justify-content-center align-items-center">
      <div class="register-container container mt-3 w-75 h-75 d-flex justify-content-center flex-column align-items-center">
        <h1 class="text-center mb-4">Sign Up</h1>
        <div class="error mb-3" v-if="error">{{ this.error }}</div>
        <div class="col-md-8 text-center mt-3">
          <div class="email-field">
            <input type="email" id="email" name="email" placeholder="Email address" v-model="email">
          </div>
        </div>
        <div class="col-md-8 text-center">
          <div class="username-field">
            <input type="text" name="text" id="text" placeholder="Username" v-model="username">
          </div>
        </div>
        <div class="col-md-8 text-center">
          <div class="password-field">
            <input type="password" name="password" id="password" placeholder="Password" v-model="password">
          </div>
        </div>
        <div class="col-md-8 text-center btn-col">
          <button @click="register" class="sign-up-btn">Register</button>
        </div>
      </div>
      <small class="text-center warning">Manage your day</small>
    </div>
  </div>
</template>

<script scoped>
import AuthService from '../services/AuthService'
export default {
  data(){
    return {
      email: "",
      username: "",
      password: "",
      error: null,
    }
  },
  methods: {
    register () {
      try{
        const response = AuthService.register({
          email: this.email,
          username: this.username,
          password: this.password,
          isAdmin: false,
        })
        .then(res => {
          this.$store.dispatch('setToken', res.data.token)
          this.$store.dispatch('setUser', res.data.user)
          this.$router.push({path: `/profile/` + res.data.user.id})
        })
      }
      catch(error){
        this.error = `${error.response.data.error}`
      }
    }
  }
}
</script>

<style>
#register{
  height: calc(100vh - 60px);
}

#register .row{
  height: calc(100vh - 120px);
}

 #email,#text,#password{
  width: 300px;
  height: 45px;
  padding: 0 .8rem;
  border-radius: 4px 4px;
  border: 1px solid #aaa;
  outline: none;
  font-family: 'Roboto Mono', monospace;
}

.sign-up-btn{
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 4px 4px;
  background-color: #00BA63;
  color: white;
  font-size: 18px;
  font-family: 'Roboto Mono', monospace;
}

.error{
  font-family: 'Roboto Mono', monospace;
}

.error::after{
  content: "";
  width: 100%;
  height: 2px;
  background-color: red;
  display: block;
  margin-top: 4px;
}

.col-md-8{
  margin: 10px 0;
}

.btn-col{
  margin-top: 20px;
}

.warning,.warning a{
  font-family: 'Roboto Mono', monospace;
  color: rgba(117, 117, 117);
}

@media screen and (min-width: 320px) and (max-width:576px){
  .register-container{
    width: 90%!important;
  }

  #email,#text,#password,.sign-up-btn,.login-btn{
   width: 260px;
   font-size: 16px;
 }

 .warning{
   width: 90%!important;
   padding: 0!important;
 }

}
</style>

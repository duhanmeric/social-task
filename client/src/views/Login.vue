<template>
  <div id="login">

    <div class="row mx-0 justify-content-center align-items-center">
      <div class="login-container container mt-3 w-75 h-75 d-flex justify-content-center flex-column align-items-center">
        <h1 class="text-center mb-4">Login</h1>
        <div class="error mb-3" v-if="error">{{ this.error }}</div>
        <div class="col-md-8 text-center mt-3">
          <div class="email-field">
            <input type="email" name="email" id="email" placeholder="Email address" v-model="email">
          </div>
        </div>
        <div class="col-md-8 text-center">
          <div class="password-field">
            <input type="password" id="password" name="password" placeholder="Password" v-model="password">
          </div>
        </div>
        <div class="col-md-8 text-center btn-col">
          <button @click="login" class="login-btn">Go</button>
        </div>
      </div>
      <small class="text-center warning">Refresh your day.</small>
    </div>
  </div>
</template>

<script>
import AuthService from '../services/AuthService'
export default {
  data(){
    return {
      email: "",
      password: "",
      error: null,
    }
  },
  methods: {
    login () {
      try{
        AuthService.login({
          email: this.email,
          password: this.password
        }).then(res => {
          this.$store.dispatch('setToken', res.data.token)
          this.$store.dispatch('setUser', res.data.user)
          this.$router.push({path: '/profile/' + this.$store.state.user.id})
        })
      }
      catch(error){
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>
#login{
  height: calc(100vh - 60px);
}

#login .row{
  height: calc(100vh - 120px);
}

.login-btn{
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 4px 4px;
  background-color: #00BA63;
  color: white;
  font-size: 18px;
  font-family: 'Roboto Mono', monospace;
}

.warning{
  color: rgba(117, 117, 117);
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

#email,#password{
 width: 300px;
 height: 45px;
 padding: 0 .8rem;
 border-radius: 4px 4px;
 border: 1px solid #aaa;
 outline: none;
 font-family: 'Roboto Mono', monospace;
}

.col-md-8{
  margin: 8px 0;
}

.btn-col{
  margin-top: 20px;
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

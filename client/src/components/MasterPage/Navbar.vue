<template>
  <header class="fixed-top">
    <div class="row m-0">
      <div class="logo w-auto">
        <a href="/">misket</a>
      </div>
      <ul class="nav list-unstyled w-auto" :class="{ loggedIn: $store.state.isUserLoggedIn}">
        <li class="nav-list-item" v-if="!$store.state.isUserLoggedIn">
          <router-link to="/register">Sign Up</router-link>
        </li>
        <div class="line" v-if="!$store.state.isUserLoggedIn"></div>
        <li class="nav-list-item" v-if="!$store.state.isUserLoggedIn">
          <router-link to="/login">Login</router-link>
        </li>


        <!-- giriş yapmışsa -->
        <li class="nav-list-item" v-if="$store.state.isUserLoggedIn">
          <router-link to="/search">Search</router-link>
        </li>

        <div class="line" v-if="$store.state.isUserLoggedIn"></div>

        <li class="nav-list-item" v-if="$store.state.isUserLoggedIn">
          <a :href="'/profile/' + currentUser" :class="{ profileActive: isInProfile}">Profile</a>
        </li>

        <div class="line" v-if="$store.state.isUserLoggedIn"></div>

        <li class="nav-list-item" v-if="$store.state.isUserLoggedIn">
          <router-link to="/settings">Settings</router-link>
        </li>

        <div class="line" v-if="$store.state.isUserLoggedIn"></div>

        <li class="nav-list-item" v-if="$store.state.isUserLoggedIn">
          <a href="/" @click="logout">Logout</a>
        </li>

      </ul>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({path: '/'})
    }
  },
  computed: {
    currentUser(){
      return this.$store.state.user.id
    },
    isInProfile(){
      if(this.$route.params.id == this.$store.state.user.id){
        return true;
      }
    }
  }
}
</script>

<style>
header{
  padding: 0 40px;
  height: 50px;
  box-shadow: 2px 2px 3px #ccc;
  font-family: "Roboto Mono",monospace;
  background: white;
}

header .row{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo{
  padding-left: 0;
}

.logo a{
  text-decoration: none;
  color: #5f6368;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: .5px;
  font-weight: 500;
}

.nav{
  padding-right: 0;
  height: 100%;
  min-width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-list-item{
  height: 100%;
}

.nav-list-item a{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: #5f6368;
  font-weight: 500;
  position: relative;
  font-size: 14px;
}

.nav-list-item a::after{
  content: "";
  width: 100%;
  height: 4px;
  display: none;
  position: absolute;
  bottom: 0;
  background-color: #5f6368;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

.nav-list-item a:hover::after{
  display: block;
}

.nav-list-item a.router-link-exact-active::after{
  background-color: #00ba63!important;
  display: block;
}

.loggedIn{
  width: 300px!important;
}

.nav-list-item a.profileActive::after{
  background-color: #00ba63!important;
  display: block;
}

@media screen and (max-width:576px) {
  .nav{
    position: fixed;
    bottom: 0;
    height: 50px;
    background: white;
    width: 100%!important;
    left: 0;
    border-top: 1px solid #ccc;
    padding: 0 40px;
  }

  .logo{
    margin: 0 auto;
  }

  .line{
    width: 1px;
    height: 20px;
    background: #5f6368;
    margin: 0 40px;
  }

  .nav-list-item{
    margin: 0 auto;
  }

  .loggedIn{
    width: 100%!important;
    padding: 0 10px;
  }

  .nav.loggedIn .line{
    margin: 0;
  }

  .nav-list-item a{
    font-size: 14px;
  }

}
</style>

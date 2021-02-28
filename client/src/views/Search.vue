<template>
  <div id="search">
    <main class="search-content">
      <div class="user-list">
        <div class="user-list-header">
          <h4 class="type-title">Search User</h4>
          <div class="search-field">
            <input type="text" class="search-username" v-model="search">
            <router-link :to="'/profile/' + currentId" class="cancel-search">
              <i class="fas fa-times search-cancel-icon"></i>
            </router-link>
          </div>
        </div>
        <div class="user-list-body">
          <ul class="list-unstyled search-list m-0 w-100">
            <li v-for="profile in filteredProfiles" :key="profile.id" class="search-list-item">
              <router-link :to="'/profile/' + profile.id" class="w-100 each-link">
                <div class="username-area">
                  {{ profile.username }}
                </div>
                <i class="fas fa-long-arrow-alt-right"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ProfileService from "@/services/ProfileService"
export default {
  data () {
    return {
      search: "",
      profiles: [],
      currentId: this.$store.state.user.id,
      currentEmail: this.$store.state.user.email,
    }
  },
  computed: {
    filteredProfiles(){
      return this.profiles.filter(profile => {
        return profile.username.match(this.search);
      })
    }
  },
  created () {
    ProfileService.getOtherUsers({
      retrieveEmail: this.currentEmail,
    })
    .then(res => {
      for (let i = 0; i < res.data.length; i++) {
        if(this.$store.state.user.isAdmin && res.data[i].email !== this.currentEmail){
          this.profiles.push(res.data[i]);
        }
        else if(res.data[i].email !== this.currentEmail && !res.data[i].isProfileSecret){
          this.profiles.push(res.data[i]);
        }
      }
    })
  }
}
</script>

<style>
#search{
  background-color: #f8f8f8;
  height: calc(100vh - 50px);
}

.search-content{
  width: 100%;
  min-height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-list{
  width: 100%;
  max-width: 380px;
  background-color: #fff;
  border: 1px solid rgb(229, 229, 229);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgb(0 0 0 / 50%) 0px 5px 23px -18px;
  font-family: 'Roboto', sans-serif;
}

.user-list-header{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px 7px 40px;
}

.search-field{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 2px solid #999;
  width: 100%;
}

.search-username{
  border: none;
  outline: none;
  width: 90%;
  font-size: 18px;
  margin-top: 10px;
  padding: .3rem 0;
}

.cancel-search{
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.cancel-search:hover{
  color: black;
}

.search-cancel-icon{
  font-size: 20px;
  cursor: pointer;
}

.user-list-body{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-list-body .search-list{
  height: 290px;
  overflow-y: auto;
  padding: 0px 40px 14px 40px;
}

.search-list-item{
  padding: 1rem 0rem;
}

.search-list-item a{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: black;
}

.search-list-item{
  border-bottom: 1px solid rgb(200, 200, 200);
}

@media screen and (max-width:576px) {
  .search-content{
    min-height: calc(100vh - 50px);
    padding-bottom: calc(50px);
    overflow: hidden;
  }

  .user-list{
    max-width: 280px;
  }

  .user-list-header{
    padding: 14px 28px 0 28px;
  }

  .type-title{
    text-align: center;
  }

  .search-list-item{
    padding: .8rem 0rem;
  }
  
  .search-list{
    margin-top: 10px!important;
  }

  .search-cancel-icon{
    margin-right: 12px;
  }
}

</style>

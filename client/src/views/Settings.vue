<template>
  <div id="settings">
    <div class="changeSecret">
     <div class="settings-username mb-3">
        {{ currentUser }}
     </div>
      Your profile is {{ changeSecret }}
      <button class="mt-2 settings-btn" @click="changeSecretState">change</button>
    </div>
  </div>
</template>

<script>
import ListService from "../services/ListService"

export default {
    data() {
        return {
            currentUser: this.$store.state.user.username,
            currentId: this.$store.state.user.id,
        }
    },
    computed: {
        changeSecretState(){
            ListService.changeList({
             changeSecretState: this.currentId
            }).then(res => {
                this.$store.dispatch('changeSecretState', res.data)
                this.$router.go()
            })
        },
        changeSecret(){
            if(this.$store.state.user.isProfileSecret){
                return "hidden.";
            }
            else{
                return "public."
            }
        },
    }
}
</script>

<style>
#settings{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 50px);
    padding-bottom: 50px;
}
.changeSecret{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 140px;
}

.settings-username{
    font-weight: bold;
    font-size: 24px;
}

.settings-btn{
    width: 100px;
    height: 40px;
    border: none;
    background: #00ba63;
    color: white;
}
</style>
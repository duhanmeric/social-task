<template>
  <div id="profile">

    <main class="content" v-if="currentId == userId">
      <div class="list-card">
        <div class="list-header">
          <div class="current-username">
            {{ currentUserName }}
          </div>
          <div class="remaining">
            {{ remaining }}
            remaining
          </div>
        </div>
        <div class="list-body">
          <div class="add-list">
            <input type="text" maxlength="50" class="new-list" v-model="addingTodoTitle" placeholder="Enter the job">
            <div class="controls">
              <i class="fas fa-eye-slash lock-icon" v-if="isLocked" @click="checkLock"></i>
              <i class="fas fa-eye lock-icon" v-else @click="checkLock"></i>
              <i class="fas fa-plus add-icon" @click="addTodoDB"></i>
            </div>
          </div>
          <ul class="list-unstyled list-ul m-0">
            <li class="list-item" v-for="list in getFilteredList" :key="list.id">
              <div class="not-editing">
                <div class="side-control d-flex justify-content-between align-items-center">
                  <input type="checkbox" class="choose-box" style="margin-right: 0px;" v-model="list.completed" @click="changeList(list.id)">
                  <i class="fas fa-eye-slash list-lock-icon" v-if="list.locked" @click="changeVisibility(list)"></i>
                  <i class="fas fa-eye list-lock-icon" v-else alt="" @click="changeVisibility(list)"></i>
                </div>
                <div class="unless-choosebox">
                  <div class="list-title" :class="{ completed : list.completed }">
                    {{ list.title }}
                  </div>
                  <div class="list-item-controls">
                    <i class="fas fa-edit list-edit-icon" @click="editList(list)"></i>
                    <i class="fas fa-trash delete-list" @click="deleteList(list.id)"></i>
                  </div>
                </div>
              </div>
              <div class="list-edit-component" v-if="list.editing">
                <h6 class="mb-0">New title?</h6>
                <input type="text" maxlength="50" v-model="changingListTitle">
                <div class="btn-container">
                  <button class="confirm-btn" @click="doneEdit(list)">Confirm</button>
                  <button class="cancel-btn" @click="cancelEdit(list)">Cancel</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="list-footer">
          <div class="extra-control">
            <div class="filter">
              <button class="all-btn" :class="{ active: filter == 'all'}" @click="filter = 'all'">All</button>
              <button class="active-btn" :class="{ active: filter == 'active'}" @click="filter = 'active'">Active</button>
              <button class="completed-btn" :class="{ active: filter == 'completed'}" @click="filter = 'completed'">Done</button>
              <button class="delete-all-btn" @click="deleteAll">Clear</button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <main class="content" v-else>
      <div class="list-card">
        <div class="list-header" :class="{ admin: $store.state.user.isAdmin}">
          <div class="current-username">
            {{ ViewingUser }}
          </div>
          <div class="delete-user" v-if="canChangeAdmin">
            <i class="fas fa-ban delete-list" @click="deleteUser" style="margin-right: 16px"></i>
            <i class="fas fa-chess-queen is-admin" v-if="isUserAdmin" @click="changeAdminState"></i>
            <i class="fas fa-chess-pawn is-admin" v-else @click="changeAdminState"></i>
          </div>
        </div>
        <div class="list-body">
          <ul class="list-unstyled list-ul m-0">
            <li class="list-item" v-for="list in dontGetLocked" :key="list.id">
              <div class="not-editing">
                <div class="unless-choosebox">
                  <div class="list-title" :class="{ completed : list.completed }">
                    {{ list.title }}
                  </div>
                  <div class="list-item-controls" v-if="$store.state.user.isAdmin">
                    <i class="fas fa-trash delete-list" @click="deleteList(list.id)"></i>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="list-footer">
          <div class="extra-control other-viewer text-center w-100">
            <a :href="'/profile/' + currentId" class="back-to-profile mx-auto">
              Back to your profile
            </a>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import ProfileService from "../services/ProfileService"
import ListService from "../services/ListService"

export default {
    data() {
      return {
        userId: this.$route.params.id,
        currentId: this.$store.state.user.id,
        currentEmail: this.$store.state.user.email,
        currentUserName: this.$store.state.user.username,
        profiles: [],
        lists: [],

        isLocked: false,
        addingTodoTitle: "",
        changingListTitle: "",
        filter: "all",

        isSearching: false,
      }
    },
    methods:{
      changeAdminState(){
        ListService.changeList({
          willBeAdmin: this.userId
        }).then(res => {
          for (let i = 0; i < this.profiles.length; i++) {
            if(this.profiles[i].id == this.userId){
              this.profiles[i].isAdmin = res.data.isAdmin
            }
          }
        })
      },
      searchUser(){
        this.isSearching = true;
      },
      checkLock(){
        this.isLocked = !this.isLocked
      },
      changeVisibility(list){
        list.locked = !list.locked
        ListService.changeList({
          changeVisibilityState: list.id,
          UserId: this.userId
        })
      },
      addTodoDB(){
        if(this.addingTodoTitle.trim() == "" || this.addingTodoTitle == ""){
          alert("boş bir todo girdiniz");
          this.addingTodoTitle = "";
          return;
        }
        ListService.postList({
          title: this.addingTodoTitle,
          completed: false,
          editing: false,
          locked: this.isLocked,
          UserId: this.currentId
        }).then(res => {
          this.addTodoLC(res.data)
        })
      },
      addTodoLC(data){
        this.lists.push(data);
        this.addingTodoTitle = "";
      },
      changeList(id){
        ListService.changeList({
          changeCheckState: id,
          UserId: this.userId
        })
      },
      deleteUser(){
        ListService.deleteList({
          DeleteUserId: this.userId
        })
      },
      deleteList(id){
        for (let i = 0; i < this.lists.length; i++) {
          if(id === this.lists[i].id){
            this.lists.splice(i, 1)
          }
        }
        this.deleteListDB(id)
      },
      deleteListDB(id){
        ListService.deleteList({
          ListId: id,
          UserId: this.userId
        })
      },
      editList(list){
        list.editing = true;
        ListService.changeList({
          beingEditing: list.id,
          UserId: this.userId
        })
      },
      doneEdit(list){
        if(this.changingListTitle.trim() == "" || this.changingListTitle == ""){
          alert("boş bir düzenleme girdiniz");
          this.changingListTitle = "";
          return;
        }
        list.title = this.changingListTitle;
        this.changingListTitle = "";
        list.editing = false;
        this.doneEditDB(list);
      },
      doneEditDB(list){
        ListService.changeList({
          ListId: list.id,
          newListTitle: list.title,
          UserId: this.userId
        })
      },
      cancelEdit(list){
        list.editing = false;
        ListService.changeList({
          beingEditing: list.id,
          UserId: this.userId
        })
      },
      deleteAll(){
        ListService.deleteList({
          DeleteAll: this.userId
        })
        this.lists = [];
      }
    },
    computed: {
      canChangeAdmin() {
        for (let i = 0; i < this.$store.getters.getAllUsers.length; i++) {
          if(this.$store.getters.getAllUsers[i].id == this.currentId){
            return this.$store.getters.getAllUsers[i].isAdmin;
          }
        }
      },
      isUserAdmin(){
        for (let i = 0; i < this.profiles.length; i++) {
          if(this.profiles[i].id == this.userId){
            return this.profiles[i].isAdmin;
          }
        }
      },
      dontGetLocked(){
        for (let i = 0; i < this.$store.getters.getAllUsers.length; i++) {
          if(this.$store.getters.getAllUsers[i].isAdmin){
            return this.lists;
          }
          else{
            return this.lists.filter(list => !list.locked)
          }
        }
      },
      remaining(){
        return this.lists.filter(list => !list.completed).length
      },
      ViewingUser(){
        for (let i = 0; i < this.profiles.length; i++) {
          if(this.profiles[i].id == this.userId){
            return this.profiles[i].username;
          }
        }
      },
      getFilteredList(){
        if(this.filter == 'all'){
          return this.lists
        }
        else if(this.filter == 'active'){
          return this.lists.filter(list => !list.completed)
        }
        else if(this.filter == 'completed'){
          return this.lists.filter(list => list.completed)
        }
      },
    },
    created(){
      ListService.getList({
        retrieveList: this.userId,
      })
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          this.lists.push(res.data[i]);
        }
      })


      ProfileService.getOtherUsers({
        retrieveEmail: this.currentEmail,
      })
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          this.profiles.push(res.data[i]);
        }
        this.$store.dispatch("makeAllUsers", res.data)
      })
    }
}
</script>

<style>
#profile{
  background-color: #f8f8f8;
  height: calc(100vh - 50px);
}

.content{
  width: 100%;
  min-height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.list-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 28px;
}

.list-header .current-username{
  font-weight: 700;
}

.list-card{
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border: 1px solid rgb(229, 229, 229);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgb(0 0 0 / 50%) 0px 5px 23px -18px;
  font-family: 'Roboto', sans-serif;
}

.list-body{
  border-top: 1px solid rgb(229, 229, 229);
}

.add-list{
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(229, 229, 229);
  padding: 14px 28px;
}

.new-list{
  border: none;
  outline: none;
  margin-right: auto;
  width: 75%;
}

.lock-icon{
  margin-right: 16px;
  cursor: pointer;
  font-size: 20px;
}

.add-icon{
  cursor: pointer;
  font-size: 20px;
}

.list-ul{
  overflow-y: auto;
  overflow-x: hidden;
  height: 332px;
  padding: 0 16px;
}

.list-item{
  padding: 16px 0;
  border-bottom: 1px solid rgb(229, 229, 229);
}

.list-title{
  word-break: break-all;
}

.not-editing{
  display: flex;
  align-items: center;
}

.list-item:last-child{
  border: none;
}

.unless-choosebox{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
}

.list-lock-icon{
  margin: 0 0px 0 10px;
  cursor: pointer;
}

.delete-list{
  cursor: pointer;
}

.list-edit-icon{
  margin-right: 10px;
}

.is-admin{
  cursor: pointer;
}

.list-item-controls{
  display: none;
}

.list-item-controls i{
  font-size: 18px;
  cursor: pointer;
}

.list-item:hover .list-item-controls{
  display: flex;
}

.completed{
  text-decoration: line-through;
  font-style: italic;
  color: gray;
}

.list-edit-component{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid #aaa;
  padding: 10px 4rem;
  margin-top: 14px;
  border-radius: 7px;
}

.list-edit-component input{
  outline: none;
  margin: 16px 0;
  width: 100%;
}

.list-edit-component .btn-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.confirm-btn{
  background-color: #00ba63;
  border: none;
  color: white;
  padding: 0.3rem .8rem;
}

.cancel-btn{
  background-color: #F34444;
  border: none;
  color: white;
  padding: 0.3rem .8rem;
}

.list-footer{
  width: 100%;
  background: white;
  padding: 14px 28px;
  border-top: 1px solid rgb(200, 200, 200);
}

.filter{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter button{
  width: 75px;
  padding: .3rem 0;
  background-color: transparent;
  border: 1px solid #777;
  font-size: 14px;
}

.filter button.active{
  background: #00ba63;
  color: white;
  border: 1px solid transparent;
}

.filter button:nth-of-type(4){
  background: #F34444;
  color: white;
  border: 1px solid transparent;
}

.back-to-profile{
  text-decoration: none;
  color: black;
}

.back-to-profile:hover{
  color: black;
  text-decoration: underline;
}

@media screen and (max-width:576px) {
  .content{
    min-height: calc(100vh - 50px);
    padding-bottom: calc(50px);
    overflow: hidden;
  }

  .list-card{
    max-width: 280px;
  }

  .list-body{
    height: 320px;
  }

  .list-ul{
    height: 272px;
  }

  .lock-icon{
    margin-right: 10px;
  }

  .controls img{
    width: 20px;
    height: 20px;
  }

  .list-item{
    padding: 14px 0;
  }

  .filter button{
    width: 100%;
    border-right: none;
  }

  .list-edit-component{
    padding: 20px 1rem;
  }

  .confirm-btn,.cancel-btn{
    font-size: 14px;
  }

  .back-to-profile{
    font-size: 14px;
  }

  .list-footer{
    padding: 0;
    border-top: none;
  }

  .add-list{
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 14px;
    padding-left: 14px;
  }

  .list-header{
    padding: 12px 14px;
  }

  .unless-choosebox{
    padding-right: 0;
  }

  .other-viewer{
    height: 40px;
    border-top: 1px solid rgb(229, 229, 229);
    display: flex;
    justify-content: center;
    align-items: center;
  }

}

</style>

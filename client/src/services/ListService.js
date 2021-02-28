import Api from './Api'

export default {
    getList (info){
      return Api().get(`/profile/${info.retrieveList}`)
    },
    postList (info){
      return Api().post(`/profile/${info.UserId}`, info)
    },
    changeList (info) {
      if(info.hasOwnProperty("changeCheckState")){
        return Api().patch(`/profile/${info.UserId}`, info)
      }
      else if(info.hasOwnProperty("beingEditing")){
          return Api().patch(`/profile/${info.UserId}`, info)
      }
      else if(info.hasOwnProperty("newListTitle")){
        return Api().patch(`/profile/${info.UserId}`, info)
      }
      else if(info.hasOwnProperty("changeVisibilityState")){
          return Api().patch(`/profile/${info.UserId}`, info)
      }
      else if(info.hasOwnProperty("changeSecretState")){
        return Api().patch(`/profile/${info.UserId}`, info)
      }
      else if(info.hasOwnProperty("willBeAdmin")){
        return Api().patch(`/profile/${info.willBeAdmin}`, info)
      }
    },
    deleteList(info){
      if(info.hasOwnProperty("DeleteAll")){
        return Api().delete(`/profile/${info.DeleteAll}`, { data: { deleteAll: info.DeleteAll }})
      }
      else if(info.hasOwnProperty("ListId")){
        return Api().delete(`/profile/${info.UserId}`, { data: { deleteOne: info.ListId }})
      }
      else if(info.hasOwnProperty("DeleteUserId")){
        return Api().delete(`/profile/${info.DeleteUserId}`, { data: { deleteUser: info.DeleteUserId }})
      }
    },
}

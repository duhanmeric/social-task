import Api from './Api'

export default {
    getOtherUsers ({ retrieveEmail }){
        return Api().get(`/profile/${retrieveEmail}`)
    },
}

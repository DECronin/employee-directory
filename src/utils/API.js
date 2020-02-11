import axios from "axios";

export default {
  mergeDatabase: function() {
    return axios.get("https://randomuser.me/api/?results=25&nat=US")
  }
}
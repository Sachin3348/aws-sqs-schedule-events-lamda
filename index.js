const axios = require('axios')
const TARGET_URL = "https://06c7-103-186-40-223.ngrok-free.app/scheduled-event/schedule"
exports.handler = async (event) => {
      
    try{
    
      const response = await axios.post(TARGET_URL, {})
      console.log({response})
      return {
        "statusCode": 200,
        "data": JSON.stringify(response.data)
      }
      
    } catch(error){
      console.log("Error while scheduling events", error?.response?.data?.message || error?.message)
    }
};

console.log(process.env.TARGET_URL)

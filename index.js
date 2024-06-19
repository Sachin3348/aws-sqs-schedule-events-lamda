const axios = require('axios')

exports.handler = async (event) => {
      
    try{
    
      const response = await axios.post(process.env.TARGET_URL, {})
      console.log({response})
      return {
        "statusCode": 200,
        "data": JSON.stringify(response.data)
      }
      
    } catch(error){
      console.log("Error while scheduling events", error?.response?.data?.message || error?.message)
    }
};


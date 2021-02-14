//Make a HTTP Request with async await. 
class LibraryHTTP{      

    //Make a HTTP get request
    async get(url){        
        const response = await fetch(url)
        const data1 = await response.json()
        return data1           
    } 

    //Make a HTTP POST request
    async post(url, data){
        const response = await fetch(url, {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)            
        })
        const data2 = await response.json()  //variable "data" is also declared and returned from the get request. to different them, data1,data2 etc is used.
        return data2
    }    

    //Make a PUT Request
    async put(url, data){        
        const response = await fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const data3 = response.json()
        return data3
    }        

    // Make an HTTP DELETE Request 
    async delete(url,){            
        const response = await fetch(url,{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            }            
        })
        const data4 = await 'Resource deleted...'
        return data4
    }
}


export const http = new LibraryHTTP()
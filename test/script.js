


// fetching data :
/*
function fetchData(url){
    fetch(url).then(response => {
        if( !response.ok){
            throw new error("network response failed");
        }
        return response.json();
    }).then(data => {
        console.log('fetched Data' ,data);
    }).catch(error => {
        console.error("error fetching data :" ,error);
    })
}
fetchData('https://jsonplaceholder.typicode.com/posts')

*/
// Axios :
/*
import axios from 'axios'
//get :
async function axiosget (url){
    try{
        const response = await axios.get(url) ;
        console.log('fetched Data' ,response.data);
    }
    catch(error){
        console.error("error fetching data :" ,error)
    }
}
axiosget('https://jsonplaceholder.typicode.com/posts')

//post : 
function postData(url,data){
    return fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        }).then(response => response.json())
        .then(data => {console.log("response" , data)
            return data 
        }).catch(error => {
            console.error("error",error)
            throw new error();
        })
}

postData('https://jsonplaceholder.typicode.com/posts' ,{
    id : 4,
    username : 'Rafi',
})

*/

// put : 
function updateData(url,updatedData){
    return fetch(url,
        {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(updatedData)
        }
    ).then(response =>{
        console.log("response status : " , response.status)
        if(!response.ok){
            throw new Error("this is an error" , response.status)
        }
        return response.json().catch(() => ({}));
    })
    .then(data => {console.log("response updatedData : " , data)
        return data 
    }).catch(error => {
        console.error("error",error)
        throw new error();
    })
}








const updatedperson = {
    userId: 10,
    id: 99,
    title: 'temporibus sit alias delectus eligendi possimus magni',
    body: 'quo deleniti praesentium dicta non quod\n' +
      'aut est molestias\n' +
      'molestias et officia quis nihil\n' +
      'itaque dolorem quia',
    text : "svzvizbl"
}

updateData('https://reqres.in/api/users/2',updatedperson).then(response => {
    if (response && response.id) {
      console.log('Updated successfully:', response);
    } else {
      console.log('Unexpected response structure:', response);
    }
})




  


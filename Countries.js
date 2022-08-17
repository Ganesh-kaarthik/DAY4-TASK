//make a http request

//create an instance of the request 
let xhr=new XMLHttpRequest();

//Open your request 
xhr.open("GET","https://restcountries.com/v2/all");

//onload event 
xhr.onload=function(){
    console.log("************Response Received************");
    console.log(this.responseText);
    let data=JSON.parse(xhr.responseText)
    console.log(data)
    
    
//Loop throigh the data and print it on the console
for(let i=0;i<data.length;i++){
   console.log(`
   Country: ${data[i].name}; 
   Region: ${data[i].region};
   Sub region: ${data[i].subregion};
   Population: ${data[i].population};
   `)
}
    
}

//send the request
xhr.send();

window.onload = ()=>{
    const ejsData = document.getElementById('ejsData').innerText;
    if(ejsData=='get'){
        fetch('get.txt')
        .then(response => response.text())
        .then((data) => {
            document.getElementById('tutorial').innerHTML = data;
        })
    }
    if(ejsData=='post'){
        fetch('post.txt')
        .then(response => response.text())
        .then((data) => {
            document.getElementById('tutorial').innerHTML = data;
        })
    }
}

//To press Enter button to send the request. **This is an extra function
document.addEventListener("keypress", function(event) {
    const selected = document.querySelector('input[name="selected"]:checked').value;
    if(selected){
        if (event.key === "Enter") {
            event.preventDefault();
            const ejsData = document.getElementById('ejsData').innerText; //getting the ejs passed data from html
          if(ejsData=='get'){
              fetch(`https://lbunodejsendpoint.azurewebsites.net/${document.getElementById('param1').value}/${document.getElementById('param2').value}`)
              .then(res => {
                  if (res.ok) return res.json();
                  return res.json().then(res => {throw new Error(res.error)})
                })
              .then((data)=>{
                  const result = document.getElementById('result');
                  result.value = `Brand: ${data.brand} `+'\n'+ `Model: ${data.model}` 
                  
              }).catch((error)=>{
                  result.value = `Error sending request to server. Please fill up the fields correctly and try again.`;
              })
          }
          if(ejsData=='post'){
              fetch("https://lbunodejsendpoint.azurewebsites.net/", {
              method: 'POST',
              headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
              },
              body: JSON.stringify({brand:document.getElementById('param1').value, watt:document.getElementById('param2').value})
              }).then(res => {
                  if (res.ok) return res.json();
                  return res.json().then(res => {throw new Error(res.error)})
              }).then((res)=>{
                  const result = document.getElementById('result');
                  result.value = res.message+'\n'+`Inverter Type: ${res.brand} `+'\n'+ `Required Watt: ${res.watt}`
         
              }).catch((error)=>{
                  result.value = `Error sending request to server. Please fill up the fields correctly and try again.`;
              })
          }
          }
    }
  });

function sendData(){
    const ejsData = document.getElementById('ejsData').innerText; //getting the ejs passed data from html
    if(ejsData=='get'){
        fetch(`https://lbunodejsendpoint.azurewebsites.net/${document.getElementById('param1').value}/${document.getElementById('param2').value}`)
        .then(res => {
            if (res.ok) return res.json();
            return res.json().then(res => {throw new Error(res.error)})
          })
        .then((data)=>{
            const result = document.getElementById('result');
            result.value = `Brand: ${data.brand} `+'\n'+ `Model: ${data.model}` 
            
        }).catch((error)=>{
            result.value = `Error sending request to server. Please fill up the fields correctly and try again.`;
        })
    }
    if(ejsData=='post'){
        fetch("https://lbunodejsendpoint.azurewebsites.net/", {
        method: 'POST',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({brand:document.getElementById('param1').value, watt:document.getElementById('param2').value})
        }).then(res => {
            if (res.ok) return res.json();
            return res.json().then(res => {throw new Error(res.error)})
        }).then((res)=>{
            const result = document.getElementById('result');
            result.value = res.message+'\n'+`Inverter Type: ${res.brand} `+'\n'+ `Required Watt: ${res.watt}`
   
        }).catch((error)=>{
            result.value = `Error sending request to server. Please fill up the fields correctly and try again.`;
        })
    }
}
function selectedRadio(){
    const selected = document.querySelector('input[name="selected"]:checked').value;
    
    if(selected=='params'){
        document.getElementById('codeBox').value = `const express = require("express");`+'\n'+`const app  = express();`+'\n'+`app.listen(Port,()=>{`+'\n'+`    console.log('Server has been started at port ____')`+'\n'+`})`+'\n'+`app.get('/:brand/:watt',(req,res)=>{`+'\n'+`    if(req.params.brand=='longi'){`+'\n'+`    //Code to solve logical operations`+'\n'+`    }`+'\n'+`    res.send({"brand":value1,"model":value2});`+'\n'+`})`;
        document.getElementById('test').innerHTML = '<label for="param1">https://lbunodejsendpoint.azurewebsites.net/</label> <input type="text" id="param1" size="3"> <label for="param2">/</label> <input type="number" id="param2" style="width: 3.5em">';
        document.getElementById('note').value = `Enter the value in the respective fields to send GET request for the above API code.`+'\n'+`*For the first box use brand name: Longi/Trina/JASolar`+'\n'+`*For the second box use watt rating: 400/500/600`
    }
    if(selected=='query'){
        document.getElementById('codeBox').value = `const express = require("express");`+'\n'+`const app  = express();`+'\n'+`app.listen(Port,()=>{`+'\n'+`    console.log('Server has been started at port ____')`+'\n'+`})`+'\n'+`app.get('/?',(req,res)=>{`+'\n'+`    if(req.query.brand=='longi'){`+'\n'+`    //Code to solve logical operations`+'\n'+`    }`+'\n'+`    res.send({"brand":value1,"model":value2});`+'\n'+`})`;
        document.getElementById('test').innerHTML = '<label for="param1">https://lbunodejsendpoint.azurewebsites.net/?brand=</label> <input type="text" id="param1" size="3">&watt=</input> <input type="number" id="param2" style="width: 3.5em">'
        document.getElementById('note').value = `Enter the value in the respective fields to send GET request for the above API code.`+'\n'+`*For the first box use brand name: Longi/Trina/JASolar`+'\n'+`*For the second box use watt rating: 400/500/600`
    }
    if(selected=='body'){
        document.getElementById('codeBox').value = `const express = require("express");`+'\n'+`const app  = express();`+'\n'+`app.listen(Port,()=>{`+'\n'+`    console.log('Server has been started at port ____')`+'\n'+`})`+'\n'+`app.post('/',(req,res)=>{`+'\n'+`    if(req.body.brand!='' && req.body.watt!=''){`+'\n'+`    //Code to solve logical operations`+'\n'+`    }`+'\n'+`    res.send({"message":value1});`+'\n'+`})`;
        document.getElementById('test').innerHTML = '<label for="param1">Solar Inverter Type:&#160</label> <input type="text" id="param1" size="6"> <label for="param2">&#160&#160&#160Required Watt:&#160 </label> <input type="number" id="param2" style="width: 5.5em">'
        document.getElementById('note').value = `HTML forms are generally used to send data to server using Post method.`+'\n'+`The values of the form are sent as body of the request to the server.`+'\n'+`Fill the respective forms to send data to server for the API written above.`+'\n'+`*Solar Inverter Types: Grid-tied, Off-grid, Hybrid.`+'\n'+`*Required Wattage: any wattage between 1000 && 10000.`
    }
}


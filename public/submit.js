function sendData(){
    const ejsData = document.getElementById('ejsData').innerText; //getting the ejs passed data from html
    if(ejsData=='get'){
        fetch(`http://localhost:5000/${document.getElementById('param1').value}/${document.getElementById('param2').value}`).then(res=>res.json()).then((data)=>{
            const result = document.getElementById('result');
            result.value = `Brand: ${data.brand} `+'\n'+ `Model: ${data.model}` 
        })
    }
    if(ejsData=='post'){
        fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({brand:document.getElementById('param1').value, watt:document.getElementById('param2').value})
        }).then(res => res.json())
        .then((res)=>{
            const result = document.getElementById('result');
            if(res.message=='NO'){
                result.value = `Please provide the information correctly.` 
            }else{
                result.value = res.message+'\n'+`Brand: ${res.brand} `+'\n'+ `Model: ${res.watt}`
            }
             
        });
    }
}
function selectedRadio(){
    const selected = document.querySelector('input[name="selected"]:checked').value;
    
    if(selected=='params'){
        document.getElementById('codeBox').value = `const express = require("express");`+'\n'+`const app  = express();`+'\n'+`app.listen(Port,()=>{`+'\n'+`    console.log('Server has been started at port ____')`+'\n'+`})`+'\n'+`app.get('/:brand/:watt',(req,res)=>{`+'\n'+`    if(req.params.brand=='longi'){`+'\n'+`    //Code to solve logical operations`+'\n'+`    }`+'\n'+`    res.send({"brand":value1,"model":value2});`+'\n'+`})`;
        document.getElementById('test').innerHTML = '<label for="param1">http://localhost:5000/&#160</label> <input type="text" id="param1" size="3"> <label for="param2">&#160/&#160</label> <input type="number" id="param2" style="width: 3.5em">';
        document.getElementById('note').value = `Enter the value in the respective fields to send GET request for the above API code.`+'\n'+`*For the first box use brand name: Longi/Trina/JASolar`+'\n'+`*For the second box use watt rating: 400/500/600`
    }
    if(selected=='query'){
        document.getElementById('codeBox').value = `const express = require("express");`+'\n'+`const app  = express();`+'\n'+`app.listen(Port,()=>{`+'\n'+`    console.log('Server has been started at port ____')`+'\n'+`})`+'\n'+`app.get('/?',(req,res)=>{`+'\n'+`    if(req.query.brand=='longi'){`+'\n'+`    //Code to solve logical operations`+'\n'+`    }`+'\n'+`    res.send({"brand":value1,"model":value2});`+'\n'+`})`;
        document.getElementById('test').innerHTML = '<label for="param1">http://localhost:5000/?brand=&#160</label> <input type="text" id="param1" size="3">&#160&watt=&#160</input> <input type="number" id="param2" style="width: 3.5em">'
        document.getElementById('note').value = `Enter the value in the respective fields to send GET request for the above API code.`+'\n'+`*For the first box use brand name: Longi/Trina/JASolar`+'\n'+`*For the second box use watt rating: 400/500/600`
    }
    if(selected=='body'){
        document.getElementById('codeBox').value = `const express = require("express");`+'\n'+`const app  = express();`+'\n'+`app.listen(Port,()=>{`+'\n'+`    console.log('Server has been started at port ____')`+'\n'+`})`+'\n'+`app.post('/',(req,res)=>{`+'\n'+`    if(req.body.brand!='' && req.body.watt!=''){`+'\n'+`    //Code to solve logical operations`+'\n'+`    }`+'\n'+`    res.send({"message":value1});`+'\n'+`})`;
        document.getElementById('test').innerHTML = '<label for="param1">Solar Inverter Type:&#160</label> <input type="text" id="param1" size="6"> <label for="param2">&#160&#160&#160Required Watt:&#160 </label> <input type="number" id="param2" style="width: 5.5em">'
        document.getElementById('note').value = `HTML forms are generally used to send data to server using Post method.`+'\n'+`The values of the form are sent as body of the request to the server.`+'\n'+`Fill the respective forms to send data to server for the API written above.`+'\n'+`*Solar Inverter Types: Grid-tied, Off-grid, Hybrid.`+'\n'+`*Required Wattage: any numerical value.`
    }
}


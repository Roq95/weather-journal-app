/* Global Variables */
let apiKey='5d58b8e0455ecffeb0b4847518f21537';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const generate=document.getElementById('generate')
generate.addEventListener('click',async()=>{
    try{

        let zipNO=document.getElementById('zip').value;
        let feelings=document.getElementById('feelings').value;
        
        const url =`https://api.openweathermap.org/data/2.5/weather?zip=${zipNO}&appid=${apiKey}`
        const response=document=await fetch(url).then(res=>res.json())
        const temp = await response.main.temp;
        console.log(temp);

        await fetch('/addWeather',{
            method:'POST',

            body:JSON.stringify({
                newDate,
                temp,
                feelings
            })
            })

            const resData=await fetch('/getWeather').then(res=>res.json())
            document.getElementById('date').innerHTML =resData.date;
            document.getElementById('temp').innerHTML =resData.temp;
            document.getElementById('feelings').innerHTML =resData.feelings;

    }catch(error){
        console.error('Error' ,error)
    }


})






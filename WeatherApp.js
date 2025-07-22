let APIKEY='1c5b539a2bb0a6c6eb8770e413e08221'
let cityName="soron"
let btn=document.querySelector(`#searchBtn`)

btn.addEventListener("click",()=>{
    let city=document.querySelector(`#location`).value
    weatherFinding(city)
city= city.replace(/\s+$/,'')
})



async function weatherFinding(city)
{
    try
    {
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
        const data= await response.json()
        if(data.cod!==400)
        {
            setdata(data)
        }
        else
        {
            alert("Error")
            weatherFinding(cityName)
        }
    }
    catch(er)
    {
        console.log(`error = ${er}`)
        weatherFinding(cityName)

    }
}
weatherFinding(cityName)



function setdata(data)
{
    try
    {
        let Location=document.querySelector(`#location-name`)
        let temp=document.querySelector(`#temp`)
        let time=document.querySelector(`#time`)
        let day= document.querySelector(`#day`)
        let wind= document.querySelector(`#wind`)
        let hum= document.querySelector(`#humidity`)
        let emg=document.querySelector(`#emogi`)
        let cnd=document.querySelector(`#condition`)

        Location.textContent=data.name
        temp.textContent= `${Math.floor(data.main.temp)} °C`
        time.textContent= `${new Date().toLocaleTimeString()}`;
        day.textContent= `${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`;
        wind.textContent=`Wind :- ${((data.wind.speed)*3.6).toFixed(2)} km/h`
        hum.textContent=`Humidity :- ${data.main.humidity}%`
        cnd.textContent=`${data.weather[0].main}`
        emg.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        
    }
    catch(er)
    {
        alert(`Error :${er}`)
        weatherFinding(cityName)
    }

}

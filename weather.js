const ele = document.getElementById('input1')
const ele1 = document.getElementById('butt')
let cityname = document.getElementById('city1')
let temp = document.getElementById('temp')
let time = document.getElementById('ct')
let type = document.getElementById('type')
let prec = document.getElementById('prec')
let humid = document.getElementById('humidity')
let wind = document.getElementById('wind')
async function getdata(city){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=e857b69a0de34dac88b113333240703&q=${city}&aqi=yes`);
    return await promise.json();
}
ele1.addEventListener('click',async () => {
    cityname.textContent = '';
    temp.textContent='';
    time.textContent = '';
    type.textContent = '';
    prec.textContent = '';
    humid.textContent = '';
    wind.textContent = '';
    const city = ele.value;
    const result = await getdata(city);
    console.log(result);
    const string = result.location.name
    const string1 = result.location.country
    console.log(string)
    cityname.innerText = `${string} , ${string1}` + " , " +  result.current.temp_c + ' °C '
    temp.innerText += 'Feels like : ' + result.current.feelslike_c + ' °C '
    time.innerText += 'Time : ' + result.location.localtime
    const string2 = result.current.condition.text
    type.innerText = `${string2}`
    prec.innerText = 'Precipitation : ' + result.current.precip_in + ' % '
    wind.innerText = 'Wind : ' + result.current.wind_kph + ' kmph '
    humid.innerText = 'Humidity : ' + result.current.humidity
})

//http://api.weatherapi.com/v1/current.json?key=e857b69a0de34dac88b113333240703&q=London&aqi=yes

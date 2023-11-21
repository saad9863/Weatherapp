

let City="New York";
const apiKey="8a75173c3bbe7b7dbee6c35205f6b2ad";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";



async function checkWeather(){


 try{
   const response=await fetch(apiUrl + `&appid=${apiKey}`+ `&q=${City}`);

   if(!response.ok){
    alert("Please enter correct city Name \n ************* By Mohammed Saad Khan **************");
    const errorMessage= await response.json();
    console.error('API Error:', errorMessage.message);
    return;
   }

    var data= await response.json();

    
  
    console.log(data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= data.main.temp+'°C';
    document.querySelector(".humidity").innerHTML= data.main.humidity + '%';
    document.querySelector(".wind").innerHTML= data.wind.speed + ' km/h';

    var weatherImage = document.getElementById('weatherimage');
    var cardElement = document.getElementById('weathercard')

    if (data.weather && data.weather.length > 0) {
    var weatherMain = data.weather[0].main;

  
    switch (weatherMain) {
      case 'Clouds':
        weatherImage.src = 'images/clouds.png';
        cardElement.style.background = 'linear-gradient(135deg, #a8c0ff, #3f2b96)';
        break;
      case 'Clear':
        weatherImage.src = 'images/clear.png';
        cardElement.style.background = 'linear-gradient(135deg, #ffe000, #799f0c)';
        break;
      case 'Wind':
        weatherImage.src = 'images/wind.png';
        cardElement.style.background = 'linear-gradient(135deg, #d9a7c7, #fffcdc)';
        break;
      case 'Snow':
        weatherImage.src = 'images/snow.png';
        cardElement.style.background = 'linear-gradient(135deg, #d3c8ec, #a8e0ff)';
        break;
      case 'Rain':
        weatherImage.src = 'images/rain.png';
        cardElement.style.background = 'linear-gradient(135deg, #819ff5, #d3c8ec)';
        break;
      case 'Mist':
        weatherImage.src = 'images/mist.png';
        cardElement.style.background = 'linear-gradient(135deg, #cccccc, #f2f2f2)';
        break;
      case 'Drizzle':
        weatherImage.src = 'images/drizzle.png';
        cardElement.style.background = 'linear-gradient(135deg, #c4e17f, #4ca2cd)';
        break;
     
      default:
        
        weatherImage.src = 'images/clear.png';
        cardElement.style.background = 'linear-gradient(135deg, #00feba, #5b548a)';
        break;
    }
   } else {
    
    console.error('Invalid data structure in the API response');
    }
 }catch(error){
  
  console.error('Error:',error.message);
 }
}



document.getElementById('searchButton').addEventListener('click', function() {
  const locationInput = document.getElementById('locationinput');

  if (locationInput.value.trim() !== '') {
    City = locationInput.value;
    console.log('City:', City);

    locationInput.value = '';

    checkWeather();
  } else {
    alert("Enter City Name Please \n************* By Mohammed Saad Khan **************");
    console.log('No city name entered ');
    
  }
 
});


checkWeather();
 


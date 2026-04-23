require('dotenv').config();
const fs = require('fs').promises;

async function getCityWeather(city) {
  const API_KEY = process.env.OPENWEATHER_API_KEY;
  // 도시 이름에 공백이 있을 수 있으므로 encodeURIComponent를 사용합니다.
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${city} 데이터를 가져오지 못했습니다.`);
    
    const data = await response.json();

    const weatherInfo = {
      city: data.name,
      country: data.sys.country, // 국가 코드 추가 (예: KR, PK, US)
      temp: data.main.temp,
      description: data.weather[0].description,
      collectedAt: new Date().toLocaleString()
    };

    // 파일명에서 특수문자나 공백을 제거하여 안전하게 저장
    const safeFileName = city.split(',')[0].trim(); 
    await fs.writeFile(`${safeFileName}_weather.json`, JSON.stringify(weatherInfo, null, 2));
    
    return weatherInfo; // 결과 반환
  } catch (error) {
    console.error(`[${city}] 에러:`, error.message);
    return null;
  }
}

async function runBatchWeather() {
  // 요청하신 지역 리스트
  const cities = [
    'Pleasanton',
    'Seoul',
    'Islamabad, Pakistan' // 상세 주소 대신 도시명과 국가명으로 검색하는 것이 API 정확도가 높습니다.
  ];

  console.log("--- multi region weather collection ---");

  // [비동기 핵심] 여러 도시의 요청을 동시에 보냅니다.
  const weatherPromises = cities.map(city => getCityWeather(city));
  const allResults = await Promise.all(weatherPromises);

  console.log("--- 수집 결과 요약 ---");
  allResults.forEach(res => {
    if (res) {
      console.log(`📍 ${res.city} (${res.country}): ${res.temp}°C, ${res.description}`);
    }
  });
}

runBatchWeather();
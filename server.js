require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs').promises; // 파일을 읽기 위해 추가
const app = express();
const port = 3000;

app.use(cors());

async function getWeatherData(city) {
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod !== 200) throw new Error(data.message);
        
        return {
            city: data.name,
            lat: data.coord.lat,
            lon: data.coord.lon,
            temp: data.main.temp,
            desc: data.weather[0].description
        };
    } catch (err) {
        console.error(`[${city}] error:`, err.message);
        return null;
    }
}

app.get('/api/weather-map', async (req, res) => {
    try {
        // 1. cities.json 파일 읽기
        const data = await fs.readFile('./cities.json', 'utf8');
        const cities = JSON.parse(data);
        
        console.log(`${cities.length} cites data collecting now...`);
        
        // 2. 데이터 수집
        const weatherPromises = cities.map(city => getWeatherData(city));
        const results = await Promise.all(weatherPromises);
        
        const validResults = results.filter(item => item !== null);
        res.json(validResults);
    } catch (err) {
        console.error("파일 읽기 에러:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
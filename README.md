# Learning Node.js: Fundamental Concepts & Architecture
This document outlines the core architecture and practical applications of Node.js, focusing on its high-concurrency model and ecosystem.
## 1. Overview
   
   Node.js is a cross-platform, open-source JavaScript runtime environment built on the Chrome V8 engine. It enables the execution of JavaScript server-side, outside the traditional web browser environment. By translating JavaScript directly into machine code, it achieves high performance for network-intensive applications.
   
---
## 2. Key Architecture & Features
   
   ### 1) Asynchronous & Non-Blocking I/O
   The defining characteristic of Node.js is its non-blocking nature. Traditional servers create a new thread for every request, which can lead to high memory consumption. In contrast, Node.js initiates a request and immediately moves to the next task. Once the initiated task (e.g., a database query or file read) is complete, it triggers a callback, ensuring the server never stays idle.
   
   
   ### 2) Single-Threaded Event Loop
      :Node.js operates on a single-threaded model but remains highly scalable through the Event Loop.

      Mechanism: It offloads heavy I/O tasks to the system kernel or a background thread pool (managed by libuv).

      Efficiency: This prevents the "thread-per-connection" overhead, allowing a single server to handle thousands of concurrent connections with minimal resources.
   
     
   
   ### 3) NPM (Node Package Manager):
   Node.js includes NPM, the world's largest ecosystem of open-source libraries. This modular approach allows developers to integrate third-party tools seamlessly, significantly accelerating the development lifecycle.

---
## 3. Core Concepts
   
V8 Engine	: Google's high-performance open-source engine that compiles JavaScript into native machine code.
   
Libuv : A multi-platform C library that handles the event loop, thread pool, and asynchronous I/O operations.

Non-blocking I/O	: The ability to handle multiple requests without waiting for one to finish. 

NPM : The world's largest ecosystem of open-source libraries. 세계 최대 규모의 오픈 소스 라이브러리 생태계입니다.
---
## 4. Practical Project: Global Weather Monitoring Map
This project demonstrates Node.js core concepts by building a real-time dashboard that fetches and visualizes global meteorological data.

### 1) Implementation Details
Real-time Data Pipeline: Utilizes the OpenWeather API to retrieve live data for 20+ global cities.

Asynchronous Parallelism: Employs Promise.all to execute multiple API requests concurrently, showcasing efficient non-blocking I/O management.

Data Decoupling: Separates data from logic by managing city lists in an external cities.json file, improving maintainability.

Full-stack Integration: Connects an Express.js backend with a Leaflet.js frontend for geographic data visualization.

### 2) Project Structure
server.js: The Express server responsible for API routing and data fetching.

cities.json: The externalized data source containing coordinates for monitored cities.

index.html: The interactive map interface utilizing Leaflet.js for the UI.

.env: Secure storage for sensitive API keys and environment variables.

### 3) Execution Guide

```
# 1. Install necessary dependencies
  npm install express cors dotenv`

# 2. Launch the backend server
node server.js

# 3. Access the interface
Open index.html in a web browser to view the real-time map.

cities.json: The externalized data source containing coordinates for monitored cities.

index.html: The interactive map interface utilizing Leaflet.js for the UI.

.env: Secure storage for sensitive API keys and environment variables.```

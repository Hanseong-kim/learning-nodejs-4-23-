# learning-nodejs-4/23-

1. What is node.js
   Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. It is built on the Chrome V8
   JavaScript engine, allowing you to execute JavaScript code outside of a web browser.
   Node.js는 크로스 플랫폼을 지원하는 오픈 소스 자바스크립트 런타임 환경입니다. Chrome V8 자바스크립트 엔진으로 빌드되어, 웹 브라우저 밖에서도 자바스크립트 코드를 실행할 수 있게 해줍니다.
2. Key Architecture & feature
   1). Asynchronous & Event-Driven: All APIs of the Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits
      for an API to return data. 
    비동기 및 이벤트 기반: Node.js 라이브러리의 모든 API는 비동기 방식이며, 즉 논블로킹(Non-blocking)으로 동작합니다. 이는 기본적으로 Node.js 기반 서버가 데이터 반환을 위해 API를 기다리며 멈춰 있지 않는다는 것을 의미합니다.(일반적인 프로그램은 데이터베이스에서 데이터를 가져오거나 파일을 읽을 때, 그 작업이 끝날 때까지 다음 코드를 실행하지 않고 기다립니다(Blocking). 하지만 Node.js는 작업을 요청해두고 바로 다음 코드를 실행합니다. 작업이 완료되면 '이벤트'가 발생하여 미리 등록해둔 콜백 함수를 실행하는 방식입니다.)
   2). Single-Threaded but Highly Scalable: Node.js uses a single-threaded model with event looping. The event loop allows Node.js to perform non-blocking I/O
      operations by offloading tasks to the system kernel whenever possible.
      싱글 스레드 기반의 높은 확장성: Node.js는 이벤트 루프를 동반한 싱글 스레드 모델을 사용합니다. 이벤트 루프는 작업을 시스템 커널로 넘김으로써 Node.js가 논블로킹 I/O 작업을 수행할 수 있게 합니다.
   (설명: Node.js는 한 번에 하나의 작업만 처리하는 '메인 스레드' 하나로 운영됩니다. "일손이 하나인데 어떻게 많은 요청을 처리하나?"라는 의문이 생길 수 있는데, 그 비결은 **이벤트 루프(Event Loop)**에 있습니다.
작동 방식: 무겁고 복잡한 작업(파일 입출력, 네트워크 요청 등)은 Node.js가 직접 하지 않고 OS(시스템 커널)나 내부의 워커 스레드 풀에 맡겨버립니다. 메인 스레드는 오직 "누가 작업을 끝냈나?"만 체크하고 결과만 전달하는 '관리자' 역할만 수행하기 때문에 매우 빠르고 효율적입니다.
장점: 스레드를 수천 개씩 만드는 복잡한 멀티스레딩 프로그래밍 없이도, 수많은 동시 접속자를 처리할 수 있는 높은 확장성을 가집니다.)
   
   3). NPM (Node Package Manager): It hosts the largest ecosystem of open-source libraries in the world, making it incredibly easy to integrate third-party tools.
   (Node.js를 설치하면 함께 설치되는 도구로, 전 세계 개발자들이 만들어 놓은 수백만 개의 코드 뭉치(패키지)를 아주 쉽게 가져다 쓸 수 있게 해줍니다.)

3. Core Concepts
    V8 Engine	:Converts JavaScript code into machine code that computers can understand. 자바스크립트 코드를 컴퓨터가 이해할 수 있는 기계어로 변환합니다.
   Libuv : A C library that provides the event loop and handles asynchronous operations. 이벤트 루프를 제공하고 비동기 작업을 처리하는 C 라이브러리입니다.
  Non-blocking I/O	: The ability to handle multiple requests without waiting for one to finish. 하나의 작업이 끝날 때까지 기다리지 않고 여러 요청을 동시에 처리하는 능력입니다.
  NPM : The world's largest ecosystem of open-source libraries. 세계 최대 규모의 오픈 소스 라이브러리 생태계입니다.
   

### ionic + react + capacitor exercising
```
  $ node --version
  $ npm --version
```
> $ node: v16.14.2
> $ npm : 8.5.0
[ref https://ionicframework.com/docs/react/quickstart](https://ionicframework.com/docs/react/quickstart)
---
```
    $ npm install -g @ionic/cli
    $ ionic start ionicRecatMyapp blank --type=react
    $ ionic start MobileCemReact blank --type=react
    $ cd ionicRecatMyapp
    $ npm install styled-components
```
---
> capacitor plugin 몇 개 설치하기
> camera, storage, filesystem
```
    $ npm install @capacitor/camera @capacitor/storage @capacitor/filesystem
    $ npm install @ionic/pwa-elements
```
---
#### chart.js 사용 해 보기
[ref Ionic React FusionCharts](https://www.fusioncharts.com/dev/getting-started/ionic-framework/ionic-framework-using-react)
```
    $ npm install --save react@^16.14.0 react-dom@16.14.0 // react 버전 16으로 낮추기
    $ npm install fusioncharts react-fusioncharts // react version 17이상에서 지원 안 함
```
---
#### Capacitor native deplop
> build the project, then add native(ios/android)
```
    $ ionic integrations enable capacitor
    $ ionic build                    // make build folder (with this folder, we can deploy to web-hosting)

    $ npm install @capacitor/ios     // (one time in the project)
    $ ionic cap add ios              // make ios folder

    $ npm install @capacitor/android // (one time in the project)
    $ ionic cap add android          // make android folder
```
---
```
  // after installing another npm modules since have maden ios, and android folder
  $ npx cap sync

  // Open xcode
  $ npx cap open ios

  // Open Adnroid Studio
  $ npx cap open android
  $ usage vscode extensions review for development env
```
---
> React fontAwesome 사용하기
[ref React에서 Font Awesome 사용하기](https://www.daleseo.com/react-font-awesome/)
> 무료로 제공되는 Solid, Regular Brands 3개의 카테고리에 대한 패키지만 설치하겠습니다. 
> (항상 3개를 다 설치할 필요는 없고 사용하시고 싶은 아이콘이 속한 카테고리만 설치하시면 됩니다.)
> Font Awesome을 React 컴포넌트 형태로 사용할 수 있도록 해주는 @fortawesome/react-fontawesome 이라는 패키지는 설치합니다.
```
    $ npm i @fortawesome/fontawesome-svg-core
    $ npm i @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
    $ npm i @fortawesome/react-fontawesome
```
---
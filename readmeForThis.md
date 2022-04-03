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
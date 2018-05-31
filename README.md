# Mountain Alert Message 登山回報簡訊

當在登山時會需要定時回報自身狀況給留守人員，不過市面上 app 並沒有專注在簡訊功能，通常都是本身有其他功能 (ex. 地圖功能) 然後簡單附加個簡訊功能。
此 app 只專注在簡訊功能，提供預先設定聯絡人資訊, 多組附註資訊 (ex. 平安, 求救) 並且能夠快速送出，送出方式可選擇簡訊, app 兩種方式

## 使用情境

### 第一次使用

1. 第一次開啟會要求取得座標權限，請同意
2. 新增自己以及聯絡人資料
3. 設定多組附註資訊

### 之後發送

1. 開啟後會自動開始定位，並且會顯示座標資訊以及誤差值
2. 選擇希望在此次訊息附上的備註
3. 選擇傳送訊息方式
4. 發送

以上就是使用情境的介紹，相信使用上會比其他 app 更加容易使用，步驟簡單及快速是最主要的訴求，只有簡單才會讓大家願意頻繁的回報自身狀況。
如果需要更詳細的說明可以參考此[圖文介紹](https://www.notion.so/c0e4305185c34f98b1c92893172011ab)

## 安裝方式

限定 iOS 以及 native

``` bash
npm install

cd ios

pod install

# iOS only
npm starts
```

執行上述指令的前提是已經完成 react native 的開發環境設定，如尚未設定可參考此[官方教學](https://facebook.github.io/react-native/docs/getting-started.html)

## 使用 lib

* react
* redux
* redux-saga
* react-native-maps
* react-native-tab-view

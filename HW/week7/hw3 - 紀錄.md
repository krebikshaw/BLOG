
## 數值管理 _numManage_
1. 原始數值 _numOrigin_
2. 結果數值 _numResult_

## 符號管理 _signManage_
1. 全部符號 _calcSignAll_
2. 目前選擇的符號 _calcSignCurrent_

## 狀態管理 _stateManage_
1. 目前已經點過"運算符號"了 _isCalculated_
2. 目前已經完成計算了 _isFinish_
3. 目前正在點選"運算符號" _isClickCalc_

## 函式管理 _funManage_
1. 過濾掉 0 開頭，但是沒有小數點的情況 _dataProcess_
2. 先將算式跟答案兩個部分分別推進 result 陣列裡，再判斷答案的部分是不是小數，最後將算式顯示於 span，將答案顯示於 strong _calc_
3. 將答案轉成字串，判斷小數點後是否超過 5 位，超過的部分刪掉 _isFloat_
4. 將 加,減,乘,除 做處理，判斷除法分母不可以為 0 _doCalc_

# 監聽點擊 _calculator.addEventListener_
1. 將 calculator shake 的 class 拿掉
2. 抓點擊的 data-value 如果沒有值，return
3. 把點擊的 data-value 加到字串"原始數值 numOrigin"裡 
4. 如果 data-value 為 AC，呼叫顯示結果 showResult(按下歸零 clickReset)
5. 如果 data-value 為 sign 變更 isClickCalc 為 true 呼叫顯示結果 showResult(按下 加,減,乘,除  clickCalc)
6. 如果 data-value 為 = 呼叫顯示結果 showResult(按下等於 clickResult)
7. 如果 目前已經點過"運算符號"了 isCalculated 為 true，呼叫顯示結果 showResult(已案過運算符號的處理，只顯示後來的數字 showMainNum)
8. 最後一種情況，沒有點過運算符號，按下數字，呼叫顯示結果 showResult()

# 按下歸零 (AC) _clickReset_
1. 將目前已經點過"運算符號"了 isCalculated 及 目前已經完成計算了 isFinish 都清成 false
2. 將原始數值 numOrigin 及 結果數值 numResult 清成''
3. 如果接收到 msg 傳進來，就輸出 msg，否則就輸出 '0'


# 按下等於 (=) _clickResult_
1. 將目前已經點過"運算符號"了 isCalculated 預設為 false
2. 將目前已經完成計算了 isFinish 轉變為 true
3. 將字串"原始數值 numOrigin" 用"目前的符號 calcSignCurrent 切開"，左邊為 first 右邊為 sec
4. 將左邊 first 右邊 sec 及運算符號 calcSignCurrent 丟入 doCalc 函式去運算，再將結果寫進 結果數值 numResult
5. 輸出原始數值 numOrigin 及結果數值 numResult

# 按下 加,減,乘,除  _clickCalc_
1. 接收傳進來的 sign 值
2. 如果目前存在結果數值 numResult，將結果數值加上 sign 寫入原始數值 numOrigin 裡
3. 如果目前已經點過"運算符號"了 isCalculated 為 true，因為不能點兩次運算符號，所以要報錯，輸出 showError 函式
4. 若沒有報錯，就將目前已經點過"運算符號"了 isCalculated 改成 true
5. 輸出 原始數值 numOrigin 及符號 sign


# 顯示錯誤 _showError_
1. 將 calculator 加上 shake 這個 class
2. 輸出 按下歸零 clickReset 這個函式

# 顯示結果 _showResult_
1. 如果傳入的值不是 array 且有結果數值，顯示結果(顯示錯誤)
2. 如果傳入的值不是 array，但沒有結果數值，呼叫 calc 將 first 及 sec 都帶入原始數值 numOrigin 
3. 如果傳入的值是 array，代表已經有 numOrigin 及 numResult 存在，這時候只要把 array 的 first 及 sec 再一次丟回 calc 

# 已案過運算符號的處理，只顯示後來的數字 _showMainNum_
1. 如果結果數值 numResult 存在，把原始數值 numOrigin，加上符號 sign，再加上現在傳入的值 value，寫入原始數值 numOrigin 裡，並將目前已經點過"運算符號"了 isCalculated 改成 true
2. 將原始數值字串中的符號 sign 的位置 index 找出來，輸出(原始數值 numOrigin 及 index 後的數值)



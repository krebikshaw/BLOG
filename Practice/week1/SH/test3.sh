#!/bin/bash

echo -n "你好！請輸入你的年齡："
read AGE

if [ $AGE -eq 18 ]; then
  echo "恭喜你，你剛滿 18 歲"
elif [ $AGE -lt 18 ]; then
  echo "你還未成年喔！"
else
  echo "你已經成年了！"
fi

echo "你輸入的年齡是 $AGE 歲"

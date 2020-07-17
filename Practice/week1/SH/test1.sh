#!/bin/bash

MY_NAME="Peter:123456:man"

echo $MY_NAME | awk -F':' '{print $1}'

echo $MY_NAME | awk -F':' '{print $2}'

echo $MY_NAME | awk -F':' '{print $3}'


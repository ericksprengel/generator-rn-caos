#!/usr/bin/expect

spawn rm -rf android/
spawn rm -rf ios/
interact

spawn yo rn-caos:kmp

expect "Qual o nome de sua feature?"
send "Dda"

expect "Qual o nome do Plugin de sua feature?"
send "DdaPlugin"

expect eof

spawn rm -rf android/
spawn rm -rf ios/

spawn yo rn-caos ./login.yml

expect eof

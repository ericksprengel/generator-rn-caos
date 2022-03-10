#!/usr/bin/expect

spawn rm -rf src/
interact

spawn yo rn-caos

expect "? What feature will be deployed?"
send "Auth\n"

expect "? Your screen name:"
send "Login\n"

expect "? Your ui params (ex.: name, fullname):"
send "name\n"

expect "? List input views (ex.: email, password):"
send "email,password\n"

expect "? List button actions:"
send "onLogin,onBack,onForgotPassword\n"

expect eof

spawn yo rn-caos ./login.yml

expect eof

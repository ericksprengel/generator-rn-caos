#!/usr/bin/expect

spawn yo rn-caos

expect "? Your screen/container name:"
send "Login\n"
expect "? Your screen/container path dir:"
send "App/Auth\n"

expect "? List input views (ex.: email, password):"
send "email,password\n"

expect "? List button actions:"
send "onLogin,onBack,onForgotPassword\n"

interact
echo "  THIS IS THE END! - ADELE"
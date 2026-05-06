const otpGenerator = require('otp-generator')

const newOtp = otpGenerator.generate(10, { upperCaseAlphabets: true, specialChars: true, lowerCaseAlphabets: false });

console.log(newOtp);
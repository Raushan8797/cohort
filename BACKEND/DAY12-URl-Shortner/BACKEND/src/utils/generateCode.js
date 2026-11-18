import crypto from "crypto"

const genrateCode = () =>{
       const mainString= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let ShortCode = ""
for (let i = 0; i < 6; i++) {
    ShortCode += mainString.charAt(Math.floor(Math.random() * mainString.length))
}
return ShortCode
    }
    export default genrateCode
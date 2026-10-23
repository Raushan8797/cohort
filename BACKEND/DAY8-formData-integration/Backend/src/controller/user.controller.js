const create =  (req, res) =>{
try {
    console.log("hello");

console.log(req.body);
console.log(req.files);
} catch (error) {
    console.log("error during creating",error );
    
}


}

module.exports = {create}
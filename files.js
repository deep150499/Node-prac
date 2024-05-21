const fs = require('fs');


// read files
fs.readFile('./docs/blog.txt',(err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});


console.log('Last Line');

// write files
fs.writeFile('./docs/blog.txt','Replacing text through write files',() => {
    console.log('Text in file was replaced');
})

// If file does not exist it will create a new file.
fs.writeFile('./docs/blog5.txt','Hello again',() => {
    console.log('Text in file was replaced');
})


// Directories
if(!fs.existsSync('./assests')){
    fs.mkdir('./assests',(err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })
}
else{
        fs.rmdir('./assests',(err) =>{
            if(err){
                console.log(err);
            }
            console.log('folder deleted');
        });

}



// Deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err) => {
        if(err){
            console.log(err);
        }
        console.log('File deleted from docs')
    })
}
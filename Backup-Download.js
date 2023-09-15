// backup download 
const newman = require('newman'); // require newman in your project
const fs = require('fs');
//const path = require('path');
// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./get-backups.postman_collection.json'),
    environment: require('./credentials.postman_environment.json'),
    reporters: 'cli'
}).on('beforeRequest', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
})
.on('request', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    
    const requestName = data.item.name;
    //const randomString = Math.random().toString(36).substring(7);
    var fileName;
    //var download_link;
    /// /// TODO: all global error handling
      if(requestName=="Obtaining the Link for Downloading a Backup File"){
    //     //var content = data.response.toJSON().value;
    //    // console.log(data.globals.values)
           var ResponseBody=data.response.stream;
    //     //.files[0].download_link;
    //     //console.log(content.slice(0,8))
    //     download_link=JSON.parse(content).files[0].download_link;
         var fileName=JSON.parse(ResponseBody).files[0].name;
            //console.log(fileName)
         }
        //console.log(fileName)
    if(requestName=="Download_file"){
        //var content = data.response.toJSON().value;
       // console.log(data.globals.values)
        var content=data.response.stream;
        //.files[0].download_link;
        //console.log(content)
        //content=JSON.stringify(content) +",";
        //  fileName = JSON.stringify(fileName);
        //  console.log(typeof(fileName));
        //  fileName=fileName.split("_")
        //  console.log(fileName[6])
        //  //console.log(fileName[6])
        //   fileName=fileName[6];
        //  console.log(fileName)
         //console.log(fileName)
         //console.log(typeof(fileName))
        fileName="backup_file.qp";
        fs.writeFile(fileName,content, function (error) {
            if (error) { 
                 console.error(error); 
            }
         });
    

        }
    

    //     }
});
// const request = require('request');

// const download = (download_link, dest, cb) => {
//     const file = fs.createWriteStream(dest);
//     const sendReq = request.get(url);

//     // verify response code
//     sendReq.on('response', (response) => {
//         if (response.statusCode !== 200) {
//             return cb('Response status was ' + response.statusCode);
//         }

//         sendReq.pipe(file);
//     });

//     // close() is async, call cb after close completes
//     file.on('finish', () => file.close(cb));

//     // check for request errors
//     sendReq.on('error', (err) => {
//         fs.unlink(dest);
//         return cb(err.message);
//     });

//     file.on('error', (err) => { // Handle errors
//         fs.unlink(dest); // Delete the file async. 
//         return cb(err.message);
//     });
// };
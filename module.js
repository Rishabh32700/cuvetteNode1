const fs = require("fs")
const os = require("os")

// const name = "rishabh"

// setInterval(()=>{
//     const time =  new Date().toISOString()
//     fs.appendFile("time.txt", `current time is : ${time} \t\n`, (err)=>{
//         if (err) console.error(err);
//         else console.log("done");
//     })

// }, 1000)

// fs.writeFile("hello.txt", `${name} how are you?`, (err)=>{
//     if (err) console.error(err);
//     else console.log("done");
// })
// fs.appendFile("hello.txt", " i am good", (err)=>{
//     if (err) console.error(err);
//     else console.log("done");
// })
// fs.appendFile("hello.txt", " wht do you do?", (err)=>{
//     if (err) console.error(err);
//     else console.log("done");
// })
// })
// fs.appendFile("hello.txt", " wht do you do?", (err)=>{
//     if (err) console.error(err);
//     else console.log("done");
// })

// fs.rename("newName.txt", "hello.txt",  (err)=>{
//     if (err) console.error(err);
//     else console.log("done");
// })

fs.mkdir("./copy", (err)=>{
    if (err) console.error(err, process.pid);
    else console.log("directory made", process.pid );
    fs.copyFile("hello.txt", "./copy/copy.txt", (err)=>{
        if (err) console.error(err, process.pid);
        else console.log("file copied",  process.pid );
        fs.rm("./copy", {recursive: true}, (err)=>{
            if (err) console.error(err, process.pid);
            else console.log("deleted",  process.pid );
        })
        
    })
})


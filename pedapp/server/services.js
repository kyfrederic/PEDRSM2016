// var fs = Npm.require('fs');

// creerFichierEJS = function(nom, contenu)
// {
 
// var path = process.env.PWD + '/.file/'+nom;
// buffer = new Buffer(contenu);

// fs.open(path, 'w', function(err, fd) {
//     if (err) {
//         throw 'error opening file: ' + err;
//     }

//     fs.write(fd, buffer, 0, buffer.length, null, function(err) {
//         if (err) throw 'error writing file: ' + err;
//         fs.close(fd, function() {
//             console.log('file written');
//         })
//     });
// });


// }



// creerFichierJS= function(nom, contenu)
// {
// //var fd= fs.writeFileSync("./"+nom, contenu, "UTF-8");

// var path = process.env.PWD + '/.file/'+nom;
// buffer = new Buffer(contenu);

// fs.open(path, 'w', function(err, fd) {
//     if (err) {
//         throw 'error opening file: ' + err;
//     }

//     fs.write(fd, buffer, 0, buffer.length, null, function(err) {
//         if (err) throw 'error writing file: ' + err;
//         fs.close(fd, function() {
//             console.log('file written');
//         })
//     });
// });

// }

// creerFichierCSS= function(nom, contenu)
// {

// var path = process.env.PWD + '/.file/'+nom;
// buffer = new Buffer(contenu);

// fs.open(path, 'w', function(err, fd) {
//     if (err) {
//         throw 'error opening file: ' + err;
//     }

//     fs.write(fd, buffer, 0, buffer.length, null, function(err) {
//         if (err) throw 'error writing file: ' + err;
//         fs.close(fd, function() {
//             console.log('file written');
//         })
//     });
// });

// }


// listeFichiersEJS= function()
// {
// 	files = fs.readdirSync(process.env.PWD + '/.file/');
// 	//console.log(files);
// return files;
// }

// listeFichiersJS= function()
// {
// return fs.readdirSync(process.env.PWD + '/.file/');
// }

// listeFichiersCSS= function()
// {
// return fs.readdirSync(process.env.PWD + '/.file/');
// }

// ouvrirFichier= function(nom)
// {
// if(nom.substring(nom.length-3,nom.length)==".js")
// {
//   return fs.readFileSync(process.env.PWD + '/.file/'+nom, 'utf8');
// }
// else if(nom.substring(nom.length-4,nom.length)==".ejs")
//      {
//             return fs.readFileSync(process.env.PWD + '/.file/'+nom, 'utf8');
//       }
//        else if(nom.substring(nom.length-4,nom.length)==".css")
//             {
//              return fs.readFileSync(process.env.PWD + '/.file/'+nom, 'utf8');
//              }
// }

// sauvergarderFichier= function(nom,contenu)
// {
// if(nom.substring(nom.length-3,nom.length)==".js")
// {
// //***************
//   var path = "./"+nom;
// buffer = new Buffer(contenu);

// fs.open(path, 'w', function(err, fd) {
//     if (err) {
//         throw 'error opening file: ' + err;
//     }

//     fs.write(fd, buffer, 0, buffer.length, null, function(err) {
//         if (err) throw 'error writing file: ' + err;
//         fs.close(fd, function() {
//             console.log('file written');
//         })
//     });
// });
// //***************
// }
// else if(nom.substring(nom.length-4,nom.length)==".ejs")
//      {
//         //*********
//             var path = './views/'+nom;
// buffer = new Buffer(contenu);

// fs.open(path, 'w', function(err, fd) {
//     if (err) {
//         throw 'error opening file: ' + err;
//     }

//     fs.write(fd, buffer, 0, buffer.length, null, function(err) {
//         if (err) throw 'error writing file: ' + err;
//         fs.close(fd, function() {
//             console.log('file written');
//         })
//     });
// });
//         //**********
//       }
//        else if(nom.substring(nom.length-4,nom.length)==".css")
//             {
//                //************
//             var path = "./public/css/"+nom;
// buffer = new Buffer(contenu);

// fs.open(path, 'w', function(err, fd) {
//     if (err) {
//         throw 'error opening file: ' + err;
//     }

//     fs.write(fd, buffer, 0, buffer.length, null, function(err) {
//         if (err) throw 'error writing file: ' + err;
//         fs.close(fd, function() {
//             console.log('file written');
//         })
//     });
// });
//                //**************
//              }
// }
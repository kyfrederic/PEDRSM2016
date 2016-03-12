//var fs= require('fs');
var fs = Npm.require('fs');


creerFichierEJS= function(nom, contenu)
{
//var fd= fs.writeFileSync("./views/"+nom, contenu, "UTF-8");


// var path = './views/'+nom;
 
var path = '/home/kouakou/Bureau/createfilesmeteor/ejs/'+nom;
buffer = new Buffer(contenu);

fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'error opening file: ' + err;
    }

    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('file written');
        })
    });
});


}

var creerFichierJS= function(nom, contenu)
{
//var fd= fs.writeFileSync("./"+nom, contenu, "UTF-8");

var path = "./"+nom;
buffer = new Buffer(contenu);

fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'error opening file: ' + err;
    }

    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('file written');
        })
    });
});

}

var creerFichierCSS= function(nom, contenu)
{

var path = "./public/css/"+nom;
buffer = new Buffer(contenu);

fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'error opening file: ' + err;
    }

    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('file written');
        })
    });
});

}


var listeFichiersEJS= function()
{
return fs.readdirSync('./views/');
}

var listeFichiersJS= function()
{
return fs.readdirSync('.');
}

var listeFichiersCSS= function()
{
return fs.readdirSync('./public/css/');
}

ouvrirFichier = function(nom)
{
if(nom.substring(nom.length-3,nom.length)==".js")
{
  return fs.readFileSync('/home/kouakou/Bureau/createfilesmeteor/js/'+nom, 'utf8');
}
else if(nom.substring(nom.length-4,nom.length)==".ejs")
     {
            return fs.readFileSync('/home/kouakou/Bureau/createfilesmeteor/ejs/'+nom, 'utf8');
      }
       else if(nom.substring(nom.length-4,nom.length)==".css")
            {
             return fs.readFileSync('/home/kouakou/Bureau/createfilesmeteor/css/'+nom, 'utf8');
             }
}


var sauvergarderFichier= function(nom,contenu)
{
if(nom.substring(nom.length-3,nom.length)==".js")
{
//***************
  var path = "./"+nom;
buffer = new Buffer(contenu);

fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'error opening file: ' + err;
    }

    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('file written');
        })
    });
});
//***************
}
else if(nom.substring(nom.length-4,nom.length)==".ejs")
     {
        //*********
            var path = './views/'+nom;
buffer = new Buffer(contenu);

fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'error opening file: ' + err;
    }

    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('file written');
        })
    });
});
        //**********
      }
       else if(nom.substring(nom.length-4,nom.length)==".css")
            {
               //************
            var path = "./public/css/"+nom;
buffer = new Buffer(contenu);

fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'error opening file: ' + err;
    }

    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('file written');
        })
    });
});
               //**************
             }
}
// exports.creerFichierEJS= creerFichierEJS;
// exports.creerFichierJS= creerFichierJS;
// exports.creerFichierCSS= creerFichierCSS;
// exports.listeFichiersEJS=listeFichiersEJS;
// exports.listeFichiersCSS=listeFichiersCSS;
// exports.listeFichiersJS=listeFichiersJS;
// exports.ouvrirFichier=ouvrirFichier;
// exports.sauvergarderFichier=sauvergarderFichier;

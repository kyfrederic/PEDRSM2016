Router.configure({
    layoutTemplate: 'mainLayout'
});


Router.route('/', {
    name: "home",
    template: "home"
});

Router.route('/concatene', {
    name: "concatene",
    template: "concatene",
});

Router.route('/longueur', {
    name: "longueur",
    template: "longueur"
});
Router.route('/majuscule', {
    name: "majuscule",
    template: "majuscule"
});
Router.route('/minuscule', {
    name: "minuscule",
    template: "minuscule"
});
Router.route('/racine', {
    name: "racine",
    template: "racine"
});
Router.route('/puissance', {
    name: "puissance",
    template: "puissance"
});
Router.route('/factorielle', {
    name: "factorielle",
    template: "factorielle"
});
Router.route('/fichierEJS', {
    name: "fichierEJS",
    template: "fichierEJS"
});
Router.route('/fichierJS', {
    name: "fichierJS",
    template: "fichierJS"
});
Router.route('/fichierCSS', {
    name: "fichierCSS",
    template: "fichierCSS"
});

Router.route('/ouvrirFichier', {
    name: "ouvrirFichier",
    template: "ouvrirFichier"
});

Router.route('/liste', {
    name: "liste",
    template: "liste",
data: function(){
        
        // console.log(posts)       
        return {
            posts: " fichier"
        };
    }
   
});


Router.route('/listeJS', {
    name: "listeJS",
    template: "listeJS"
});
Router.route('/listeCSS', {
    name: "listeCSS",
    template: "listeCSS"
});
Router.route('/create_personne', {
    name: "create_personne",
    template: "create_personne"
});
Router.route('/personnes', {
    name: "personnes",
    template: "personnes"
});

Router.route('/test', {
    name: "test",
    template: "test"
});

Router.route('/message', {
    name: "message",
    template: "message"
});



Router.route('/createfilesEJS', {where: 'server'})
  .post(function () {
    console.log(this.request.body);
    var fname = this.request.body.nom
    var contenu = this.request.body.contenu
    creerFichierEJS(fname, contenu );
    this.response.end();
    
    

  });



  Router.route('/createfilesJS', {where: 'server'})
  .post(function () {
    console.log(this.request.body);
    var fname = this.request.body.nom
    var contenu = this.request.body.contenu
    this.response.end();
    creerFichierJS(fname, contenu )
    this.response.end();

  });

  Router.route('/createfilesCSS', {where: 'server'})
  .post(function () {
    console.log(this.request.body);
    var fname = this.request.body.nom
    var contenu = this.request.body.contenu
    creerFichierCSS(fname, contenu )
    this.response.end();
    
    

  });

  Router.route('/listes', {where: 'server'})

  .get( function() {
    //console.log(listeFichiersEJS());
    // If a GET request is made, return the user's profile.
    var files = listeFichiersEJS();
     var myJsonString = JSON.stringify(files);
    //   this.response.end("ok");
    //   this.render('message');
    //   return "ok";
       // this.response.end(myJsonString);
       this.response.end(myJsonString);

    
  });


  Router.route('/openfilesJS', {where: 'server'})
  .get(function () {
    
    

  });


  Router.route('/openfilesCSS', {where: 'server'})
  .get(function () {
    

  });



  // Router.route('/creerFichierEJS', {where: 'server'})
  // .post(function () {               
  //   console.log(this.request.body);
  //   // res.render('message.html',{message: message});
  //   // res.render('message');
  //   //this.response.end('message');
  //   //router.go('personnes');
  //    this.render('message');
  // });




// Router.route('/myform', { name: "test", template: "test", where: 'server'}
// .post(function() {
//   console.log(this.request.body);
// });

// var Personne= require('./personne.js').Personne;
// var app = require('./express_app.js').app;
// var string= require('./string.js');
// var math= require('./math.js');
// var fichier = require('./fichier');

// app.get('/', function(req, res){
// res.render('home.ejs');
// });

// app.get('/concatene', function(req, res){
// res.render('concatene.ejs');
// });

// app.post('/concatene', function(req, res){
// var chaine1 = req.body.chaine1;
// var chaine2 = req.body.chaine2;
// var resultat=string.concatene(chaine1, chaine2);
// res.render('concateneRend.ejs',{resultat: resultat, chaine1: chaine1, chaine2: chaine2});
// });

// app.get('/longueur', function(req, res){
// res.render('longueur.ejs');
// });

// app.post('/longueur', function(req, res){
// var chaine = req.body.chaine;
// var resultat=string.longueur(chaine);
// res.render('longueurRend.ejs',{chaine: chaine, resultat: resultat});
// });

// app.get('/majuscule', function(req, res){
// res.render('majuscule.ejs');
// });

// app.post('/majuscule', function(req, res){
// var chaine = req.body.chaine;
// var resultat=string.majuscule(chaine);

// res.render('majusculeRend.ejs',{chaine: chaine, resultat: resultat});
// });


// app.get('/minuscule', function(req, res){
// res.render('minuscule.ejs');
// });

// app.post('/minuscule', function(req, res){
// var chaine = req.body.chaine;
// var resultat=string.minuscule(chaine);
// res.render('minusculeRend.ejs',{chaine: chaine, resultat: resultat});
// });


// app.get('/racine', function(req, res){
// res.render('racine.ejs');
// });

// app.post('/racine', function(req, res){
// var nombre = parseInt(req.body.nombre);
// var resultat=math.racine(nombre);
// var message ="Resultat: "+ resultat;
// res.render('racineRend.ejs',{resultat: resultat, nombre: nombre});
// });

// app.get('/puissance', function(req, res){
// res.render('puissance.ejs');
// });
// 111
// app.post('/puissance', function(req, res){
// var nombre = parseInt(req.body.nombre);
// var puissance = parseInt(req.body.puissance);
// var resultat=math.puissance(nombre,puissance);
// res.render('puissanceRend.ejs',{resultat: resultat, nombre: nombre, puissance: puissance});
// });

// app.get('/factorielle', function(req, res){
// res.render('factorielle.ejs');
// });

// app.post('/factorielle', function(req, res){
// var nombre = parseInt(req.body.nombre);
// var resultat=math.factorielle(nombre);
// res.render('factorielleRend.ejs',{resultat: resultat, nombre: nombre});
// });

// app.get('/fichierEJS', function(req, res){
// res.render('fichierEJS.ejs');
// });

// app.post('/fichierEJS', function(req, res){
// var nom = req.body.nom;
// var contenu = req.body.contenu;
// fichier.creerFichierEJS(nom, contenu);
// var message ="Fichier ("+nom+") créer";
// res.render('message.ejs',{message: message});
// });

// app.get('/fichierJS', function(req, res){
// res.render('fichierJS.ejs');
// });

// app.post('/fichierJS', function(req, res){
// var nom = req.body.nom;
// var contenu = req.body.contenu;
// fichier.creerFichierJS(nom, contenu);
// var message ="Fichier ("+nom+") créer";
// res.render('message.ejs',{message: message});
// });

// app.get('/fichierCSS', function(req, res){
// res.render('fichierCSS.ejs');
// });

// app.post('/fichierCSS', function(req, res){
// var nom = req.body.nom;
// var contenu = req.body.contenu;
// fichier.creerFichierCSS(nom, contenu);
// var message ="Fichier ("+nom+") créer";
// res.render('message.ejs',{message: message});
// });

// app.get('/listeEJS', function(req, res){
// var liste = fichier.listeFichiersEJS(); 
// res.render('liste.ejs',{liste: liste, type: "EJS"});
// });

// app.get('/listeJS', function(req, res){
// var liste = fichier.listeFichiersJS(); 
// res.render('liste.ejs',{liste: liste, type: "JS"});
// });

// app.get('/listeCSS', function(req, res){
// var liste = fichier.listeFichiersCSS(); 
// res.render('liste.ejs',{liste: liste, type: "CSS"});
// });


// app.get('/ouvrirFichier/:id', function(req, res){
// var nom=req.params.id;
// var data = fichier.ouvrirFichier(nom);
//  res.render('ouvrirFichier.ejs',{data: data, nom: nom});
// });

// app.post('/sauvergarderFichier', function(req, res){
// var nom=req.body.nom;
// var contenu=req.body.contenu;
// fichier.sauvergarderFichier(nom,contenu);
// var message= "Le fichier "+nom+" a étè sauvegarder";
//  res.render('message.ejs',{message: message});
// });


// app.get('/create_personne', function(req, res){
// res.render('create_personne.ejs');
// });

// app.get('/personnes', function(req, res){
// Personne.find(function(err ,personnes){
// if(err)
// {
// console.log(err);
// }
// else{
// res.render('personnes.ejs',{personnes:personnes});
// }
// });

// });

// app.get('/personne/:id', function(req, res){

// Personne.findById(req.params.id,function(err ,personne){
// if(err)
// {
// console.log(err);
// }
// else{
// res.render('personne.ejs',{personne:personne});
// }
// });
// });

// app.post('/create', function(req, res){
// var personne= new Personne({ nom: req.body.nom, prenom: req.body.prenom, age: parseInt(req.body.age) }); 
// personne.save(function(err,personne){
// if(err)
// {
// console.log('ERROR');
// console.log(err);
// }
// else
// {
// res.render('message.ejs',{message: 'Utilisateur Ajouter avec succès'});
// }

// });

// });



// app.listen(4000);

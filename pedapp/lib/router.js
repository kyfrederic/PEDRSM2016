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


Router.route('/ouvrirFichierEJS', {
    name: "ouvrirFichierEJS",
    template: "ouvrirFichierEJS"
});

Router.route('/ouvrirFichierJS', {
    name: "ouvrirFichierJS",
    template: "ouvrirFichierJS"
});



Router.route('/ouvrirFichierCSS', {
    name: "ouvrirFichierCSS",
    template: "ouvrirFichierCSS"
});


Router.route('/openfileEJS/:id', {
    name: "openfileEJS",
    template: "openfile",
    data: function(){
        var num1 = this.params.id;
        var retourouvrir;

        $.ajax({
    dataType: "json",
    type: "GET",
    url:"http://localhost:3000/myfiles/"+num1, 
    async: false,
    success:function(data) { 
      retourouvrir = data ;
    }
  });
          
        return {
            res: retourouvrir, 
            setfile : num1
        };
    }
});


Router.route('/openfileJS/:id', {
    name: "openfileJS",
    template: "openfile",
    data: function(){
        var num1 = this.params.id;
        var retourouvrir;

        $.ajax({
    dataType: "json",
    type: "GET",
    url:"http://localhost:3000/myfilesjs/"+num1, 
    async: false,
    success:function(data) {
      retourouvrir = data ;
    }
  });
          
        return {
            res: retourouvrir, 
            setfile : num1
        };
    }
});


Router.route('/openfileCSS/:id', {
    name: "openfileCSS",
    template: "openfile",
    data: function(){
        var num1 = this.params.id;
        var retourouvrir;

        $.ajax({
    dataType: "json",
    type: "GET",
    url:"http://localhost:3000/myfilescss/"+num1, 
    async: false,
    success:function(data) {
      retourouvrir = data ;
    }
  });
          
        return {
            res: retourouvrir, 
            setfile : num1
        };
    }
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








  // Router.route('/openfilesCSS', {where: 'server'})
  // .get(function () {
    

  // });


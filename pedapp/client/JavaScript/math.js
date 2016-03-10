racine = function(nombre) {
 return Math.sqrt(nombre);
}


puissance = function(nombre, puissance) {

   return Math.pow(nombre,puissance);

}

factorielle = function(nombre) {

      if(nombre==0) return 1;
  else return nombre*factorielle(nombre-1);

}




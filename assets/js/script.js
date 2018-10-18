$(function(){
  $('#moreNumber').click(function(){
    $('#clickNumber').val(function(i, val) {return val*1+1});
  });
  $('#lessNumber').click(function(){
    $('#clickNumber').val(function(i, val) {return val*1-1});
  });
});
// .val obtient la valeur de l'id
// initialisation de la fonction suivante qui nous permet d'incrémenter (augmenter) la valeur
// on utilise un *1 devant le +1 pour éviter que les clics ne soient qu'une  succession de 1.

//  autre méthode 
// $(function(){
//     $('#ajouter').click(function(){
//       //La méthode .val() récupère ou remplace la value d'un élément de formulaire
//       //Nous récupérons donc la valeur de l'input portant l'id #nombreClick dans l'objet valeur
//       var valeur = $('#nombreClick').val();
//       //on incrémente d'une unité l'objet valeur à chaque clic
//       valeur++;
//         //on récupère la value de "valeur" que l'on affiche dans l'input
//       $('#nombreClick').val(valeur);
//     });
//
//     $('#retirer').click(function(){
//       var valeur = $('#nombreClick').val();
//       // on décremente d'une unité à chaque clic
//       valeur--;
//       $('#nombreClick').val(valeur);
//     });
// });

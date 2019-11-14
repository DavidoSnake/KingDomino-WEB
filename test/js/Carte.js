
/* biome :
* 1 = champs
* 2 = prairie
* 3 = eau
* 4 = marais
* 5 = bois
* 6 = mine
* */
var tabCartes =[];
var tabCartesChamps = [];
var tabCartesPrairie = [];
var tabCartesEau = [];
var tabCartesMarais = [];
var tabCartesBois = [];
var tabCartesMine = [];
function Cases(couronne,biome) {
  var Case = {};
  Case.nbCouronnes=couronne;
  Case.biome=biome;
  Case.valeurDominoAttribue=undefined;
  Case.depart = undefined;
  switch (biome) {
    case 1:
      tabCartesChamps.push(Case);
      break;
    case 2:
      tabCartesPrairie.push(Case);
      break;
    case 3:
      tabCartesEau.push(Case);
      break;
    case 4:
      tabCartesMarais.push(Case);
      break;
    case 5:
      tabCartesBois.push(Case);
      break;
    case 6:
      tabCartesMine.push(Case);
      break;
  }
}
function groupeDeCartes(nbrCartes,biome,nbrCarte1Cour,nbrCarte2Cour,nbrCarte3Cour) {
  for (var i = nbrCartes;i >0;i--){
    if (i>nbrCartes-nbrCarte3Cour){
      Cases(3,biome);
    }else if (i>nbrCartes-nbrCarte2Cour){
      Cases(2,biome);
    }else if (i>nbrCartes-nbrCarte1Cour){
      Cases(1,biome);
    }else{
      Cases(0,biome);
    }
  }
}
/* Cartes Champs (26 dont 5 à 1 couronne) */
groupeDeCartes(26,1,5,0,0);
/* Cartes prairie (14 dont 2 à 1 couronne et 2 à 2 couronnes)*/
groupeDeCartes(14,2,2,2,0);
/* Cartes eau (18 dont 6 à 1 couronne)*/
groupeDeCartes(18,3,6,0,0);
/* Cartes marais (10)*/
groupeDeCartes(10,4,2,2,0);
/* Cartes bois (22)*/
groupeDeCartes(22,5,6,0,0);
/* Cartes mine (6)*/
groupeDeCartes(6,6,1,3,1);










tabCartes.push(tabCartesChamps,tabCartesPrairie,tabCartesEau,tabCartesMarais,tabCartesBois,tabCartesMine);

//document.body.appendChild(tabCartesChamps[1].image);
document.write(tabCartes[2][0].biome);
function createDomino(case1,case2) {
  var Domino = {};
  Domino.val=25;
  Domino.case1=case1;
  Domino.case2=case2;
  var image = new Image();
  var nCour = 0;

  // On initialise le nombre de couronnes
  if (Domino.case1['nbCouronnes']>0 || Domino.case2['nbCouronnes']>0) {
    nCour = 1;
  } if (Domino.case1['nbCouronnes']>1 || Domino.case2['nbCouronnes']>1) {
    nCour = 2;
  } if (Domino.case1['nbCouronnes']>2 || Domino.case2['nbCouronnes']>2)
    nCour = 3;

  // biomes egaux sans couronnes
  if (nCour===0) {
    if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 1) {
      image.src = "img/biomes_égaux/champs.png";
    } else if (Domino.case1['biome'] === 2 && Domino.case2['biome'] === 2) {
      image.src = "img/biomes_égaux/prairie.png";
    } else if (Domino.case1['biome'] === 3 && Domino.case2['biome'] === 3) {
      image.src = "img/biomes_égaux/eau.png";
    } else if (Domino.case1['biome'] === 4 && Domino.case2['biome'] === 4) {
      image.src = "img/biomes_égaux/marais.png";
    } else if (Domino.case1['biome'] === 5 && Domino.case2['biome'] === 5) {
      image.src = "img/biomes_égaux/bois.png";
    }

    // biomes differents sans couronnes
    else if (Domino.case1['biome'] === 5 && Domino.case2['biome'] === 3 || Domino.case1['biome'] === 3 && Domino.case2['biome'] === 5) {
      image.src = "img/biomes_diff_scour/bois_eau.png";
    } else if (Domino.case1['biome'] === 5 && Domino.case2['biome'] === 2 || Domino.case1['biome'] === 2 && Domino.case2['biome'] === 5) {
      image.src = "img/biomes_diff_scour/bois_prairie.png";
    } else if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 5 || Domino.case1['biome'] === 5 && Domino.case2['biome'] === 1) {
      image.src = "img/biomes_diff_scour/champ_bois.png";
    } else if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 3 || Domino.case1['biome'] === 3 && Domino.case2['biome'] === 1) {
      image.src = "img/biomes_diff_scour/champ_eau.png";
    } else if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 4 || Domino.case1['biome'] === 4 && Domino.case2['biome'] === 1) {
      image.src = "img/biomes_diff_scour/champ_marais.png";
    } else if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 2 || Domino.case1['biome'] === 2 && Domino.case2['biome'] === 1) {
      image.src = "img/biomes_diff_scour/champ_prairie.png";
    }

    // biomes contenant 1 couronne
  } else if (nCour===1) {
    if (Domino.case1['biome'] === 5 && Domino.case2['biome'] === 1) {
      image.src = "img/biomes_diff_1cour/bois1_champ.png";
    } else if (Domino.case1['biome'] === 5 && Domino.case2['biome'] === 3) {
      image.src = "img/biomes_diff_1cour/bois1_eau.png";
    } else if (Domino.case1['biome'] === 5 && Domino.case2['biome'] === 2 || Domino.case1['biome'] === 2 && Domino.case2['biome'] === 5) {
      image.src = "img/biomes_diff_1cour/bois1_prairie.png";
    } else if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 5) {
      image.src = "img/biomes_diff_1cour/champ1_bois.png";
    } else if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 3) {
      image.src = "img/biomes_diff_1cour/champ1_eau.png";
    } else if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 4 || Domino.case1['biome'] === 4 && Domino.case2['biome'] === 1) {
        // 2 placement de couronne possible
        if (Domino.case1['nbCouronnes'] === 1)
        image.src = "img/biomes_diff_1cour/champ1_marais.png";
        else image.src = "img/biomes_diff_1cour/champ_marais1.png";
    } else if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 6) {
      image.src = "img/biomes_diff_1cour/champ1_mine.png";
    } else if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 2 || Domino.case1['biome'] === 2 && Domino.case2['biome'] === 1) {
      image.src = "img/biomes_diff_1cour/champ1_prairie.png";
    } else if (Domino.case1['biome'] === 3 && Domino.case2['biome'] === 5) {
      image.src = "img/biomes_diff_1cour/eau1_bois.png";
    } else if (Domino.case1['biome'] === 3 && Domino.case2['biome'] === 1) {
      image.src = "img/biomes_diff_1cour/eau1_champ.png";
    } else if (Domino.case1['biome'] === 3 && Domino.case2['biome'] === 2 || Domino.case1['biome'] === 3 && Domino.case2['biome'] === 2) {
      image.src = "img/biomes_diff_1cour/eau_prairie1.png";
    } else if (Domino.case1['biome'] === 6 && Domino.case2['biome'] === 1) {
      image.src = "img/biomes_diff_1cour/mine1_champ.png";
    } else if (Domino.case1['biome'] === 2 && Domino.case2['biome'] === 4 || Domino.case1['biome'] === 4 && Domino.case2['biome'] === 2) {
      image.src = "img/biomes_diff_1cour/prairie_marais1.png";
    }

    // biomes contenant 2 couronnes
    } else if (nCour===2) {
    if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 4 || Domino.case1['biome'] === 4 && Domino.case2['biome'] === 1) {
      image.src = "img/biomes_diff_2cour/champ_marais2.png";
    } else if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 2 || Domino.case1['biome'] === 2 && Domino.case2['biome'] === 1) {
      image.src = "img/biomes_diff_2cour/champ_prairie2.png";
    } else if (Domino.case1['biome'] === 3 && Domino.case2['biome'] === 2 || Domino.case1['biome'] === 2 && Domino.case2['biome'] === 3) {
      image.src = "img/biomes_diff_2cour/eau_prairie2.png";
    } else if (Domino.case1['biome'] === 6 && Domino.case2['biome'] === 1 || Domino.case1['biome'] === 1 && Domino.case2['biome'] === 6) {
      image.src = "img/biomes_diff_2cour/mine2_champ.png";
    } else if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 4 || Domino.case1['biome'] === 4 && Domino.case2['biome'] === 1) {
      image.src = "img/biomes_diff_2cour/prairie_marais2.png";
    }
    // biome contenant 3 couronnes
    } else if (nCour===3) {
    if (Domino.case1['biome'] === 1 && Domino.case2['biome'] === 6 || Domino.case1['biome'] === 6 && Domino.case2['biome'] === 1) {
      image.src = "img/biomes_diff_3cour/champ_mine3.png";
    }
  }

  image.onload = function() {};
  let div = document.createElement('p');
  document.body.append(div);
  Domino.img=image;
  div.appendChild(image);
  document.write(Domino.case1['biome']);
}
// test biomes egaux
document.write("0 Cour uni");
createDomino(tabCartesChamps[23],tabCartesChamps[24]);
createDomino(tabCartesPrairie[13],tabCartesPrairie[12]);
createDomino(tabCartesEau[17],tabCartesEau[16]);
createDomino(tabCartesMarais[9],tabCartesMarais[8]);
createDomino(tabCartesBois[18],tabCartesBois[17]);
// test biomes diff sans couronne
document.write("0 Cour diff");
createDomino(tabCartesBois[21],tabCartesEau[17]);
createDomino(tabCartesBois[21],tabCartesPrairie[13]);
createDomino(tabCartesChamps[23],tabCartesBois[21]);
createDomino(tabCartesEau[17],tabCartesChamps[23]);
createDomino(tabCartesChamps[23],tabCartesMarais[8]);
createDomino(tabCartesChamps[23],tabCartesPrairie[13]);
// test biomes diff 1 couronne
document.write("1 Cour");
createDomino(tabCartesBois[5],tabCartesChamps[23]);
createDomino(tabCartesBois[5],tabCartesEau[16]);
createDomino(tabCartesBois[5],tabCartesPrairie[12]);
createDomino(tabCartesChamps[4],tabCartesBois[17]);
createDomino(tabCartesChamps[4],tabCartesEau[16]);
createDomino(tabCartesChamps[4],tabCartesMarais[8]);
createDomino(tabCartesChamps[4],tabCartesMine[5]);
createDomino(tabCartesChamps[4],tabCartesPrairie[12]);
createDomino(tabCartesChamps[23],tabCartesMarais[2]);
createDomino(tabCartesChamps[23],tabCartesPrairie[2]);
createDomino(tabCartesEau[4],tabCartesBois[20]);
createDomino(tabCartesEau[4],tabCartesChamps[23]);
createDomino(tabCartesEau[16],tabCartesPrairie[1]);
  createDomino(tabCartesMine[4],tabCartesChamps[22]);
  createDomino(tabCartesPrairie[12],tabCartesMarais[3]);
// test biomes diff 2 couronnes
document.write("2 Cour");
createDomino(tabCartesMarais[0],tabCartesChamps[23]);
createDomino(tabCartesChamps[23],tabCartesPrairie[0]);
createDomino(tabCartesEau[17],tabCartesPrairie[1]);
createDomino(tabCartesMine[1],tabCartesChamps[23]);
createDomino(tabCartesPrairie[12],tabCartesMarais[0]);
// test biome diff 3 couronnes
document.write("3 Cour");
createDomino(tabCartesChamps[23],tabCartesMine[0]);




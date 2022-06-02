export class Stats {
     montantVenteTotal ?: number;
     nbCommand ?: number;
     nbPanier ?: number ;

     constructor(montantVenteTotal ?: number, nbCommand ?: number, nbPanier ?: number) {
         this.montantVenteTotal = montantVenteTotal;
         this.nbCommand = nbCommand;
         this.nbPanier = nbPanier;
     }
}

export class Article {
    id ?: number;
    designation ?: string;
    prix ?: number;
    lignesCommandes ?: number;
    category ?: string;

    constructor(id ?: number, designation ?: string, prix ?: number, lignesCommandes ?: number, category ?: string) {
        this.id = id;
        this.designation = designation;
        this.prix = prix;
        this.lignesCommandes = lignesCommandes;
        this.category = category;
    }
}
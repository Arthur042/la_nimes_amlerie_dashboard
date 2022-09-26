export class Article {
    title ?: string;
    nb_sell ?: number;
    total_sell ?: number;

    constructor(title ?: string, nb_sell ?: number, total_sell ?: number) {
        this.title = title;
        this.nb_sell = nb_sell;
        this.total_sell = total_sell;
    }
}

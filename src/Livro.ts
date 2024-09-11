

export default class livro{
    constructor(titulo: string, autor: string, isbn: string){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }

    titulo: string;
    autor: string;
    isbn: string;


    public getisbn(): string {
        return this.isbn;
    }

}
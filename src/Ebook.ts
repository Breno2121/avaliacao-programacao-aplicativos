import Livro from "./Livro";
import leia from 'readline-sync'

export default class Ebook extends Livro{
 private numeropag: number;

 constructor(titulo: string, autor: string, isbn: string, numeropag: number){
    super(titulo, autor, isbn);
    this.numeropag = numeropag;
 }
}
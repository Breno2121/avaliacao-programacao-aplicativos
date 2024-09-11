import leia from 'readline-sync'
import Livro from './Livro'
import livro from './Livro';
import LivroFisico from './LivroFisico';
import Ebook from './Ebook';

export default class Biblioteca {
    private livros: Livro[] = [];
    save: any;

    public addAccount() {
        var nomelivro = leia.question("Digite o nome do livro: ")
        var autorlivro = leia.question("Digite o nome do autor do livro: ")
        var isbnlivro = leia.question("Digite o ISBN do livro: ")
        var tipolivro = leia.keyInSelect(["FISICO", "EBOOK"]) + 1;
       
     
        var livo: Livro;

        if(tipolivro === 1){
            livo = new LivroFisico(titulo, autor, isbn, tipolivro);
        }else {
            livo = new Ebook(titulo, autor, isbn, tipolivro);
        }
        var livroadd = new livro(nomelivro, autorlivro, isbnlivro)
        this.livros.push(livroadd);
  
        this.save(livo);

        console.log("Livro adicionado com sucesso!!");

    }


    public remover() {
        var isbndeletar = leia.question("Digite o ISBN do livro para remover: ");

        for (var i = 0; i < this.livros.length; i++) {
            if (isbndeletar === this.livros[i].getisbn()) {
                this.livros.splice(i, 1);
                console.log(`LIVRO COM ISBN ${isbndeletar} EXCLUIDO COM SUCESSO`);
                return;
            }
        }

        console.log("NAO FOI ENCONTRADO O LIVRO..");
    }

    public buscar() {
        var isbnbusca = leia.question("Digite o ISBN do livro que deseja: ");

        for(var i = 0; i <= this.livros.length; i++){
            if(isbnbusca === this.livros[i].getisbn()){
                console.table(this.livros[i]);
                return;
            }
        }

        console.log("ISBN NAO ENCONTRADO..");
    }


    public mostrar() {
        console.table(this.livros);
    }
}
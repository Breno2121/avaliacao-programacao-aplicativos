import leia from 'readline-sync'
import Livro from "./Livro";
import Biblioteca from './Biblioteca';

var Livraria = new Biblioteca();

var opcao = 0;
do{
    console.log("- - - - - -MENU- - - - - - - - - - -")
    opcao = leia.keyInSelect(["Adicionar livro", "Remover livro", "Buscar livro", "Mostrar detalhes"]) + 1;
    switch(opcao){
        case 1:
            Livraria.addAccount();
            break;
        case 2:
            Livraria.remover();
            break;
            case 3:
                Livraria.buscar();    
            break;
            case 4:
                Livraria.mostrar();    
            break;
    }
}while(opcao !== 0);

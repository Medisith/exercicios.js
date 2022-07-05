class Nave{
    constructor(nomeDaNave){
      this.nomeDaNave = nomeDaNave;
      this.caracterProibido = "e";
      this.novoNomeDaNave = "";
    }
    reverter(nome){
      for(let i = nome.length - 1; i >= 0; i--){
        if(nome[i] == this.caracterProibido || nome[i] == "E"){
          break;
        } else{
          this.novoNomeDaNave += nome[i];
        }
      }
      return this.nomeDaNave = nome;
    }
    resultado(){
      alert(
        "Nome original da nave: " +
        `${this.nomeDaNave}` +
        "\nNome após a ocultação: " +
        `${this.novoNomeDaNave}`
      );
    }
  }
  // Pedindo o nome da nave
  let nomeDaNave = prompt("Digite o nome da Nave?");
  // Pegando a class Nave
  let nave = new Nave();
  // Adicionando os dados na class reverter
  nave.reverter(nomeDaNave);
  // Mostrando o Resultado
  nave.resultado();
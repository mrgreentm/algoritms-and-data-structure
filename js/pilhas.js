function Stack() {
  let items = [];

  //LIFO - O Primeiro a entrar, é o último a sair

  this.push = (element) => {
    //adiciona um novo item à pilha
    items.push(element);
  };
  this.pop = () => {
    //remove um item do topo da pilha
    return items.pop();
  };
  this.peek = (element) => {
    //devolve o elemento que está no topo da pilha
    return items[items.length - 1];
  };
  this.isEmpty = (element) => {
    //informa se a pilha está vazia ou não
    return items.length === 0;
  };
  this.clear = (element) => {
    //limpa a pilha
    items = [];
  };
  this.size = () => {
    //informa o tamaho da pilha
    return items.length;
  };
  this.print = () => {
    //imprime a pilha no console
    console.log(items.toString());
  };
}

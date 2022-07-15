//O que é uma fila? É uma coleção ordenada de itens que segue o princípio FIFO
//First In First Out. Ou seja, o primeiro a entrar é o primeiro a sair
function Queue() {
    var items = [];

    this.enqueue = (item) => {
        //adiciona um item à fila
        items.push(item)
    }
    this.dequeue = () => {
        //remove um item da fila
        return items.shift()
    }
    this.front = () => {
        //retorna o primeiro elemento da fila
        return items[0]
    }
    this.isEmpty = () => {
        //verifica se a fila está vazia
        return !items.length
    }
    this.size = () => {
        //retorna o tamanho da fila
        return items.length
    }
    this.print = () => {
        //imprime a fila no console
        console.log(items)
    }
}
const queue = new Queue()
queue.enqueue('João')
queue.enqueue('Maria')
queue.enqueue('Pietra')
queue.enqueue('Eduarda')
console.log(queue.dequeue())
console.log(queue.front())
console.log(queue.isEmpty())
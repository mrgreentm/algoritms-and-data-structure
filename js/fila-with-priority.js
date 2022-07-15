function QueueWithPriority() {
    var items = [];

    function QueueItem(element, priority) {
        this.element = element;
        this.priority = priority
    }

    this.enqueue = (element, priority) => {
        var item = new QueueItem(element, priority)
        var added = false;

        for(let i = 0; i < items.length; i++) {
            if(item.priority < items[i].priority) {
                items.splice(1 , 0, item)
                added = true;
                break
            }
        }
        if(!added) items.push(item)
    }
    this.print = () => {
        for(let i = 0; i<items.length;i++) {
            console.log(items[i].element + '-' + items[i].priority)
        }
    }
}
const queueWithPriority = new QueueWithPriority()
queueWithPriority.enqueue('João',10)
queueWithPriority.enqueue('Maria',12)
queueWithPriority.enqueue('Pedro',14)
queueWithPriority.print()
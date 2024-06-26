const button = document.querySelector('.add-task')
const input = document.querySelector('.write-task')
const FullList = document.querySelector('.task-list')

let MyList = []


function AdicionarTask() {
    MyList.push({
        Task: input.value,
        Done: false
    })

    input.value = ''

    MostrarTask()
}

function MostrarTask() {
    let NovaLi = ''

    MyList.forEach((Item, index) => {
        NovaLi = NovaLi + `
        <li class="task ${Item.Done && "Done"}">
        <img src="/img/check.png" alt="Check" onclick="CheckTask(${index})">
        <p>${Item.Task}</p>
        <img src="/img/trash.png" alt="Lixo" onclick="ItemDelete(${index})">
    </li>
        `
    })

    FullList.innerHTML = NovaLi

    localStorage.setItem('List', JSON.stringify(MyList))
}

function CheckTask(index){
    MyList[index].Done = !MyList[index].Done
    MostrarTask()
}

function ItemDelete(index) {
    MyList.splice(index, 1)
    MostrarTask()
}

function ReloadTask(){
    const TaskLocalStorage = localStorage.getItem('List')

    if(TaskLocalStorage){
    MyList = JSON.parse(TaskLocalStorage)
    }

    MostrarTask()
}

ReloadTask()
button.addEventListener('click', AdicionarTask)
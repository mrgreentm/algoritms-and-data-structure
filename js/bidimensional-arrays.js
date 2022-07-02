var week = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var temps = [[13,44,54,12,14,32,31], [42,7,123,412,14,53,31], [42,74,12,412,12,21,421]]

function createTableTempsWeek(bidimensionalArray) {
    let table = document.getElementById('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')
    bidimensionalArray[0].forEach(day => {

        let th = document.createElement('th')
        th.textContent = day
        th.style.backgroundColor = 'red'
        th.style.color = 'white'
        thead.appendChild(th)
    });
    bidimensionalArray[1].forEach((tempArray) =>{
        let tr = document.createElement('tr')

        tempArray.forEach((temp)=>{
            let td = document.createElement('td')
            td.textContent = `${temp}°C`
            td.style.backgroundColor = 'blue'
            td.style.color = 'white'
            tr.appendChild(td)
            tbody.appendChild(tr)
        })
    })
    table.appendChild(thead)
    table.appendChild(tbody)
}
var bidimensionalArray = [week, temps]
createTableTempsWeek(bidimensionalArray)
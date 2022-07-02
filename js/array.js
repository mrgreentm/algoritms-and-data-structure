var temps = [31.1, 18, 22, 34, 40];

function createUl(array) {
  let unordedList = document.getElementById("ul");
  array.forEach((temp) => {
    let element = document.createElement("li");
    element.innerHTML = `
        <div style="
                width: 300px;
                heigth: 300px; 
                background-color:red; 
                color: white; p
                adding: 1rem; 
                border-radius: 20px; 
                margin:10px">
            <p>A temperatura foi: ${temp}</p>
        </div>
        `;
    unordedList.appendChild(element);
  });
}
createUl(temps);

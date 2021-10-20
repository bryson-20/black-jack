//document.getElementById("count").innerText = 5 ;
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')

let count = 0 

//camelcase
function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
    saveCount = count + ' - '  
    saveEl.textContent += saveCount
    countEl.textContentn = 0
    count = 0
    

}








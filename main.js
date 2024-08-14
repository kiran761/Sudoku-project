// Generate a 9x9 table

let arr = Array.from({ length: 9 }, () => Array(9).fill(0));
const table = document.getElementById('sudokuTable');
for (let i = 0; i < 9; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 9; j++) {
        const cell = document.createElement('td');
        // cell.textContent=0;
        cell.contentEditable = true;
        
        
        
        if (j % 3 === 0 && j !== 0) {
            cell.classList.add('thick-border-left');
        }
        if (i % 3 === 0 && i !== 0) {
            cell.classList.add('thick-border-top');
        }
        cell.addEventListener('input',function(){
            if(cell.textContent > 9)
                {
                    cell.textContent=cell.textContent%10;
                }
            console.log(cell.textContent);
            arr[i][j]=cell.textContent;
            
        })
        
        row.appendChild(cell);
        
    }
    table.appendChild(row);
    print();
}
function printArray() {
    console.log("Current Sudoku Grid:");
    arr.forEach(row => console.log(row.join(' ')));
}

printArray(); 



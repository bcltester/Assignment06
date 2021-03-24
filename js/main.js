// HANDLE THE LOAD EVENT OF THE WINDOW

const main = function() {
    
    // HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON    
    let btn = document.getElementById('btnAddEmployee');
    btn.addEventListener('click', (e) => {
        // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
        window.open('add-employee.html','employee-add','width=800, height=600');
    });

};

window.addEventListener("load", main);


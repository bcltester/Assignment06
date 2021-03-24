// HANDLE THE LOAD EVENT OF THE WINDOW

window.addEventListener('load', main);

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
const $ = (id) => {
    return document.getElementById(id);
};

function main () {
    // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    let width = 800;
    let height = 700;

    // RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(width, height);

    // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo(window.screen.availWidth/2 - width/2, window.screen.availHeight/2 - height/2);


    // CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
    let fields = ["id", "name", "extension", "email", "department"];

    let btnSubmit = $('submit');
    let btnCancel = $('cancel');

    // HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        let outputString = "";

        for (let id of fields) {
            let elem = $(id);
            // SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
            outputString += `${id.toUpperCase()}: ${elem.value}<br>`;
        }    
        // GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
        // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
        let parent = window.opener;
        parent.document.getElementById('loginDetails').innerHTML = outputString;

        // CLOSE THE POPUP
        window.close();
    });

    // HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
    btnCancel.addEventListener('click', (e) => {
        e.preventDefault();
        window.close();
    });

};

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE


















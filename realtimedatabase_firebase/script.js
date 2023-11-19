const firebaseConfig = {
    apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
  };
  
  firebase.initializeApp(firebaseConfig);


  

  document.addEventListener("DOMContentLoaded", function () 
  
  {
    var projectDB = firebase.database().ref("projectDB");

    document.getElementById("projectForm").addEventListener("submit", submitForm);

    function submitForm(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var desc = document.getElementById("desc").value;

        console.log("Project Name:", name);
        console.log("Project Description:", desc);

        saveProject(name, desc);

        document.querySelector(".alert").style.display = "block";

        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 3000);

        document.getElementById("projectForm").reset();
    }

    const saveProject = (name, desc) => {
        var newProjectForm = projectDB.push();

        newProjectForm.set({
            name: name,
            desc: desc
        });
    };
});
        

        // Function to save project to Firebase
        const saveProject = (name, desc) => {
            var newProjectForm = projectDB.push();

            newProjectForm.set({
                name: name,
                desc: desc
            });
        }
      
   



        const displayProject = (name, desc) => {
            // Create a new project box
            var projectBox = document.createElement("div");
            projectBox.className = "col-md-4 mb-4";
            projectBox.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${desc}</p>
                    </div>
                </div>
            `;
        
            // Append the project box to the container
            document.getElementById("projectContainer").appendChild(projectBox);
        };
        
        const getElementVal = (id) => {
            return document.getElementById(id).value;
        };











// $("#login").click(function(){

//     const email = $("#inputEmail").val();
//     const password = $("#inputPassword").val();

//     auth.signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // User signed in
//             const user = userCredential.user;
//             console.log("User signed in:", user);
//         })
//         .catch((error) => {
//             // Handle errors
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error("Login error:", errorCode, errorMessage);
//         });




// });

// $("#register").click(function () {
//     const email = $("#inputEmail").val();
//     const password = $("#inputPassword").val();

//     // Create a new user with email and password
//     auth.createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // User registered successfully
//             const user = userCredential.user;
//             console.log("User registered:", user);
//         })
//         .catch((error) => {
//             // Handle errors
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error("Registration error:", errorCode, errorMessage);
//         });
// });





// $("#new-project-button").click(function(){
//     var project = {
//         id: $("#inputProjectName").val() + Date.now(),
//         name: $("#inputProjectName").val(),
//         description: $("#inputProjectDescription").val(),
//         link: $("#inputProjectLink").val(),
//         image: $("#inputProjectImage").val()  
//     };

//     addProjectToDatabase(project);

//     // Do something with the 'project' object, like sending it to the server
//     console.log(project);
// });

// function addProjectToDatabase(p) {
// const projectsRef = firebase.database().ref('projects/' + p.id);
// projectsRef.set(p);
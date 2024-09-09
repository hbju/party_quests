const firebaseConfig = {
  apiKey: "AIzaSyCN6iRgRuSKeItO_1A-CUSpQtuW-oIo-XI",
  authDomain: "esnpartyquest.firebaseapp.com",
  projectId: "esnpartyquest",
  storageBucket: "esnpartyquest.appspot.com",
  messagingSenderId: "252294601053",
  appId: "1:252294601053:web:e0a58c307be112ed37b0b4",
  measurementId: "G-EW09G1MDDZ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();



// Sample database of names and tasks
const tasksDatabase = [
    "Find John Doe and take a picture with him doing a 'L' on his forehead.",
    "Ask Jane Smith to teach you a word in her native language.",
    "Convince Emily Johnson to dance with you for 30 seconds and capture it on video.",
    // Add more names and tasks here
]

const participantsDatabase = [
    "Jakub Bartůněk",
    "Valentine De Voghel",
    "Valtteri Tuominen",
    "Manon Soenen",
    "Morgane Hemingway",
    "Alexine Simon",
    "Frederique Masse",
    "Lovisa Grahn",
    "Mark Rastert",
    "Sofia Gomes",
    "Marianne Leduc",
    "Cordula von Heyl",
    "Nick Hebenstreit",
    "Eduarda Dionisio",
    "Amica Swanepoel",
    "Elise Gardeyn",
    "Marius Løfqvist",
    "Alessandro Iencenella",
    "Mariana Alves",
    "Julia Buchner",
    "Mona Volmich",
    "Hendrik Holzwarth",
    "Pauline Halloy",
    "Amelie Topf",
    "Bartłomiej Jawor",
    "Arielle Chaîné",
    "Catherine Carpentier-Desjardins",
    "Sristi Ramoutar",
    "Nina Seidel",
    "Knut Bugge",
    "Isa-May Beauchamp",
    "Bianca Baldassarre",
    "Dana Langeler",
    "Justus Dorsel",
    "Johanna Schoele",
    "Sebastian Mueller",
    "Dulce Lopez",
    "Zuhal Fedai",
    "Viktor Svalstedt",
    "Niels Vignaux",
    "Almog Adato",
    "Janosh Huyse",
    "Pontus Hedman",
    "Vincent Cautaerts",
    "Jef De Koker",
    "Théodore Olaru",
    "Josefin Olsson",
    "Gabriel Probst",
    "Lucas Heule",
    "Anastasia Abe",
    "Jolien Van de Walle",
    "Marianne Kersten",
    "Amanda Puerto-Lichtenberg",
    "Tejas Kochar",
    "Aditya Narayan Shahi",
    "Raphael Tasseel",
    "Neus Bosch Matheu",
    "Eric Oldgren",
    "Bradley van Hooff",
    "Francesco La Rosa",
    "Alicja Jonczyk",
    "Edoardo Bargis",
    "Paul Mathiot",
    "Asmita Johri",
    "Grzegorz Statkiewicz",
    "Alyssa Popescu",
    "Anders Eiersted Molzen",
    "Marie Albrecht",
    "Katrine Broegger Jensen",
    "Rémi Gardette",
    "Neshon Missaghian",
    "Hsin Ju Liou",
    "Maria Francesca Spada",
    "David Weber",
    "Martha Boosten",
    "Timon Dries",
    "Maria Carolina Hüning",
    "Carl Lingström",
    "Philippe Carrier",
    "Caroline Borup Jeppesen",
    "Matti Lehmann",
    "John Larsson",
    "Dilara Baran",
    "Jeremy Racine",
    "Laura Linuesa Domenech",
    "Sabina Ghita",
    "Xiao Xiang",
    "Gabriella Bjaaland",
    "Ruadhán Mac Giolla Phádraig",
    "Sven Wendler",
    "Robert Andersson",
    "Cristian Safta",
    "Viktor Kjellsson",
    "Joe Rizk",
    "Erik Bessö",
    "Clara Wimmelmann",
    "Ben René Bjørsvik",
    "Rohan Shetty",
    "Marcin Kleszcz",
    "Junzhe Chen",
    "Herald Nakpil",
    "Thomas De Masi",
    "Maxime Rufer",
    "Yann Boudigou",
    "Zacharie Puippe",
    "Amine Bousseta",
    "Kim Huynh",
    "Arthur Speich",
    "Quentin Devaud",
    "Augustin Henry",
    "Tahiry Arintsoa",
    "Yann Savioz",
    "Aline Marcionetti-Rusconi",
    "Heloise Fabbretti",
    "Alistair Hay",
    "Thomas Bonnet",
    "Guillaume Granger",
    "Cyril Udriot",
    "Audrey Adehossi",
    "Oriane Petit-Phar",
    "Céline Kalbermatten",
    "Chloé Dau",
    "Tim Lücking",
    "Emilien Ordonneau",
    "Lucie Zhou",
    "Mara Blöchlinger",
    "Ines Acevedo",
    "Colin Hafen",
    "Luc Scholl",
    "Clara Gloge",
    "Noah Trippens"
  ]
  

function getRandomTask() {
    const randomIndex = Math.floor(Math.random() * tasksDatabase.length);
    return tasksDatabase[randomIndex];
}

function checkName() {
    const name = document.getElementById("nameInput").value;
    const taskResult = document.getElementById("taskResult");
    const proofUpload = document.getElementById("proofUpload");
    
    taskResult.textContent = "Accessing database...";
    proofUpload.style.display = "none";
    
    setTimeout(() => {
        if (participantsDatabase.includes(name)) {
            const task = getRandomTask();
            taskResult.textContent = "";
            typeWriter(`Your Quest: ${task}`, "taskResult", 30);
            proofUpload.style.display = "block";
        } else {
            taskResult.textContent = "Error: Name not found in database. Access denied.";
            proofUpload.style.display = "none";
        }
    }, 1500);
}

function submitProof() {
    const fileInput = document.getElementById("proofFile");
    const description = document.getElementById("proofDescription").value;
    const uploadResult = document.getElementById("uploadResult");

    if (fileInput.files.length === 0) {
        uploadResult.textContent = "Error: No file selected. Quest proof required.";
        return;
    }

    const file = fileInput.files[0];
    const fileName = file.name;

    // Create a reference to 'quest_proofs/FILENAME.jpg'
    const storageRef = storage.ref('quest_proofs/' + fileName);

    uploadResult.textContent = "Uploading quest proof...";

    // Upload the file
    storageRef.put(file).then((snapshot) => {
        console.log('Uploaded a file!');
        // Get the download URL
        return snapshot.ref.getDownloadURL();
    }).then((downloadURL) => {
        console.log('File available at', downloadURL);
        // Here you could save the downloadURL and description to a database if needed
        uploadResult.textContent = `Quest proof received. File "${fileName}" successfully uploaded. Awaiting verification.`;
        
        // Clear the form
        fileInput.value = "";
        document.getElementById("proofDescription").value = "";
    }).catch((error) => {
        console.error('Upload failed', error);
        uploadResult.textContent = "Error: Upload failed. Please try again.";
    });
}


function typeWriter(text, elementId, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const rules = [
      "Rule #1: Do not talk about the Quest.",
      "Rule #2: Do not talk about the Quest.",
      "Rule #3: Do not talk about the Quest."
    ];
    
    rules.forEach((rule, index) => {
      setTimeout(() => {
        typeWriter(rule, `rule${index + 1}`, 50);
      }, index * 2000);
    });
  });

  function updateFileName() {
    const fileInput = document.getElementById('proofFile');
    const fileNameDisplay = document.getElementById('file-name-display');
    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = `Selected file: ${fileInput.files[0].name}`;
    } else {
        fileNameDisplay.textContent = '';
    }
  }

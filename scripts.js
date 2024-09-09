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
const tasksDatabase = {
    "jakub bartůněk": "Ask Alistair Hay to list three things they love about their job.",
    "valentine de voghel": "Make a proposal to Aline Marcionetti-Rusconi.",
    "valtteri tuominen": "Make a proposal to Aline Marcionetti-Rusconi.",
    "manon soenen": "Ask Yann Boudigou to show you their best trick shot on beer pong.",
    "morgane hemingway": "Get Mara Blöchlinger to give you a taste of what she is preparing for tomorrow.",
    "alexine simon": "Write 'Sarah > Blanche' on Blanche Roquejeoffre's white shirt.",
    "frederique masse": "Steal the hat/cap of Thomas Bonnet.",
    "lovisa grahn": "Write a big G on Guillaume Granger's white shirt.",
    "mark rastert": "Write 'Blanche > Sarah' on Sarah Bruno's white shirt.",
    "sofia gomes": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
    "marianne leduc": "Get Cyril Udriot to mix one song of his liking. It has to be drum&bass.",
    "cordula von heyl": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
    "nick hebenstreit": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
    "eduarda dionisio": "Get Lucie Zhou to give you a taste of what she is preparing for tomorrow.",
    "amica swanepoel": "Have a picture taken of you taking a picture of Quentin Devaud.",
    "elise gardeyn": "Draw 3 Toads on 3 different people and show it in one picture.",
    "marius løfqvist": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
    "alessandro iencenella": "Make a proposal to Aline Marcionetti-Rusconi.",
    "mariana alves": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
    "julia buchner": "Ask Emilien Ordonneau to share a funny nickname he had and take a picture with him.",
    "mona volmich": "Write 'Blanche > Sarah' on Sarah Bruno's white shirt.",
    "hendrik holzwarth": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
    "pauline halloy": "Challenge Augustin Henry to a push-up contest.",
    "amelie topf": "Have a picture taken of you taking a picture of Quentin Devaud.",
    "bartłomiej jawor": "Ask Arthur Speich to give you a piggyback ride for a few steps (safely and with consent).",
    "arielle chaîné": "Write a big G on Guillaume Granger's white shirt.",
    "catherine carpentier-desjardins": "Write 'Blanche > Sarah' on Sarah Bruno's white shirt.",
    "sristi ramoutar": "Write 'Sarah > Blanche' on Blanche Roquejeoffre's white shirt.",
    "nina seidel": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
    "knut bugge": "Write 'Sarah > Blanche' on Blanche Roquejeoffre's white shirt.",
    "isa-may beauchamp": "Write 'Blanche > Sarah' on Sarah Bruno's white shirt.",
    "bianca baldassarre": "Write 'Sarah > Blanche' on Blanche Roquejeoffre's white shirt.",
    "dana langeler": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
    "justus dorsel": "Have a picture taken of you taking a picture of Quentin Devaud.",
    "johanna schoele": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
    "sebastian mueller": "Write a big G on Guillaume Granger's white shirt.",
    "dulce lopez": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
    "zuhal fedai": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
    "viktor svalstedt": "Write a big G on Guillaume Granger's white shirt.",
    "niels vignaux": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
    "almog adato": "Write a big G on Guillaume Granger's white shirt.",
    "janosh huyse": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
    "pontus hedman": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
    "vincent cautaerts": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
    "jef de koker": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
    "théodore olaru": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
    "josefin olsson": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
    "gabriel probst": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
    "lucas heule": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
    "anastasia abe": "Challenge Luc Lücking to a thumb wrestling match and let someone capture it on video.",
    "jolien van de walle": "Get Céline Kalbermatten to join you in making up a short song about the party.",
    "marianne kersten": "Find Maxime Kaiser and ask them to draw a quick portrait of you.",
    "amanda puerto-lichtenberg": "Find Yann Boudigou and ask them to do a silly face with you in a selfie.",
    "tejas kochar": "Ask Gauthier Ordonneau to tell you a fun fact about themselves that no one else knows.",
    "aditya narayan shahi": "Convince Mara Blöchlinger to create a secret handshake with you.",
    "raphael tasseel": "Convince Alistair Hay to help you serenade a random participant with a love song.",
    "neus bosch matheu": "Get Maxime Kaiser to help you create a funny meme, send it to the chat group on telegram.",
    "eric oldgren": "Get Oriane Petit-Phar to tell a story using only sound effects.",
    "bradley van hooff": "Challenge Herald Nakpil to a game of tic-tac-toe on your shirt.",
    "francesco la rosa": "Have a staring contest with Itaï Yerly for at least 20 seconds.",
    "alicja jonczyk": "Get Alicia Gamal to share an embarrassing story about themselves.",
    "edoardo bargis": "Ask Maëlle Marro about the most adventurous thing they’ve ever done and share it with someone new.",
    "paul mathiot": "Challenge Amine Bousseta to make the funniest animal noise they can.",
    "asmita johri": "Get Aymeric Rio to do a TikTok dance with you and record it.",
    "grzegorz statkiewicz": "Get Maxime Kaiser to participate in a 15-second dance battle with you.",
    "alyssa popescu": "Get Mateo Tatzber to show you how to do a cool handshake.",
    "anders eiersted molzen": "Ask Timur Unver to show you a hidden talent or party trick.",
    "marie albrecht": "Find Colin Hafen and ask them to draw a quick portrait of you.",
    "katrine broegger jensen": "Challenge Itaï Yerly to make the funniest animal noise they can.",
    "rémi gardette": "Challenge Luc Lücking to a thumb wrestling match and let someone capture it on video.",
    "neshon missaghian": "Get Maëlle Marro to show you how to do a cool handshake.",
    "hsin ju liou": "Ask Arthur Speich about the most adventurous thing they’ve ever done and share it with someone new.",
    "maria francesca spada": "Have a staring contest with Colin Hafen for at least 20 seconds.",
    "david weber": "Have a staring contest with Maxime Kaiser for at least 20 seconds.",
    "martha boosten": "Get Gauthier Ordonneau to do a TikTok dance with you and record it.",
    "timon dries": "Ask Cyril Udriot to tell you a fun fact about themselves that no one else knows.",
    "maria carolina hüning": "Get Sarah Bruno to show you how to do a cool handshake.",
    "carl lingström": "Ask Itaï Yerly to tell you a fun fact about themselves that no one else knows.",
    "philippe carrier": "Challenge Heloise Fabbretti to a game of tic-tac-toe on your shirt.",
    "caroline borup jeppesen": "Find Alistair Hay and ask them to do a silly face with you in a selfie.",
    "matti lehmann": "Ask Adrien Feillard to show you a hidden talent or party trick.",
    "john larsson": "Challenge Celeste Paquin to make the funniest animal noise they can.",
    "dilara baran": "Challenge Cyril Udriot to a thumb wrestling match and let someone capture it on video.",
    "jeremy racine": "Get Lilou Castano to do a TikTok dance with you and record it.",
    "laura linuesa domenech": "Convince Lucie Zhou to create a secret handshake with you.",
    "sabina ghita": "Get Jonathan Zurbriggen to show you how to do a cool handshake.",
    "xiao xiang": "Challenge Amine Bousseta to a game of tic-tac-toe on your shirt.",
    "gabriella bjaaland": "Ask Yann Boudigou about the most adventurous thing they’ve ever done and share it with someone new.",
    "ruadhán mac giolla phádraig": "Get Jonathan Zurbriggen to join you in making up a short song about the party.",
    "sven wendler": "Ask Thomas de Masi to tell you a fun fact about themselves that no one else knows.",
    "robert andersson": "Get Aymeric Rio to join you in making up a short song about the party.",
    "cristian safta": "Get Arthur Speich to join you in making up a short song about the party.",
    "viktor kjellsson": "Convince Sarah Bruno to help you serenade a random participant with a love song.",
    "joe rizk": "Get Tim Lücking to do a TikTok dance with you and record it.",
    "erik bessö": "Get Alicia Gamal to do a TikTok dance with you and record it.",
    "clara wimmelmann": "Get Thomas Bonnet to show you how to do a cool handshake.",
    "ben rené bjørsvik": "Challenge Tim Lücking to make the funniest animal noise they can.",
    "rohan shetty": "Ask Mara Blöchlinger to show you a hidden talent or party trick.",
    "marcin kleszcz": "Get Luc Lücking to help you create a funny meme, send it to the chat group on telegram.",
    "junzhe chen": "Convince Oriane Petit-Phar to help you serenade a random participant with a love song.",
    "herald nakpil": "Have a staring contest with Heloise Fabbretti for at least 20 seconds.",
    "thomas de masi": "Challenge Chloé Dau to make the funniest animal noise they can.",
    "yann boudigou": "Get Timur Unver to join you in making up a short song about the party.",
    "arthur speich": "Challenge Thomas de Masi to make the funniest animal noise they can.",
    "quentin devaud": "Ask Jonathan Zurbriggen to show you a hidden talent or party trick.",
    "augustin henry": "Ask Chloé Dau to show you a hidden talent or party trick.",
    "tahiry arintsoa": "Get Heloise Fabbretti to participate in a 15-second dance battle with you.",
    "yann savioz": "Ask Alicia Gamal about the most adventurous thing they’ve ever done and share it with someone new.",
    "heloise fabbretti": "Find Chloé Dau and ask them to draw a quick portrait of you.",
    "celeste paquin": "Get Simon Desmaison to help you create a funny meme, send it to the chat group on telegram.",
    "adrien feillard": "Get Yann Savioz to share an embarrassing story about themselves.",
    "itaï yerly": "Get Amine Bousseta to share an embarrassing story about themselves.",
    "maëlle marro": "Get Lucca Duarte Borges Ribeiro to participate in a 15-second dance battle with you.",
    "alicia gamal": "Get Adrien Feillard to join you in making up a short song about the party.",
    "alistair hay": "Convince Clara Gloge to help you serenade a random participant with a love song.",
    "thomas bonnet": "Get Maëlle Marro to join you in making up a short song about the party.",
    "cyril udriot": "Convince Jonathan Zurbriggen to help you serenade a random participant with a love song.",
    "audrey adehossi": "Get Oriane Petit-Phar to show you how to do a cool handshake.",
    "oriane petit-phar": "Get Lilou Castano to help you create a funny meme, send it to the chat group on telegram.",
    "céline kalbermatten": "Challenge Maëlle Marro to a game of tic-tac-toe on your shirt.",
    "chloé dau": "Get Amine Bousseta to tell a story using only sound effects.",
    "tim lücking": "Convince Emilien Ordonneau to create a secret handshake with you.",
    "emilien ordonneau": "Challenge Colin Hafen to make the funniest animal noise they can.",
    "lucie zhou": "Challenge Thomas Bonnet to a game of tic-tac-toe on your shirt.",
    "mara blöchlinger": "Convince Amine Bousseta to help you serenade a random participant with a love song.",
    "ines acevedo": "Challenge Yann Boudigou to a game of tic-tac-toe on your shirt.",
    "colin hafen": "Convince Alicia Gamal to help you serenade a random participant with a love song.",
    "luc lücking": "Convince Emilien Ordonneau to create a secret handshake with you.",
    "clara gloge": "Get Maëlle Marro to show you how to do a cool handshake.",
    "noah trippant": "Ask Gauthier Ordonneau to show you a hidden talent or party trick.",
    "aymeric rio": "Get Adrien Feillard to show you how to do a cool handshake.",
    "tom rathjens": "Challenge Sarah Bruno to a game of tic-tac-toe on your shirt.",
    "sarah bruno": "Get Thomas Bonnet to share an embarrassing story about themselves.",
    "blanche roquejeoffre": "Ask Itaï Yerly to show you a hidden talent or party trick.",
    "lilou castano": "Get Augustin Henry to do a TikTok dance with you and record it.",
    "maxime kaiser": "Ask Timur Unver to tell you a fun fact about themselves that no one else knows.",
    "gauthier ordonneau": "Ask Augustin Henry to show you a hidden talent or party trick.",
    "mateo tatzber": "Get Quentin Devaud to help you create a funny meme, send it to the chat group on telegram.",
    "jonathan zurbriggen": "Convince Noah Trippant to help you serenade a random participant with a love song.",
    "amine bousseta": "Have a staring contest with Alicia Gamal for at least 20 seconds.",
    "timur unver": "Get Simon Desmaison to share an embarrassing story about themselves.",
    "simon desmaison": "Ask Itaï Yerly to tell you a fun fact about themselves that no one else knows.",
    "tringa xuhli": "Have a staring contest with Amine Bousseta for at least 20 seconds.",
    "lucca duarte borges ribeiro": "Get Colin Hafen to help you create a funny meme, send it to the chat group on telegram.",
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
        typeWriter(rule, `rule${index + 1}`, 25);
      }, index * 1500);
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


  // Function to find the closest matching name
function findClosestName(input) {
    let closestName = '';
    let minDistance = Infinity;

    for (let name in tasksDatabase) {
        const distance = levenshteinDistance(input.toLowerCase(), name.toLowerCase());
        if (distance < minDistance) {
            minDistance = distance;
            closestName = name;
        }
    }

    // Only suggest if the name is close enough
    return minDistance <= 3 ? closestName : '';
}

// Levenshtein distance function (keep this as it was before)
function levenshteinDistance(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

// Modified checkName function
function checkName() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    const taskResult = document.getElementById("taskResult");
    const proofUpload = document.getElementById("proofUpload");
    
    taskResult.textContent = "Accessing database...";
    proofUpload.style.display = "none";
    
    setTimeout(() => {
        if (name.toLowerCase() in tasksDatabase) {
            const task = tasksDatabase[name.toLowerCase()];
            console.log(`Task for ${name}: ${task}`);
            taskResult.textContent = "";
            typeWriter(`Your Quest: ${task}`, "taskResult", 30);
            proofUpload.style.display = "block";
        } else {
            const closestName = findClosestName(name.toLowerCase());
            if (closestName) {
                taskResult.innerHTML = `Name not found. Did you mean <a href="#" onclick="useThisName('${closestName}')">${closestName}</a>?`;
            } else {
                taskResult.textContent = "Error: Name not found in database. Access denied.";
            }
            proofUpload.style.display = "none";
        }
    }, 1500);
}

function useThisName(name) {
    document.getElementById("nameInput").value = name;
    checkName();
}
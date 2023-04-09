// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCQUWc56X-kN-w4On6De3caIQrcBlZ8rZE",
    authDomain: "sis-monitor.firebaseapp.com",
    databaseURL: "https://sis-monitor-default-rtdb.firebaseio.com",
    projectId: "sis-monitor",
    storageBucket: "sis-monitor.appspot.com",
    messagingSenderId: "1084605398463",
    appId: "1:1084605398463:web:6e9455044c4f137a55b50a",
    measurementId: "G-F9J2LNW1DS"
};
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  const idChip = "14612598"; // ID do chip do sensor
  
  database.ref(idChip).on("value", (snapshot) => {
    const sensorData = snapshot.val();
    if (sensorData) {
      const { id_chip, ip, localizacao, capacidade, disponivel, data, hora } = sensorData;
      const { latitude, longitude } = localizacao;
  
      document.getElementById("id-chip").textContent = id_chip;
      document.getElementById("ip").textContent = ip;
      document.getElementById("latitude").textContent = latitude;
      document.getElementById("longitude").textContent = longitude;
      document.getElementById("capacidade").textContent = capacidade;
      document.getElementById("disponivel").textContent = disponivel[Object.keys(disponivel)[0]]; // aqui pega o primeiro valor disponível do objeto
      document.getElementById("data").textContent = data[Object.keys(data)[0]]; // aqui pega a primeira data do objeto
      document.getElementById("hora").textContent = hora[Object.keys(hora)[0]]; // aqui pega a primeira hora do objeto
    } else {
      console.log(`Dados do sensor ${idChip} não encontrados`);
    }
  });
  
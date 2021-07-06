// Crear al menos un objeto para controlar el funcionamiento de tu simulador.
// Incorporarle sus propiedades y su constructor.
// // Invocar a ese objeto en algún momento donde el usuario realice alguna acción.
// // Utilizar sus mètodos.

function saludar(){
    console.log(`Hola. Soy ${this.name} ${this.apellido}`);
  }

  const nico = {
    name: 'Nicolás',
    apellido: 'Barroso',
  };

  saludar.call(nico);

  function caminar (metros, direccion){
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}.` )
  }

  caminar.call(nico, 400, 'Norte');

  caminar.apply(nico, [800, "Noreste"]);

  let valores = [800, "Sur"]
  caminar.apply(nico, valores)

 
  const chechu = {name:'Cecilia', apellido: 'Barroso', };
  const chechuSaluda= saludar.bind(chechu);
  chechuSaluda();

  const chechuCamina = caminar.bind(chechu);
  chechuCamina(1000, "SurEste");

  const chechuCamina2 = caminar.bind(chechu, 1000, 'SurEste');
  chechuCamina2();

  const chechuCamina3 = caminar.bind(chechu, 1000);
  chechuCamina3( 'SurEste');

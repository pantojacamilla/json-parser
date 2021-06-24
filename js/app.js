document.querySelector('#json').addEventListener('change', (event) => {

  const inputUsuario = Array.from(event.target.files);
  const arquivoJson = inputUsuario[0];

  const reader = new FileReader();

  reader.onload = () => {
    let str = reader.result;
    let json = JSON.parse(str);
    console.log('json', json);
  };

  reader.readAsText(arquivoJson);

});
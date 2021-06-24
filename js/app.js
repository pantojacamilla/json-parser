document.querySelector('#json').addEventListener('change', (event) => {

  const inputUsuario = Array.from(event.target.files);
  const arquivoJson = inputUsuario[0];
  const reader = new FileReader();

  reader.onload = () => {
    let parsedJson = JSON.parse(reader.result);

    parsedJson.forEach((file, i) => {
      let blob = new Blob([file.Content], { type: "text/javascript;charset=utf-8" });
      saveAs(blob, `(${i + 1})${file.PostId}.js`);
    });

  };

  reader.readAsText(arquivoJson);
});

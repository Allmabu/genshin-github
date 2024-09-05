function pesquisar() { 
    // Função para pesquisar e exibir os resultados
  
    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos
    console.log(section); // Loga o elemento selecionado no console para debug
  
    let resultados = " "; // Inicializa uma string para armazenar os resultados da pesquisa
  
    for (let dado of dados) { // Itera sobre cada dado da pesquisa
      // Cria um novo elemento div para cada resultado
      resultados += `
        <div class="item-resultado">
          <h2> ${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank"> Mais informações</a>
        </div>
      `;
    }
  
    section.innerHTML = resultados; // Insere os resultados na seção HTML
  }







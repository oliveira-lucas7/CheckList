import {useEffect, useState } from "react";

function App() {

  const [ listaTarefas, setListaTarefas ] = useState( [] );
  const [ tarefa, setTarefa ] = useState( { id: '', texto:"" } );

  function addTarefa()
  { 
    if( tarefa.texto !== "" ){
      setListaTarefas([...listaTarefas, tarefa ])//Quando o botão de adicionar é clicado, o que é novo (tarefa) é inserido no antigo (listaTarefas), e o modificador salva. (O nome desses três pontos que vem antes é chamado de spread operator)
    }
  }

  function excluirtarefa( id )
  {
    const novaLista = listaTarefas.filter( item => item.id !== id);
    setListaTarefas( novaLista );
  }

  useEffect( () => {
    setTarefa( { id: "", texto: ""} );
  }, [ listaTarefas ])
  //quando algo na lista é mudado (Item tirado ou adicionado) o modficidador do setTarefa limpa o campo de texto

  return (
    <>
      <header>
        <h1>React Do</h1>
      </header>
      <div>
        <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value} ) }></input>
        <button onClick={addTarefa}>Adicionar</button>
        <div>
          <ul>
            {listaTarefas.map( (item, index) => (
              <li key={index}>{item.texto} <button onClick={ () => excluirtarefa(item.id) }>Excluir</button></li> //o Map tem uma funcionalidade parecida com a do for, porém sempre que um item é adicionado, o react não precisa voltar do incío para ler os elementos inseridos
              //O index tem a funcionalidade de dar um indentificador para cada item que vá ser adicionado, fazendo com que não sejá necessário o react ler todos os elementos da lista para ver se ele já foi adicionado ou não
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}


export default App;

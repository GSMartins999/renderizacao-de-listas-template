import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

const listaDeTarefas = [];
export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(listaDeTarefas);

  // const listaMapeada = lista.map((item) => {
  //   return (
  //     <Tarefa>
  //       <p>Nova tarefa</p>
  //       <RemoveButton>
  //         <img src={bin} alt="" width="16px" />
  //       </RemoveButton>
  //     </Tarefa>
  //   );
  // });


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa]
    setLista(novaLista)
    setNovaTarefa("")
  };

  const removeTarefa = (valor) => {
    const filtrarLista = lista.filter(item => item !== valor);
    setLista(filtrarLista);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {/* <Tarefa>
            <p>Nova tarefa</p>
            <RemoveButton>
              <img src={bin} alt="" width="16px" />
            </RemoveButton>
          </Tarefa> */}
          {/* {listaMapeada} */}
          {lista.map((item) => {
              return (
                <Tarefa key={item}>
                  <p>Nova Tarefa</p>
                  <RemoveButton onClick={() => removeTarefa(item)}>
                    <img src={bin} alt="" width="16px" />
                  </RemoveButton>
                </Tarefa>
              );
            })
          }
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}

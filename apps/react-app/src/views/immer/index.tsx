import { produce } from 'immer'

function Immer() {
  function toggleTodo(state, id) {
    return produce(state, (draft) => {
      const todo = draft.find((todo) => todo.id === id)
      todo.done = !todo.done
    })
  }

  const toggleTodo2 = produce((draft, id) => {
    const todo = draft.find((todo) => todo.id === id)
    todo.done = !todo.done
  })
  console.log(toggleTodo2, 'toggleTodo2')
  const baseState = [
    {
      id: 'JavaScript',
      title: 'Learn TypeScript',
      done: true,
    },
    {
      id: 'Immer',
      title: 'Try Immer',
      done: false,
    },
  ]

  useEffect(() => {
    const nextState = toggleTodo(baseState, 'Immer')
    console.log(nextState)
  })
  return <div></div>
}

export default Immer

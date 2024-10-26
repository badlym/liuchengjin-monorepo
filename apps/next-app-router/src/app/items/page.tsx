import Link from 'next/link'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function ItemsPage() {
  const todos = await fetchTodos()

  return (
    <div>
      <h1>任务列表</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/items/${todo.id}`}>
              {todo.title} - {todo.completed ? '已完成' : '未完成'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

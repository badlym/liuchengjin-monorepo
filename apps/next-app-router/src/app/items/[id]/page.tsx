import Link from 'next/link'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface ItemDetailPageProps {
  params: {
    id: string
  }
}

// 从 API 获取单个任务
async function fetchTodoById(id: string): Promise<Todo> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

// 使用 generateStaticParams 生成静态路径
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: Todo[] = await res.json()

  // 返回前 10 个任务的路径
  return todos.map((todo) => ({
    id: todo.id.toString(),
  }))
}

// 详情页面组件
export default async function ItemDetailPage({ params }: ItemDetailPageProps) {
  const todo = await fetchTodoById(params.id)

  return (
    <div>
      <h1>任务详情</h1>
      <h2>{todo.title}</h2>
      <p>状态: {todo.completed ? '已完成' : '未完成'}</p>
      <Link href="/items">返回任务列表</Link>
    </div>
  )
}

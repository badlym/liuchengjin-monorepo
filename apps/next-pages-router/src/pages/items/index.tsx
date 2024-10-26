import type { GetStaticProps } from 'next'
import Link from 'next/link'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface ItemsPageProps {
  todos: Todo[]
}

// 从 API 获取任务列表数据
export const getStaticProps: GetStaticProps<ItemsPageProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: Todo[] = await res.json()

  return {
    props: { todos }, // 将数据传递给页面组件
  }
}

export default function ItemsPage({ todos }: ItemsPageProps) {
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

import type { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface ItemDetailPageProps {
  todo: Todo
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: Todo[] = await res.json()

  const paths = todos.map((todo) => ({
    params: { id: todo.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

// 获取单个任务的数据
export const getStaticProps: GetStaticProps<ItemDetailPageProps> = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params?.id}`)
  const todo: Todo = await res.json()

  return {
    props: { todo },
  }
}

export default function ItemDetailPage({ todo }: ItemDetailPageProps) {
  return (
    <div>
      <h1>任务详情</h1>
      <h2>{todo.title}</h2>
      <p>状态: {todo.completed ? '已完成' : '未完成'}</p>
      <Link href="/items">返回任务列表</Link>
    </div>
  )
}

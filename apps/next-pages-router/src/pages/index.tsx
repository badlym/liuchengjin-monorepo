import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href={`/items`}>进入任务列表</Link>
    </div>
  )
}

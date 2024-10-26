import Link from 'next/link'

export default async function ContainerPage() {
  return (
    <div>
      <Link href={`/items`}>进入任务列表</Link>
    </div>
  )
}

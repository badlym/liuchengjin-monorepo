import './globals.css'

export const metadata = {
  title: '任务应用',
  description: '一个简单的任务列表应用',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-CN">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

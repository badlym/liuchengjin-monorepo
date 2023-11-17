export interface Options {
  isBuild: boolean
  root: string
  compress: string
  enableMock?: boolean
  enableAnalyze?: boolean
  enableStylePxToVw?: boolean
  framework?: 'vue' | 'react' | undefined
  options?: Record<string, any>
}

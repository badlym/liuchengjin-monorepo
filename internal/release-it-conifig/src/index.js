const version = '${version}'
const packageName = process.env.npm_package_name
console.log(packageName, 'packageName')
const scope = packageName?.split('/')[1]
/**
 * @see https://medium.com/valtech-ch/monorepo-semantic-releases-db114811efa5   https://github.com/release-it/release-it
 * @type {{github: {release: boolean, releaseName: string}, git: {commitMessage: string, requireCommits: boolean, commitsPath: string, tagName: string, requireCommitsFail: boolean, push: boolean}, plugins: {"@release-it/conventional-changelog": {path: string, preset: string, infile: string, gitRawCommitsOpts: {path: string}}}, npm: {publish: boolean, versionArgs: string[]}, gitlab: {release: boolean, releaseName: string}, hooks: {"before:git:release": string[]}}}
 */
module.exports = {
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'angular',
      infile: 'CHANGELOG.md', //用于 conventional-changelog.infile 设置自定义文件。默认为 "CHANGELOG.md"。
      path: '.',
      gitRawCommitsOpts: {
        path: '.',
      },
    },
  },
  git: {
    push: true, //用于 git.push 设置是否应推送到远程。默认为 true。
    tagName: `${packageName}-v${version}`, //用于 git.tagName 设置自定义标签名称。默认为 "${version}"。
    commitsPath: '.', //用于 git.commitsPath 设置自定义路径。默认为 "."。
    commitMessage: `feat(${scope}): released version v${version} [no ci]`, //用于 git.commitMessage 设置自定义提交消息。默认为 "chore(release): ${version}"。
    requireCommits: true, //用于 git.requireCommits 设置是否需要提交。默认为 true。
    requireCommitsFail: false, //用于 git.requireCommitsFail 设置是否应在没有提交时失败。默认为 false。
  },
  npm: {
    publish: true,
    versionArgs: ['--workspaces false'], //用于 npm.versionArgs 设置自定义参数。默认为 ["--force"]。
  },
  github: {
    release: true,
    releaseName: `${packageName}-v${version}`,
  },
  gitlab: {
    release: false,
    releaseName: `${packageName}-v${version}`,
  },
  hooks: {
    'before:git:release': ['mvm-update', 'git add --all'],
  },
}

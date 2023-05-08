# 安装依赖

## 安装 `Yarn`

- [Installation - Yarn](https://yarnpkg.com/getting-started/install)

`Node.js >= 16.10` 直接输入以下命令:

```bash
corepack enable
```

`Node.js < 16.10` 则须执行以下命令:

```bash
npm i -g corepack
```

安装完 `Yarn` 后测试是否安装成功:

```bash
yarn -v # 1.22.19
```

安装本项目依赖:

```bash
yarn
```

# 本地开发调试

```bash
yarn start
```

# 部署到 `Github-Pages`

## 配置 `docusaurus.config.js`

需配置 `config.organizationName` 和 `config.projectName` 的值。

## 部署

- [Deploy - Docusaurus](https://docusaurus.io/docs/deployment#deploy)

`PowerShell` :

```bash
cmd /C 'set "GIT_USER=321paranoiawhy" && yarn deploy'
```

这里 `GIT_USER` 的值为项目根目录下 `docusaurus.config.js` 中 `config.organizationName` 的值。

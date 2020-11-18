# TypeScriptEtude
This Repository is learning of TypeScript.
Use This [Tutorial](http://js.studio-kingdom.com/typescript/handbook/basic_types)

# Requirements

- node.js
- TypeScript

# How to setup for OSX/Ubuntu 20.04

### Node.js and nodebrew

1. Setup nodebrew: `curl -L git.io/nodebrew | perl - setup`
2. Activate nodebrew path:
   - If you use bash: `echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile`
   - If you use zsh: `echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zshrc`
3. Read .bash_profile or .zshrc: `source ~/.bash_profile` or `source ~/.zshrc`
4. Install latest Node.js: `nodebrew install-binary stable`
5. Check the Node.js version: `nodebrew --help`,`nodebrew ls`
6. Use Node Version v14.15.0: `nodebrew use v14.15.0`

### TypeScript

#### How to setup TypeScript

1. Install TypeScript Compiler: `npm install -g typescript`
2. Check Your Version of TypeScript: `tsc -v`
    - We Use Version 4.0.5

#### How to run TypeScript
- run TypeScript file on CommandLine: `tsc hoge.ts  && node hoge.js `
    - This command is two consecutive processes described below.
    1. Compile TypeScript to JavaScript: `tsc hoge.ts`
    2. Run JavaScript on CommandLine: `node hoge.js`

# Collaborator

- Chief Engineer: Kosuke Matsuyama
- Engineer: Yusuke Watanabe
- Business Owner: Hinata Nakatsu

# Commit message template

Activate .gitmessage emoji prefix: `git config --global commit.template .gitmessage.txt`

```.gitmessage.txt
# 🐛  :bug: バグ修正
# 👍  :+1: 機能改善
# ✨  :sparkles: 部分的な機能追加
# 🎨  :art: デザイン変更のみ
# 💢  :anger: コンフリクト
# 🚧  :construction: WIP
# 📝  :memo: 文言修正
# 🔧  :wrench: ツール（Tooling）
# 👕  :shirt: Lintエラーの修正やコードスタイルの修正
# 🆙  :up: 依存パッケージなどのアップデート
# ⚙   :gear: config変更
# 📚  :books: ドキュメント
# 🗑️  :wastebasket: 削除（Removal）
```
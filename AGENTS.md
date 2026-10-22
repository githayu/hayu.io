## 概要

hayu.io のプロフィールサイト。Next.js 16 (App Router) + React 19 を `output: 'export'` で静的書き出しし (`out/`)、Firebase Hosting (プロジェクト `hayu-io`) から配信する。1 ページ構成で、上部がプロフィールカード (Intro)、その下が制作物一覧 (Works)。

## コマンド

```sh
pnpm install
pnpm dev         # 開発サーバー
pnpm build       # out/ に静的書き出し
pnpm lint        # eslint .
pnpm typecheck   # tsc --noEmit (TypeScript 7 / @typescript/native)
pnpm deploy      # firebase deploy (公開操作なので実行前にユーザーに確認する)
```

- テストはない
- 書き出し結果の確認は `out/` を静的サーバーで配信する (`python3 -m http.server 3000 --directory out` など)。ローカル確認のポートは 3000
- `/about-me` → `/#about-me` の転送は [firebase.json](firebase.json) の redirects なので、Firebase Hosting エミュレーターでないと確認できない
- ツールチェーン (TypeScript 7、`typescript` → `@typescript/typescript6` のエイリアス、ESLint 10 の設定) は `~/Develop/dev/hayu-apps` と揃えている
- `pnpm-workspace.yaml` の `allowBuilds` で、不要なインストールスクリプト (`@parcel/watcher`、`@tsparticles/engine`) を止めている

## 構成

### スタイルの方式が 3 種類ある

| 範囲                                                                       | 方式                                                                                                      |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| プロフィールカード (`src/app/_components/{Intro,ProfileCard,SocialLinks}`) | グローバル SCSS (BEM 風の `p-` / `c-` クラス)。CSS アニメーションの作品なので UI ライブラリに置き換えない |
| 制作物一覧 (`src/app/_components/Works`)                                   | MUI (Emotion)                                                                                             |
| 制作物のデモ (`Works/demos`)                                               | Shadow DOM + `public/works/demos/*.css`                                                                   |

- `src/app/_styles/globals.css` で `html { font-size: 62.5% }` (1rem = 10px) にしている。MUI のテーマは `typography.htmlFontSize: 10` でこれに合わせている
- globals.css の CSS リセットは Tailwind の preflight 相当を素の CSS で書いたもの

### MUI のテーマは 2 つある ([src/theme.ts](src/theme.ts))

- `theme` (制作物一覧用): OS のライト/ダークに追従し、CSS 変数を使う。`cssVariables.rootSelector` を `#works` にしている。`:root` にすると `color-scheme: dark` がページ全体に掛かり、白地のプロフィールカードの文字が白くなって見えなくなる
- `profileTheme` (プロフィールカード用): ライトモード固定で CSS 変数を使わない (Tooltip はポータルで `#works` の外に描画されるため)。Vue 版の Vuetify 1 の見た目 (primary `#1976d2`) に合わせている

### 制作物一覧

- データは [src/app/\_components/Works/works.json](src/app/_components/Works/works.json)。画像は `public/works/`
- `demo` を持つ作品 (元は CodePen のペン) は iframe ではなく、[DemoStage](src/app/_components/Works/demos/DemoStage.tsx) がシャドウルートの中に直接描画する
  - `:host { all: initial; }` でページから継承されるスタイルを初期値に戻し、ペンの設定どおり normalize.css 5.0.0 と、ペンの CSS (`public/works/demos/`) を `<link>` で読み込む
  - ペンの CSS の `body` は `.body`、normalize の `html` は `:host` に置き換えている
  - `rem` はシャドウルートの中でもページの `html` (62.5%) を基準にするので、ペンの CSS では `px` を使う
  - カードが画面に入ってから描画し、Replay ボタンで再描画する
- `src/assets/works/` は配信しない制作物の素材 (原寸画像、Nicofinder の動画など)。使っていなくてもこのリポジトリで管理するので消さない

### Intro / プロフィールカード

- 状態は jotai。About me の開閉は URL ハッシュ (`#about-me`) と同期する (`_atoms/hash.ts`、`Providers.tsx` の hashchange 監視)
- パーティクルは `@tsparticles/react` v4。`ParticlesProvider` はエンジンの読み込みが終わるまで子要素を描画しないので、ページ全体ではなく `<Particles>` だけを包む (全体を包むと静的 HTML が空になる)
- フォントは Typekit (キット `fsn1pjp`、futura-pt など) と Google Fonts を globals.css で読み込んでいる

## 関連リポジトリ

- `~/Develop/dev/hayu-apps` (apps.hayu.io): 制作物一覧の移設元。トップページは `https://hayu.io/#works` へ転送する。サイト内アプリ (`/random` など) へのリンクは `https://apps.hayu.io/...` の絶対 URL で書く
- `~/Develop/dev/mikumo`: 以前この React 版を `(hayu)` ルートグループとして持っていた (削除済み)

## ドキュメント

実装計画書は `.docs/YYMMDD.title/{spec,tasks}.md` に置く (グローバルの gitignore で除外されるのでコミットされない)。Next.js 移行の経緯と決定事項は `.docs/261022.nextjs-migration/` にある。

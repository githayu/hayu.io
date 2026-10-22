import { createTheme } from '@mui/material/styles'

/** 移行前のBlueprintに合わせたシステムフォント */
const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
].join(',')

/** OSのライト/ダーク設定に追従するテーマ */
export const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
  cssVariables: {
    // :rootに付くとcolor-schemeがページ全体に掛かり、プロフィールカードの文字色まで変わるため制作物一覧に限定する
    rootSelector: '#works',
  },
  shape: {
    borderRadius: 2,
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily,
    // globals.cssでhtmlのfont-sizeを62.5% (10px) にしているため
    htmlFontSize: 10,
  },
})

/**
 * プロフィールカード用のテーマ
 * カードは白地で作られているのでライトモードに固定し、Vue版 (Vuetify 1) の見た目に合わせる
 * CSS変数を使わないので、#works の外やTooltipのポータルでもそのまま使える
 */
export const profileTheme = createTheme({
  palette: {
    // Vuetify 1の既定のprimary
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    fontFamily: "'Ubuntu', 'M PLUS 1p', sans-serif",
    htmlFontSize: 10,
  },
})

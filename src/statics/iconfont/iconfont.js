import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1562901276149'); /* IE9 */
  src: url('./iconfont.eot?t=1562901276149#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1562901276149') format('woff'),
  url('./iconfont.ttf?t=1562901276149') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1562901276149#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`


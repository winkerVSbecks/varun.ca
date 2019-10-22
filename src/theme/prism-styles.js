// require('prism-themes/themes/prism-duotone-dark.css');
// require('prism-themes/themes/prism-base16-ateliersulphurpool.light.css');

export default props => {
  const t = props.theme;
  const c = t.colors.code;
  return {
    'code[class*="language-"], pre[class*="language-"]': {
      fontFamily: t.fonts.code,
      fontSize: t.fontSizes[1],
      lineHeight: t.lineHeights.copy,
      direction: 'ltr',
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      MozTabSize: 4,
      OTabSize: 4,
      tabSize: 4,
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      MsHyphens: 'none',
      hyphens: 'none',
      background: c.background,
      color: c.text,
    },
    'pre[class*="language-"]': {
      padding: `${t.space[3]}px`,
      margin: `0 0 ${t.space[4]}px 0`,
      overflow: 'auto',
      WebkitOverflowScrolling: `touch`,
    },
    '.gatsby-highlight pre::-webkit-scrollbar': {
      width: t.space[2],
      height: t.space[2],
    },
    '.gatsby-highlight pre::-webkit-scrollbar-thumb': {
      background: c.scrollbarThumb,
    },
    '.gatsby-highlight pre::-webkit-scrollbar-track': {
      background: c.scrollbarTrack,
    },
    /* Inline code */
    ':not(pre) > code[class*="language-"]': {
      padding: '.1em',
      borderRadius: '.3em',
    },
    // PrismJS syntax highlighting token styles
    // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/
    '.token': {
      display: `inline`,
    },
    '.token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata': {
      color: c.comment,
    },
    '.token.property, .token.tag, .token.boolean, .token.number, .token.function-name, .token.constant, .token.symbol': {
      color: c.tag,
    },
    '.token.punctuation': {
      color: c.punctuation,
    },
    '.token.selector, .token.attr-name, .token.string, .token.char, .token.function, .token.builtin': {
      color: c.selector,
    },
    '.token.operator, .token.entity, .token.url, .token.variable': {},
    '.token.atrule, .token.attr-value, .token.keyword, .token.class-name': {
      color: c.keyword,
    },
    '.token.inserted': {
      color: c.add,
    },
    '.token.deleted': {
      color: c.remove,
    },
    '.token.regex, .token.important': {
      color: c.regex,
    },
    '.language-css .token.string, .style .token.string': {
      color: c.cssString,
    },
    '.token.important': {
      fontWeight: 'normal',
    },
    '.token.bold': {
      fontWeight: 'bold',
    },
    '.token.italic': {
      fontStyle: `italic`,
    },
    '.token.entity': {
      cursor: `help`,
    },
    '.namespace': {
      opacity: 0.7,
    },
    // PrismJS plugin styles
    '.token.tab:not(:empty):before, .token.cr:before, .token.lf:before': {
      color: c.invisibles,
    },
  };
};

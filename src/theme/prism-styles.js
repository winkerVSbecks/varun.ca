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
      maxHeight: 600,
      WebkitOverflowScrolling: `touch`,
    },
    '.gatsby-code-title': {
      borderBottom: `1px solid ${c.scrollbarTrack}`,
      padding: `${t.space[3]}px`,
      fontFamily: t.fonts.code,
      fontSize: t.fontSizes[0],
      lineHeight: t.lineHeights.copy,
      backgroundColor: c.background,
      color: c.comment,
      zIndex: 0,
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
    '.gatsby-highlight pre::-webkit-scrollbar-corner': {
      background: c.background,
    },
    '.gatsby-highlight-code-line': {
      background: c.lineHighlightBackground,
      display: `block`,
    },
    /* Inline code */
    ':not(pre) > code[class*="language-"]': {
      fontSize: '70%',
      backgroundColor: t.colors.brand.faded,
      padding: '2px 4px',
      borderRadius: 0,
    },
    // PrismJS syntax highlighting token styles
    '.token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata': {
      color: c.comment,
    },
    '.token.punctuation': {
      color: c.punctuation,
    },
    '.token.property': {
      color: c.property,
    },
    '.token.tag': {
      color: c.tag,
    },
    '.token.boolean': {
      color: c.boolean,
    },
    '.token.number': {
      color: c.number,
    },
    '.token.function-name': {
      color: c.functionName,
    },
    '.token.constant': {
      color: c.constant,
    },
    '.token.symbol': {
      color: c.symbol,
    },
    '.token.deleted': {
      color: c.deleted,
    },
    '.token.selector': {
      color: c.selector,
    },
    '.token.attr-name': {
      color: c.attrName,
    },
    '.token.string': {
      color: c.string,
    },
    '.token.char': {
      color: c.char,
    },
    '.token.function': {
      color: c.function,
    },
    '.token.builtin': {
      color: c.builtin,
    },
    '.token.inserted': {
      color: c.inserted,
    },
    '.token.operator': {
      color: c.operator,
    },
    '.token.entity': {
      color: c.entity,
      cursor: `help`,
    },
    '.token.url': {
      color: c.url,
    },
    '.token.variable': {
      color: c.variable,
    },
    '.token.atrule': {
      color: c.atrule,
    },
    '.token.attr-value': {
      color: c.attrValue,
    },
    '.token.keyword': {
      color: c.keyword,
    },
    '.token.class-name': {
      color: c.className,
    },
    '.token.regex': {
      color: c.regex,
    },
    '.token.important': {
      color: c.important,
      fontWeight: 'normal',
    },
    '.language-css .token.string, .style .token.string': {
      color: c.cssString,
    },
    '.token.bold': {
      fontWeight: 'bold',
    },
    '.token.italic': {
      fontStyle: `italic`,
    },
    '.namespace': {
      opacity: 0.7,
    },
    '.token.tab:not(:empty):before, .token.cr:before, .token.lf:before': {
      color: c.invisibles,
    },
  };
};

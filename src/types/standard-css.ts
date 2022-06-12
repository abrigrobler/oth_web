/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import StandardProps from './standard-props';

//Here we build out our standard css stylesheet
const StandardCSS = (styles: StandardProps) => {
  return css`
    //The idea is to have conditional CSS. Basically, if the prop is provided to the component, it overwrites the
    //default theme value.
    color: ${styles.color ? styles.color : 'inherit'};
    //OR we could overwrite, as shown in the next two lines. We need to figure out which is less expensive.

    disabled: ${styles.disabled};
    cursor: ${styles.cursor};
    //MARGINS
    margin: ${styles.m};
    margin-top: ${styles.mt ? styles.mt : styles.my};
    margin-right: ${styles.mr ? styles.mr : styles.mx};
    margin-bottom: ${styles.mb ? styles.mb : styles.my};
    margin-left: ${styles.ml ? styles.ml : styles.mx};

    //PADDING
    padding: ${styles.p};
    padding-top: ${styles.pt ? styles.pt : styles.py};
    padding-right: ${styles.pr ? styles.pr : styles.px};
    padding-bottom: ${styles.pb ? styles.pb : styles.py};
    padding-left: ${styles.pl ? styles.pl : styles.px};

    //BORDER RADIUS
    border-radius: ${styles.borderRadius};

    //FONTS
    font-size: ${styles.fontSize};
    font-family: 'Nunito Sans', Lucida, sans-serif;
    font-family: ${styles.fontFamily};
    font-weight: ${styles.fontWeight};
    //LAYOUT
    flex-grow: ${styles.flexGrow};
    flex-shrink: ${styles.flexShrink};
    flex-basis: ${styles.flexBasis};
    flex: ${styles.flex};
    height: ${styles.height};
    width: ${styles.width};
    min-width: ${styles.minWidth};
    min-height: ${styles.minHeight};
    max-width: ${styles.maxWidth};
    max-height: ${styles.maxHeight};
    text-align: ${styles.textAlign};
    text-justify: ${styles.justifyText};

    //BACKGROUND
    background-color: ${styles.backgroundColor};
    opacity: ${styles.opacity};
    background: ${styles.background};

    //POSITION
    position: ${styles.position};
    bottom: ${styles.bottom};
    top: ${styles.top};
    left: ${styles.left};
    right: ${styles.right};
    z-index: ${styles.zIndex};

    //ALIGNMENT
    align-items: ${styles.alignItems};
    align-content: ${styles.alignContent};
    overflow: ${styles.overflow};
    overflow-x: ${styles.overflowX};
    overflow-y: ${styles.overflowY};

    //Border
    border-bottom: ${styles.borderB};
    border-top: ${styles.borderT};
    border: ${styles.border};

    //shadow
    box-shadow: ${styles.boxShadow || 'initial'};
  `;
};

export default StandardCSS;

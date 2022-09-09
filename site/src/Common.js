import {createGlobalStyle} from 'styled-components';

const Common = createGlobalStyle 
`

@font-face {
    font-family:'Bungee-Inline' ;
    src: url(../fonts/Bungee-Inline.otf);
}
@font-face {
    font-family:'CinzelDecorative-Black' ;
    src: url(../fonts/CinzelDecorative-Black.otf);
}

@font-face {
    font-family:'CinzelDecorative-Bold' ;
    src: url(../fonts/CinzelDecorative-Bold.otf);
}

@font-face {
    font-family:'CinzelDecorative-Regular' ;
    src: url(../fonts/CinzelDecorative-Regular.otf);
}


*{
 margin: 0;
 padding:0;
 box-sizing:border-box;

`;

export default Common;
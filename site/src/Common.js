import {createGlobalStyle} from 'styled-components';

const Common = createGlobalStyle 
`


@font-face {
    font-family:'Cinzel-Regular';
    src: url(../../fonts/Cinzel-Regular.otf);
}

@font-face {
    font-family:'CinzelDecorative-Regular';
    src: url(../../fonts/CinzelDecorative-Regular.otf);
}


@font-face {
    font-family:'Bungee-Inline' ;
    src: url(../../fonts/Bungee-Inline.otf);
}
@font-face {
    font-family:'CinzelDecorative-Black' ;
    src: url(../../fonts/CinzelDecorative-Black.otf);
}

@font-face {
    font-family:'CinzelDecorative-Bold' ;
    src: url(../../fonts/Cinzel-Bold.otf);
}

@font-face {
    font-family:'Poppins-Regular' ;
    src: url(../../fonts/Poppins-Regular.otf);
}

@font-face {
    font-family:'Poppins-Medium' ;
    src: url(../../fonts/Poppins-Medium.otf);
}
@font-face {
    font-family:'Poppins-SemiBold' ;
    src: url(../../fonts/Poppins-SemiBold.otf);


*{
 margin: 0;
 padding:0;
 box-sizing:border-box;

`;

export default Common;
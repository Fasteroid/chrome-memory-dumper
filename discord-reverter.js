/*********************************
*    Fast's Discord Overrides    *
*  for the Classic Look n' Feel  *
*********************************/

/*  HOW TO USE:
    Ctrl + Shift + I in Discord to bring up console.
    Paste and run this to apply supplied CSS overrides and HTML replacements
*/

/* HTML REPLACEMENTS */
{
    // bring back the old logo text
    let titleOverride = document.createElement('img')
        titleOverride.width = "55"
        titleOverride.height = "12"
        titleOverride.viewBox = "0 0 55 12"
        titleOverride.src = "https://cdn.discordapp.com/attachments/672248280222138391/859629110157508638/window-title-old.png"
    document.querySelector('[class^="wordmarkWindow"]').children[0].replaceWith(titleOverride);
}

/* CSS OVERRIDES */
if( document.styleMods == undefined ){
    document.styleMods = document.createElement("style")
    document.head.appendChild(document.styleMods)
}

document.styleMods.innerText = 
`
.theme-dark .wrapper-3WhCwL {
    border-radius: 3px;
    padding: 0 2px;
    font-weight: 500;
    unicode-bidi: -moz-plaintext;
    unicode-bidi: plaintext;
    color: #8ea1e1;
    background: rgba(114,137,218,.1);
    position: relative;
}

[data-popout-root], html {
    --blurple-original: rgb(114,137,217);
    --brand-experiment: var(--blurple-original);
    --brand-experiment-560: var(--blurple-original);
}

:root {
    --font-display: Whitney,"Helvetica Neue",Helvetica,Arial,sans-serif;
}

.name-1jkAdW {
    font-size: 16px;
}

.expandedFolderIconWrapper-Huv7rA svg {
    color: var(--blurple-original) !important;
}
`


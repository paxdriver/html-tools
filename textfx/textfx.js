/* USAGE NOTES: 

If you use this script, please include in the comments { 
    www.krisdriver.com : 'Emergence - Luctor et Emergo' : 'The Melting Pot - A Canadian Guide to Cooking & Nutrition for managing chronic health conditions : @paxdriver' 
}

Please be advised that these scripts require the use of certain keywords. Please avoid using the following words in order to reduce the risk of bugs/conflicts:
 
    *reserved stylesheet @keyframes animation-names*:
    -fallinlinetext
    -riseinlinetext
    -leftinlinetext
    -rightinlinetext
    -altfallinlinetext
    -altriseinlinetext
    -altleftinlinetext
    -altrightinlinetext
    -flipinlinetext
    -growinlinetext
    -shrinkinlinetext
    -flipdowninlinetext
    -flipupinlinetext
    -flashanimation
    -altflashanimation

    *reserved function/variable names*:
    -waveUp
    -waveDown
    -waveLeft
    -waveRight
    -altwaveUp
    -altwaveLeft
    -growIn
    -shrinkIn
    -flipIn
    -flipUp
    -flipDown
    -flash
    -altflash
---------------------------------------------------------------------------------
*/
 

//ANIMATION FROM TOP...
function waveUp(textToAnimate='default text', int_delayOffset=50, fontsize='1rem', color='black', rgba_bgColor='rgba(255,255,255,0)', str_duration='0.75s') {
    // parent of script tag to know where to append the final output...
    const parentOfScriptTag = document.currentScript.parentElement;
 
// STYLE TAG...
    let pageStyle = document.getElementsByTagName('style');
    if (pageStyle[0] === undefined) { // no style tag exists, create new one first
        // console.log(' No style tags exist on the page yet...')
        let newstyletag = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newstyletag);
        return waveUp();  // end the script here and re-run it so the else portion executes instead to avoid collisions in browser rendering...
    }
    else {  // style tag exists, insert rules to it...

// CSS KEYFRAMES...
        // use s for the stylesheet we'll be manipulating...
        let s = pageStyle[0];
        // get the position to insert new rule at the end...
        let sheet_position = s.sheet.rules.length;
        // create new keyframes rule and insert it into the stylesheet...
        s.sheet.insertRule('@keyframes fallinlinetext {' + '0% { transform: scaleX(0); transform: translateY(-1rem); opacity: 0; } 70% { transform: translateY(0.125rem) } 100% { transform: scaleY(1); transform: translateY(0); opacity: 1 }' + '}', sheet_position);

// DIVs BEING ANIMATED...
        // create new elements out of the text string entered...
        let finalDiv = document.createElement('div');   // the ouput
        let text = textToAnimate;
        let txt_array = text.split('');
        let div_array = [];
        // make letters into divs...
        txt_array.forEach( (v)=>{
            // create letter container
            let newdiv = document.createElement('div');
            // create text of letter
            let letter = v;
            if (v === " ") {  // if it's a space, use invisible underscore
                v = "_"; // just to make the spaces visible
                letter = document.createTextNode(v);
                newdiv.setAttribute('value', 'do not display')
            }
            else {  // for all letters that aren't spaces
                letter = document.createTextNode(v);
            }
            // add letter to its container
            newdiv.appendChild(letter);
            newdiv.style.fontSize = fontsize;
            div_array.push(newdiv);
        });

        // apply animation styling to divs containing letters...
        div_array.forEach( (v, i)=>{
            let computedDelay = (i * int_delayOffset) + 'ms';
            v.style.color = color;
            v.style.backgroundColor = rgba_bgColor;
            v.style.padding = "2px";
            v.style.textAlign = 'center';
            v.style.display = 'inline-block';
            v.style.animationDelay = computedDelay;  	// apply animation style and its delayed offset based on index of current letter
            v.style.animationName = 'fallinlinetext';
            v.style.animationDuration = str_duration;
            v.style.animationFillMode = 'forwards';
            v.style.opacity = '0';
        });

        // attach all created divs to the output container...
        div_array.forEach( (v)=>{
            if (v.getAttribute('value') == 'do not display') {
                v.style.animationName = null;
                v.style.opacity = '0 !important';
            }
            finalDiv.appendChild(v);
        });

        // return attached to parent of the script tag that called this function...
        return parentOfScriptTag.appendChild(finalDiv);    
        // usage: <script> textEffect('text i want animated') </script>
    }
}

//ANIMATION FROM BOTTOM
function waveDown(textToAnimate='default text', int_delayOffset=50, fontsize='1rem', color='black', rgba_bgColor='rgba(255,255,255,0)', str_duration='0.75s') {
    // parent of script tag to know where to append the final output...
    const parentOfScriptTag = document.currentScript.parentElement;
 
// STYLE TAG...
    let pageStyle = document.getElementsByTagName('style');
    if (pageStyle[0] === undefined) { // no style tag exists, create new one first
        // console.log(' No style tags exist on the page yet...')
        let newstyletag = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newstyletag);
        return waveDown();  // end the script here and re-run it so the else portion executes instead to avoid collisions in browser rendering...
    }
    else {  // style tag exists, insert rules to it...

// CSS KEYFRAMES...
        // use s for the stylesheet we'll be manipulating...
        let s = pageStyle[0];
        // get the position to insert new rule at the end...
        let sheet_position = s.sheet.rules.length;
        // create new keyframes rule and insert it into the stylesheet...
        s.sheet.insertRule('@keyframes riseinlinetext {' + '0% { transform: scaleY(0); transform: translateY(1rem); opacity: 0; } 70% { transform: translateY(-0.125rem) } 100% { transform: scaleY(1); transform: translateY(0); opacity: 1 }' + '}', sheet_position);

// DIVs BEING ANIMATED...
        // create new elements out of the text string entered...
        let finalDiv = document.createElement('div');   // the ouput
        let text = textToAnimate;
        let txt_array = text.split('');
        let div_array = [];
        // make letters into divs...
        txt_array.forEach( (v)=>{
            // create letter container
            let newdiv = document.createElement('div');
            // create text of letter
            let letter = v;
            if (v === " ") {  // if it's a space, use invisible underscore
                v = "_"; // just to make the spaces visible
                letter = document.createTextNode(v);
                newdiv.setAttribute('value', 'do not display')
            }
            else {  // for all letters that aren't spaces
                letter = document.createTextNode(v);
            }
            // add letter to its container
            newdiv.appendChild(letter);
            newdiv.style.fontSize = fontsize;
            div_array.push(newdiv);
        });

        // apply animation styling to divs containing letters...
        div_array.forEach( (v, i)=>{
            let computedDelay = (i * int_delayOffset) + 'ms';
            v.style.color = color;
            v.style.backgroundColor = rgba_bgColor;
            v.style.padding = "2px";
            v.style.textAlign = 'center';
            v.style.display = 'inline-block';
            v.style.animationDelay = computedDelay;  	// apply animation style and its delayed offset based on index of current letter
            v.style.animationName = 'riseinlinetext';
            v.style.animationDuration = str_duration;
            v.style.animationFillMode = 'forwards';
            v.style.opacity = '0';
        });

        // attach all created divs to the output container...
        div_array.forEach( (v)=>{
            if (v.getAttribute('value') == 'do not display') {
                v.style.animationName = null;
                v.style.opacity = '0 !important';
            }
            finalDiv.appendChild(v);
        });

        // return attached to parent of the script tag that called this function...
        return parentOfScriptTag.appendChild(finalDiv);    
        // usage: <script> textEffect('text i want animated') </script>
    }
}

//ANIMATION FROM LEFT...
function waveLeft(textToAnimate='default text', int_delayOffset=50, fontsize='1rem', color='black', rgba_bgColor='rgba(255,255,255,0)', str_duration='0.75s') {
    // parent of script tag to know where to append the final output...
    const parentOfScriptTag = document.currentScript.parentElement;
 
// STYLE TAG...
    let pageStyle = document.getElementsByTagName('style');
    if (pageStyle[0] === undefined) { // no style tag exists, create new one first
        // console.log(' No style tags exist on the page yet...')
        let newstyletag = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newstyletag);
        return waveLeft();  // end the script here and re-run it so the else portion executes instead to avoid collisions in browser rendering...
    }
    else {  // style tag exists, insert rules to it...

// CSS KEYFRAMES...
        // use s for the stylesheet we'll be manipulating...
        let s = pageStyle[0];
        // get the position to insert new rule at the end...
        let sheet_position = s.sheet.rules.length;
        // create new keyframes rule and insert it into the stylesheet...
        s.sheet.insertRule('@keyframes leftinlinetext {' + '0% { transform: scaleX(0); transform: translateX(1rem); opacity: 0; } 70% { transform: translateX(-0.125rem) } 100% { transform: scaleX(1); transform: translateX(0); opacity: 1 }' + '}', sheet_position);

// DIVs BEING ANIMATED...
        // create new elements out of the text string entered...
        let finalDiv = document.createElement('div');   // the ouput
        let text = textToAnimate;
        let txt_array = text.split('');
        let div_array = [];
        // make letters into divs...
        txt_array.forEach( (v)=>{
            // create letter container
            let newdiv = document.createElement('div');
            // create text of letter
            let letter = v;
            if (v === " ") {  // if it's a space, use invisible underscore
                v = "_"; // just to make the spaces visible
                letter = document.createTextNode(v);
                newdiv.setAttribute('value', 'do not display')
            }
            else {  // for all letters that aren't spaces
                letter = document.createTextNode(v);
            }
            // add letter to its container
            newdiv.appendChild(letter);
            newdiv.style.fontSize = fontsize;
            div_array.push(newdiv);
        });

        // apply animation styling to divs containing letters...
        div_array.forEach( (v, i)=>{
            let computedDelay = (i * int_delayOffset) + 'ms';
            v.style.color = color;
            v.style.backgroundColor = rgba_bgColor;
            v.style.padding = "2px";
            v.style.textAlign = 'center';
            v.style.display = 'inline-block';
            v.style.animationDelay = computedDelay;  	// apply animation style and its delayed offset based on index of current letter
            v.style.animationName = 'leftinlinetext';
            v.style.animationDuration = str_duration;
            v.style.animationFillMode = 'forwards';
            v.style.opacity = '0';
        });

        // attach all created divs to the output container...
        div_array.forEach( (v)=>{
            if (v.getAttribute('value') == 'do not display') {
                v.style.animationName = null;
                v.style.opacity = '0 !important';
            }
            finalDiv.appendChild(v);
        });

        // return attached to parent of the script tag that called this function...
        return parentOfScriptTag.appendChild(finalDiv);    
        // usage: <script> textEffect('text i want animated') </script>
    }
}

//ANIMATION FROM RIGHT...
function waveRight(textToAnimate='default text', int_delayOffset=50, fontsize='1rem', color='black', rgba_bgColor='rgba(255,255,255,0)', str_duration='0.75s') {
    // parent of script tag to know where to append the final output...
    const parentOfScriptTag = document.currentScript.parentElement;
 
// STYLE TAG...
    let pageStyle = document.getElementsByTagName('style');
    if (pageStyle[0] === undefined) { // no style tag exists, create new one first
        // console.log(' No style tags exist on the page yet...')
        let newstyletag = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newstyletag);
        return waveRight();  // end the script here and re-run it so the else portion executes instead to avoid collisions in browser rendering...
    }
    else {  // style tag exists, insert rules to it...

// CSS KEYFRAMES...
        // use s for the stylesheet we'll be manipulating...
        let s = pageStyle[0];
        // get the position to insert new rule at the end...
        let sheet_position = s.sheet.rules.length;
        // create new keyframes rule and insert it into the stylesheet...
        s.sheet.insertRule('@keyframes rightinlinetext {' + '0% { transform: scaleX(0); transform: translateX(-1rem); opacity: 0; } 70% { transform: translateX(0.125rem) } 100% { transform: scaleX(1); transform: translateX(0); opacity: 1 }' + '}', sheet_position);

// DIVs BEING ANIMATED...
        // create new elements out of the text string entered...
        let finalDiv = document.createElement('div');   // the ouput
        let text = textToAnimate;
        let txt_array = text.split('');
        let div_array = [];
        // make letters into divs...
        txt_array.forEach( (v)=>{
            // create letter container
            let newdiv = document.createElement('div');
            // create text of letter
            let letter = v;
            if (v === " ") {  // if it's a space, use invisible underscore
                v = "_"; // just to make the spaces visible
                letter = document.createTextNode(v);
                newdiv.setAttribute('value', 'do not display')
            }
            else {  // for all letters that aren't spaces
                letter = document.createTextNode(v);
            }
            // add letter to its container
            newdiv.appendChild(letter);
            newdiv.style.fontSize = fontsize;
            div_array.push(newdiv);
        });

        // apply animation styling to divs containing letters...
        div_array.forEach( (v, i)=>{
            let computedDelay = (i * int_delayOffset) + 'ms';
            v.style.color = color;
            v.style.backgroundColor = rgba_bgColor;
            v.style.padding = "2px";
            v.style.textAlign = 'center';
            v.style.display = 'inline-block';
            v.style.animationDelay = computedDelay;  	// apply animation style and its delayed offset based on index of current letter
            v.style.animationName = 'rightinlinetext';
            v.style.animationDuration = str_duration;
            v.style.animationFillMode = 'forwards';
            v.style.opacity = '0';
        });

        // attach all created divs to the output container...
        div_array.forEach( (v)=>{
            if (v.getAttribute('value') == 'do not display') {
                v.style.animationName = null;
                v.style.opacity = '0 !important';
            }
            finalDiv.appendChild(v);
        });

        // return attached to parent of the script tag that called this function...
        return parentOfScriptTag.appendChild(finalDiv);    
        // usage: <script> textEffect('text i want animated') </script>
    }
}

//ANIMATION ALTERNATING - starting from TOP...
function altwaveUp(textToAnimate='default text', int_delayOffset=50, fontsize='1rem', color='black', rgba_bgColor='rgba(255,255,255,0)', str_duration='0.75s') {
    // parent of script tag to know where to append the final output...
    const parentOfScriptTag = document.currentScript.parentElement;
    let flipflipswitch = false;
 
// STYLE TAG...
    let pageStyle = document.getElementsByTagName('style');
    if (pageStyle[0] === undefined) { // no style tag exists, create new one first
        // console.log(' No style tags exist on the page yet...')
        let newstyletag = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newstyletag);
        return altwaveUp();  // end the script here and re-run it so the else portion executes instead to avoid collisions in browser rendering...
    }
    else {  // style tag exists, insert rules to it...

// CSS KEYFRAMES...
        // use s for the stylesheet we'll be manipulating...
        let s = pageStyle[0];
        // get the position to insert new rule at the end...
        let sheet_position = s.sheet.rules.length;
        // create new keyframes rule and insert it into the stylesheet...
        s.sheet.insertRule('@keyframes altfallinlinetext {' + '0% { transform: scaleX(0); transform: translateY(-1rem); opacity: 0; } 70% { transform: translateY(0.125rem) } 100% { transform: scaleY(1); transform: translateY(0); opacity: 1 }' + '}', sheet_position);
        s.sheet.insertRule('@keyframes altriseinlinetext {' + '0% { transform: scaleX(0); transform: translateY(1rem); opacity: 0; } 70% { transform: translateY(-0.125rem) } 100% { transform: scaleY(1); transform: translateY(0); opacity: 1 }' + '}', sheet_position);

// DIVs BEING ANIMATED...
        // create new elements out of the text string entered...
        let finalDiv = document.createElement('div');   // the ouput
        let text = textToAnimate;
        let txt_array = text.split('');
        let div_array = [];
        // make letters into divs...
        txt_array.forEach( (v)=>{
            // create letter container
            let newdiv = document.createElement('div');
            // create text of letter
            let letter = v;
            if (v === " ") {  // if it's a space, use invisible underscore
                v = "_"; // just to make the spaces visible
                letter = document.createTextNode(v);
                newdiv.setAttribute('value', 'do not display')
            }
            else {  // for all letters that aren't spaces
                letter = document.createTextNode(v);
            }
            // add letter to its container
            newdiv.appendChild(letter);
            newdiv.style.fontSize = fontsize;
            div_array.push(newdiv);
        });

        // apply animation styling to divs containing letters...
        div_array.forEach( (v, i)=>{
            let computedDelay = (i * int_delayOffset) + 'ms';
            v.style.color = color;
            v.style.backgroundColor = rgba_bgColor;
            v.style.padding = "2px";
            v.style.textAlign = 'center';
            v.style.display = 'inline-block';
            v.style.animationDelay = computedDelay;  	// apply animation style and its delayed offset based on index of current letter
            v.style.animationName = 'altfallinlinetext';

            // alternate animation between letters
            (flipflipswitch) ? v.style.animationName = 'altfallinlinetext' : v.style.animationName = 'altriseinlinetext';
            // if the current div letter is a space, don't flip the alternating switch...
            if (v.getAttribute('value') !== 'do not display') { flipflipswitch = (!flipflipswitch) };

            v.style.animationDuration = str_duration;
            v.style.animationFillMode = 'forwards';
            v.style.opacity = '0';
        });

        // attach all created divs to the output container...
        div_array.forEach( (v)=>{
            if (v.getAttribute('value') == 'do not display') {
                v.style.animationName = null;
                v.style.opacity = '0 !important';
            }
            finalDiv.appendChild(v);
        });

        // return attached to parent of the script tag that called this function...
        return parentOfScriptTag.appendChild(finalDiv);    
        // usage: <script> textEffect('text i want animated') </script>
    }
}

//ANIMATION ALTERNATING - starting from LEFT...
function altwaveLeft(textToAnimate='default text', int_delayOffset=50, fontsize='1rem', color='black', rgba_bgColor='rgba(255,255,255,0)', str_duration='0.75s') {
    // parent of script tag to know where to append the final output...
    const parentOfScriptTag = document.currentScript.parentElement;
    let flipflipswitch = false;
// STYLE TAG...
    let pageStyle = document.getElementsByTagName('style');
    if (pageStyle[0] === undefined) { // no style tag exists, create new one first
        // console.log(' No style tags exist on the page yet...')
        let newstyletag = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newstyletag);
        return altwaveLeft();  // end the script here and re-run it so the else portion executes instead to avoid collisions in browser rendering...
    }
    else {  // style tag exists, insert rules to it...

// CSS KEYFRAMES...
        // use s for the stylesheet we'll be manipulating...
        let s = pageStyle[0];
        // get the position to insert new rule at the end...
        let sheet_position = s.sheet.rules.length;
        // create new keyframes rule and insert it into the stylesheet...
        s.sheet.insertRule('@keyframes altleftinlinetext {' + '0% { transform: scaleX(0); transform: translateX(1rem); opacity: 0; } 70% { transform: translateX(-0.125rem) } 100% { transform: scaleX(1); transform: translateX(0); opacity: 1 }' + '}', sheet_position);
        s.sheet.insertRule('@keyframes altrightinlinetext {' + '0% { transform: scaleX(0); transform: translateX(-1rem); opacity: 0; } 70% { transform: translateX(0.125rem) } 100% { transform: scaleX(1); transform: translateX(0); opacity: 1 }' + '}', sheet_position);

// DIVs BEING ANIMATED...
        // create new elements out of the text string entered...
        let finalDiv = document.createElement('div');   // the ouput
        let text = textToAnimate;
        let txt_array = text.split('');
        let div_array = [];
        // make letters into divs...
        txt_array.forEach( (v)=>{
            // create letter container
            let newdiv = document.createElement('div');
            // create text of letter
            let letter = v;
            if (v === " ") {  // if it's a space, use invisible underscore
                v = "_"; // just to make the spaces visible
                letter = document.createTextNode(v);
                newdiv.setAttribute('value', 'do not display')
            }
            else {  // for all letters that aren't spaces
                letter = document.createTextNode(v);
            }
            // add letter to its container
            newdiv.appendChild(letter);
            newdiv.style.fontSize = fontsize;
            div_array.push(newdiv);
        });

        // apply animation styling to divs containing letters...
        div_array.forEach( (v, i)=>{
            let computedDelay = (i * int_delayOffset) + 'ms';
            v.style.color = color;
            v.style.backgroundColor = rgba_bgColor;
            v.style.padding = "2px";
            v.style.textAlign = 'center';
            v.style.display = 'inline-block';
            v.style.animationDelay = computedDelay;  	// apply animation style and its delayed offset based on index of current letter
            // alternate animation between letters
            (flipflipswitch) ? v.style.animationName = 'altleftinlinetext' : v.style.animationName = 'altrightinlinetext';
            // if the current div letter is a space, don't flip the alternating switch...
            if (v.getAttribute('value') !== 'do not display') { flipflipswitch = (!flipflipswitch) };
            v.style.animationDuration = str_duration;
            v.style.animationFillMode = 'forwards';
            v.style.opacity = '0';
        });

        // attach all created divs to the output container...
        div_array.forEach( (v)=>{
            if (v.getAttribute('value') == 'do not display') {
                v.style.animationName = null;
                v.style.opacity = '0 !important';
            }
            finalDiv.appendChild(v);
        });

        // return attached to parent of the script tag that called this function...
        return parentOfScriptTag.appendChild(finalDiv);    
        // usage: <script> textEffect('text i want animated') </script>
    }
}

//ANIMATION EXPAND IN...
function growIn(textToAnimate='default text', int_delayOffset=50, fontsize='1rem', color='black', rgba_bgColor='rgba(255,255,255,0)', str_duration='0.75s') {
    // parent of script tag to know where to append the final output...
    const parentOfScriptTag = document.currentScript.parentElement;
 
// STYLE TAG...
    let pageStyle = document.getElementsByTagName('style');
    if (pageStyle[0] === undefined) { // no style tag exists, create new one first
        // console.log(' No style tags exist on the page yet...')
        let newstyletag = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newstyletag);
        return growIn();  // end the script here and re-run it so the else portion executes instead to avoid collisions in browser rendering...
    }
    else {  // style tag exists, insert rules to it...

// CSS KEYFRAMES...
        // use s for the stylesheet we'll be manipulating...
        let s = pageStyle[0];
        // get the position to insert new rule at the end...
        let sheet_position = s.sheet.rules.length;
        // create new keyframes rule and insert it into the stylesheet...
        s.sheet.insertRule('@keyframes growinlinetext {' + '0% { transform: scale(0); opacity: 0; } 70% { transform: scale(1.15rem) } 100% { transform: scale(1); opacity: 1 }' + '}', sheet_position);

// DIVs BEING ANIMATED...
        // create new elements out of the text string entered...
        let finalDiv = document.createElement('div');   // the ouput
        let text = textToAnimate;
        let txt_array = text.split('');
        let div_array = [];
        // make letters into divs...
        txt_array.forEach( (v)=>{
            // create letter container
            let newdiv = document.createElement('div');
            // create text of letter
            let letter = v;
            if (v === " ") {  // if it's a space, use invisible underscore
                v = "_"; // just to make the spaces visible
                letter = document.createTextNode(v);
                newdiv.setAttribute('value', 'do not display')
            }
            else {  // for all letters that aren't spaces
                letter = document.createTextNode(v);
            }
            // add letter to its container
            newdiv.appendChild(letter);
            newdiv.style.fontSize = fontsize;
            div_array.push(newdiv);
        });

        // apply animation styling to divs containing letters...
        div_array.forEach( (v, i)=>{
            let computedDelay = (i * int_delayOffset) + 'ms';
            v.style.color = color;
            v.style.backgroundColor = rgba_bgColor;
            v.style.padding = "2px";
            v.style.textAlign = 'center';
            v.style.display = 'inline-block';
            v.style.animationDelay = computedDelay;  	// apply animation style and its delayed offset based on index of current letter
            v.style.animationName = 'growinlinetext';
            v.style.animationDuration = str_duration;
            v.style.animationFillMode = 'forwards';
            v.style.opacity = '0';
        });

        // attach all created divs to the output container...
        div_array.forEach( (v)=>{
            if (v.getAttribute('value') == 'do not display') {
                v.style.animationName = null;
                v.style.opacity = '0 !important';
            }
            finalDiv.appendChild(v);
        });

        // return attached to parent of the script tag that called this function...
        return parentOfScriptTag.appendChild(finalDiv);    
        // usage: <script> textEffect('text i want animated') </script>
    }
}

//ANIMATION SHRINK IN...
function shrinkIn(textToAnimate='default text', int_delayOffset=50, fontsize='1rem', color='black', rgba_bgColor='rgba(255,255,255,0)', str_duration='0.75s') {
    // parent of script tag to know where to append the final output...
    const parentOfScriptTag = document.currentScript.parentElement;
 
// STYLE TAG...
    let pageStyle = document.getElementsByTagName('style');
    if (pageStyle[0] === undefined) { // no style tag exists, create new one first
        // console.log(' No style tags exist on the page yet...')
        let newstyletag = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newstyletag);
        return shrinkIn();  // end the script here and re-run it so the else portion executes instead to avoid collisions in browser rendering...
    }
    else {  // style tag exists, insert rules to it...

// CSS KEYFRAMES...
        // use s for the stylesheet we'll be manipulating...
        let s = pageStyle[0];
        // get the position to insert new rule at the end...
        let sheet_position = s.sheet.rules.length;
        // create new keyframes rule and insert it into the stylesheet...
        s.sheet.insertRule('@keyframes shrinkinlinetext {' + '0% { transform: scale(2); opacity: 0; } 70% { transform: scale(0.85rem) } 100% { transform: scale(1); opacity: 1 }' + '}', sheet_position);

// DIVs BEING ANIMATED...
        // create new elements out of the text string entered...
        let finalDiv = document.createElement('div');   // the ouput
        let text = textToAnimate;
        let txt_array = text.split('');
        let div_array = [];
        // make letters into divs...
        txt_array.forEach( (v)=>{
            // create letter container
            let newdiv = document.createElement('div');
            // create text of letter
            let letter = v;
            if (v === " ") {  // if it's a space, use invisible underscore
                v = "_"; // just to make the spaces visible
                letter = document.createTextNode(v);
                newdiv.setAttribute('value', 'do not display')
            }
            else {  // for all letters that aren't spaces
                letter = document.createTextNode(v);
            }
            // add letter to its container
            newdiv.appendChild(letter);
            newdiv.style.fontSize = fontsize;
            div_array.push(newdiv);
        });

        // apply animation styling to divs containing letters...
        div_array.forEach( (v, i)=>{
            let computedDelay = (i * int_delayOffset) + 'ms';
            v.style.color = color;
            v.style.backgroundColor = rgba_bgColor;
            v.style.padding = "2px";
            v.style.textAlign = 'center';
            v.style.display = 'inline-block';
            v.style.animationDelay = computedDelay;  	// apply animation style and its delayed offset based on index of current letter
            v.style.animationName = 'shrinkinlinetext';
            v.style.animationDuration = str_duration;
            v.style.animationFillMode = 'forwards';
            v.style.opacity = '0';
        });

        // attach all created divs to the output container...
        div_array.forEach( (v)=>{
            if (v.getAttribute('value') == 'do not display') {
                v.style.animationName = null;
                v.style.opacity = '0 !important';
            }
            finalDiv.appendChild(v);
        });

        // return attached to parent of the script tag that called this function...
        return parentOfScriptTag.appendChild(finalDiv);    
        // usage: <script> textEffect('text i want animated') </script>
    }
}

//ANIMATION FLIP IN...
function flipIn(textToAnimate='default text', int_delayOffset=50, fontsize='1rem', color='black', rgba_bgColor='rgba(255,255,255,0)', str_duration='0.75s') {
    // parent of script tag to know where to append the final output...
    const parentOfScriptTag = document.currentScript.parentElement;
 
// STYLE TAG...
    let pageStyle = document.getElementsByTagName('style');
    if (pageStyle[0] === undefined) { // no style tag exists, create new one first
        // console.log(' No style tags exist on the page yet...')
        let newstyletag = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newstyletag);
        return flipIn();  // end the script here and re-run it so the else portion executes instead to avoid collisions in browser rendering...
    }
    else {  // style tag exists, insert rules to it...

// CSS KEYFRAMES...
        // use s for the stylesheet we'll be manipulating...
        let s = pageStyle[0];
        // get the position to insert new rule at the end...
        let sheet_position = s.sheet.rules.length;
        // create new keyframes rule and insert it into the stylesheet...
        s.sheet.insertRule('@keyframes flipinlinetext {' + '0% { transform: rotateY(-180deg); opacity: 0; } 70% { transform: rotateY(23deg) } 100% { transform: rotateY(0deg); opacity: 1 }' + '}', sheet_position);

// DIVs BEING ANIMATED...
        // create new elements out of the text string entered...
        let finalDiv = document.createElement('div');   // the ouput
        let text = textToAnimate;
        let txt_array = text.split('');
        let div_array = [];
        // make letters into divs...
        txt_array.forEach( (v)=>{
            // create letter container
            let newdiv = document.createElement('div');
            // create text of letter
            let letter = v;
            if (v === " ") {  // if it's a space, use invisible underscore
                v = "_"; // just to make the spaces visible
                letter = document.createTextNode(v);
                newdiv.setAttribute('value', 'do not display')
            }
            else {  // for all letters that aren't spaces
                letter = document.createTextNode(v);
            }
            // add letter to its container
            newdiv.appendChild(letter);
            newdiv.style.fontSize = fontsize;
            div_array.push(newdiv);
        });

        // apply animation styling to divs containing letters...
        div_array.forEach( (v, i)=>{
            let computedDelay = (i * int_delayOffset) + 'ms';
            v.style.color = color;
            // v.style.backfaceVisibility = 'hidden';   // Uncomment this to hide inverted text before flip animation
            v.style.backgroundColor = rgba_bgColor;
            v.style.padding = "2px";
            v.style.textAlign = 'center';
            v.style.display = 'inline-block';
            v.style.animationDelay = computedDelay;  	// apply animation style and its delayed offset based on index of current letter
            v.style.animationName = 'flipinlinetext';
            v.style.animationDuration = str_duration;
            v.style.animationFillMode = 'forwards';
            v.style.opacity = '0';
        });

        // attach all created divs to the output container...
        div_array.forEach( (v)=>{
            if (v.getAttribute('value') == 'do not display') {
                v.style.animationName = null;
                v.style.opacity = '0 !important';
            }
            finalDiv.appendChild(v);
        });

        // return attached to parent of the script tag that called this function...
        return parentOfScriptTag.appendChild(finalDiv);    
        // usage: <script> textEffect('text i want animated') </script>
    }
}

//ANIMATION FLIP UP...
function flipUp(textToAnimate='default text', int_delayOffset=50, fontsize='1rem', color='black', rgba_bgColor='rgba(255,255,255,0)', str_duration='0.75s') {
    // parent of script tag to know where to append the final output...
    const parentOfScriptTag = document.currentScript.parentElement;
 
// STYLE TAG...
    let pageStyle = document.getElementsByTagName('style');
    if (pageStyle[0] === undefined) { // no style tag exists, create new one first
        // console.log(' No style tags exist on the page yet...')
        let newstyletag = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newstyletag);
        return flipUp();  // end the script here and re-run it so the else portion executes instead to avoid collisions in browser rendering...
    }
    else {  // style tag exists, insert rules to it...

// CSS KEYFRAMES...
        // use s for the stylesheet we'll be manipulating...
        let s = pageStyle[0];
        // get the position to insert new rule at the end...
        let sheet_position = s.sheet.rules.length;
        // create new keyframes rule and insert it into the stylesheet...
        s.sheet.insertRule('@keyframes flipupinlinetext {' + '0% { transform: rotateX(-180deg); opacity: 0; } 70% { transform: rotateX(23deg) } 100% { transform: rotateX(0deg); opacity: 1 }' + '}', sheet_position);

// DIVs BEING ANIMATED...
        // create new elements out of the text string entered...
        let finalDiv = document.createElement('div');   // the ouput
        let text = textToAnimate;
        let txt_array = text.split('');
        let div_array = [];
        // make letters into divs...
        txt_array.forEach( (v)=>{
            // create letter container
            let newdiv = document.createElement('div');
            // create text of letter
            let letter = v;
            if (v === " ") {  // if it's a space, use invisible underscore
                v = "_"; // just to make the spaces visible
                letter = document.createTextNode(v);
                newdiv.setAttribute('value', 'do not display')
            }
            else {  // for all letters that aren't spaces
                letter = document.createTextNode(v);
            }
            // add letter to its container
            newdiv.appendChild(letter);
            newdiv.style.fontSize = fontsize;
            div_array.push(newdiv);
        });

        // apply animation styling to divs containing letters...
        div_array.forEach( (v, i)=>{
            let computedDelay = (i * int_delayOffset) + 'ms';
            v.style.color = color;
            // v.style.backfaceVisibility = 'hidden';   // Uncomment this to hide inverted text before flip animation
            v.style.backgroundColor = rgba_bgColor;
            v.style.padding = "2px";
            v.style.textAlign = 'center';
            v.style.display = 'inline-block';
            v.style.animationDelay = computedDelay;  	// apply animation style and its delayed offset based on index of current letter
            v.style.animationName = 'flipupinlinetext';
            v.style.animationDuration = str_duration;
            v.style.animationFillMode = 'forwards';
            v.style.opacity = '0';
        });

        // attach all created divs to the output container...
        div_array.forEach( (v)=>{
            if (v.getAttribute('value') == 'do not display') {
                v.style.animationName = null;
                v.style.opacity = '0 !important';
            }
            finalDiv.appendChild(v);
        });

        // return attached to parent of the script tag that called this function...
        return parentOfScriptTag.appendChild(finalDiv);    
        // usage: <script> textEffect('text i want animated') </script>
    }
}

//ANIMATION FLIP DOWN...
function flipDown(textToAnimate='default text', int_delayOffset=50, fontsize='1rem', color='black', rgba_bgColor='rgba(255,255,255,0)', str_duration='0.75s') {
    // parent of script tag to know where to append the final output...
    const parentOfScriptTag = document.currentScript.parentElement;
 
// STYLE TAG...
    let pageStyle = document.getElementsByTagName('style');
    if (pageStyle[0] === undefined) { // no style tag exists, create new one first
        // console.log(' No style tags exist on the page yet...')
        let newstyletag = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newstyletag);
        return flipDown();  // end the script here and re-run it so the else portion executes instead to avoid collisions in browser rendering...
    }
    else {  // style tag exists, insert rules to it...

// CSS KEYFRAMES...
        // use s for the stylesheet we'll be manipulating...
        let s = pageStyle[0];
        // get the position to insert new rule at the end...
        let sheet_position = s.sheet.rules.length;
        // create new keyframes rule and insert it into the stylesheet...
        s.sheet.insertRule('@keyframes flipdowninlinetext {' + '0% { transform: rotateX(180deg); opacity: 0; } 70% { transform: rotateX(-23deg) } 100% { transform: rotateX(0deg); opacity: 1 }' + '}', sheet_position);

// DIVs BEING ANIMATED...
        // create new elements out of the text string entered...
        let finalDiv = document.createElement('div');   // the ouput
        let text = textToAnimate;
        let txt_array = text.split('');
        let div_array = [];
        // make letters into divs...
        txt_array.forEach( (v)=>{
            // create letter container
            let newdiv = document.createElement('div');
            // create text of letter
            let letter = v;
            if (v === " ") {  // if it's a space, use invisible underscore
                v = "_"; // just to make the spaces visible
                letter = document.createTextNode(v);
                newdiv.setAttribute('value', 'do not display')
            }
            else {  // for all letters that aren't spaces
                letter = document.createTextNode(v);
            }
            // add letter to its container
            newdiv.appendChild(letter);
            newdiv.style.fontSize = fontsize;
            div_array.push(newdiv);
        });

        // apply animation styling to divs containing letters...
        div_array.forEach( (v, i)=>{
            let computedDelay = (i * int_delayOffset) + 'ms';
            v.style.color = color;
            // v.style.backfaceVisibility = 'hidden';   // Uncomment this to hide inverted text before flip animation
            v.style.backgroundColor = rgba_bgColor;
            v.style.padding = "2px";
            v.style.textAlign = 'center';
            v.style.display = 'inline-block';
            v.style.animationDelay = computedDelay;  	// apply animation style and its delayed offset based on index of current letter
            v.style.animationName = 'flipdowninlinetext';
            v.style.animationDuration = str_duration;
            v.style.animationFillMode = 'forwards';
            v.style.opacity = '0';
        });

        // attach all created divs to the output container...
        div_array.forEach( (v)=>{
            if (v.getAttribute('value') == 'do not display') {
                v.style.animationName = null;
                v.style.opacity = '0 !important';
            }
            finalDiv.appendChild(v);
        });

        // return attached to parent of the script tag that called this function...
        return parentOfScriptTag.appendChild(finalDiv);    
        // usage: <script> textEffect('text i want animated') </script>
    }
}


//ANIMATION FLASH EFFECT...
function flash(textToAnimate='default text', int_delayOffset=50, fontsize='1rem', color='black', rgba_bgColor='rgba(255,255,255,0)', str_duration='0.75s', direction=true) {
    // parent of script tag to know where to append the final output...
    const parentOfScriptTag = document.currentScript.parentElement;
 
// STYLE TAG...
    let pageStyle = document.getElementsByTagName('style');
    if (pageStyle[0] === undefined) { // no style tag exists, create new one first
        // console.log(' No style tags exist on the page yet...')
        let newstyletag = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newstyletag);
        return flash();  // end the script here and re-run it so the else portion executes instead to avoid collisions in browser rendering...
    }
    else {  // style tag exists, insert rules to it...

// CSS KEYFRAMES...
        // use s for the stylesheet we'll be manipulating...
        let s = pageStyle[0];
        // get the position to insert new rule at the end...
        let sheet_position = s.sheet.rules.length;
        let anim = '';

// Flash direction, t: right-to-left  f: left-to-right
        if (direction){
            anim = '@keyframes flashanimation {' + '0% { transform: rotateY(-120deg); opacity: 0; } 50% { transform: rotateY(-90deg); opacity: 0.15; } 100% { transform: rotateY(0deg); opacity: 1 }' + '}';
        }
        else {
            anim = '@keyframes flashanimation {' + '0% { transform: rotateY(120deg); opacity: 0; } 50% { transform: rotateY(90deg); opacity: 0.15; } 100% { transform: rotateY(0deg); opacity: 1 }' + '}'
        }
        // create new keyframes rule and insert it into the stylesheet...
        s.sheet.insertRule(anim, sheet_position);

// DIVs BEING ANIMATED...
        // create new elements out of the text string entered...
        let finalDiv = document.createElement('div');   // the ouput
            finalDiv.style.perspective = "25px";
            finalDiv.style.transformStyle = "preserve-3d";
            finalDiv.style.transformOrigin = "50% 50%";
        let text = textToAnimate;
        let txt_array = text.split('');
        let div_array = [];
        // make letters into divs...
        txt_array.forEach( (v)=>{
            // create letter container
            let newdiv = document.createElement('div');
            // create text of letter
            let letter = v;
            if (v === " ") {  // if it's a space, use invisible underscore
                v = "_"; // just to make the spaces visible
                letter = document.createTextNode(v);
                newdiv.setAttribute('value', 'do not display')
            }
            else {  // for all letters that aren't spaces
                letter = document.createTextNode(v);
            }
            // add letter to its container
            newdiv.appendChild(letter);
            newdiv.style.fontSize = fontsize;
            div_array.push(newdiv);
        });

        // apply animation styling to divs containing letters...
        div_array.forEach( (v, i)=>{
            let computedDelay = (i * int_delayOffset) + 'ms';
            v.style.color = color;
            // v.style.backfaceVisibility = 'hidden';   // Uncomment this to hide inverted text before flip animation
            v.style.backgroundColor = rgba_bgColor;
            v.style.padding = "2px";
            v.style.textAlign = 'center';
            v.style.display = 'inline-block';
            v.style.animationDelay = computedDelay;  	// apply animation style and its delayed offset based on index of current letter
            v.style.animationName = 'flashanimation';
            v.style.animationDuration = str_duration;
            v.style.animationFillMode = 'forwards';
            v.style.opacity = '0';
        });

        // attach all created divs to the output container...
        div_array.forEach( (v)=>{
            if (v.getAttribute('value') == 'do not display') {
                v.style.animationName = null;
                v.style.opacity = '0 !important';
            }
            finalDiv.appendChild(v);
        });

        // return attached to parent of the script tag that called this function...
        return parentOfScriptTag.appendChild(finalDiv);    
        // usage: <script> textEffect('text i want animated') </script>
    }
}

//ANIMATION ALTFLASH EFFECT...
function altflash(textToAnimate='default text', int_delayOffset=50, fontsize='1rem', color='black', rgba_bgColor='rgba(255,255,255,0)', str_duration='0.75s', direction=true) {
    // parent of script tag to know where to append the final output...
    const parentOfScriptTag = document.currentScript.parentElement;
 
// STYLE TAG...
    let pageStyle = document.getElementsByTagName('style');
    if (pageStyle[0] === undefined) { // no style tag exists, create new one first
        // console.log(' No style tags exist on the page yet...')
        let newstyletag = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(newstyletag);
        return altflash();  // end the script here and re-run it so the else portion executes instead to avoid collisions in browser rendering...
    }
    else {  // style tag exists, insert rules to it...

// CSS KEYFRAMES...
        // use s for the stylesheet we'll be manipulating...
        let s = pageStyle[0];
        // get the position to insert new rule at the end...
        let sheet_position = s.sheet.rules.length;
        let anim = '';

// Flash direction, t: right-to-left  f: left-to-right
        if (direction){
            anim = '@keyframes altflashanimation {' + '0% { transform: rotateY(-90deg); opacity: 0; } 50% { transform: rotateY(-120deg); opacity: 0.15; } 100% { transform: rotateY(0deg); opacity: 1 }' + '}';
        }
        else {
            anim = '@keyframes altflashanimation {' + '0% { transform: rotateY(90deg); opacity: 0; } 50% { transform: rotateY(90deg); opacity: 0.15; } 100% { transform: rotateY(0deg); opacity: 1 }' + '}'
        }
        // create new keyframes rule and insert it into the stylesheet...
        s.sheet.insertRule(anim, sheet_position);

// DIVs BEING ANIMATED...
        // create new elements out of the text string entered...
        let finalDiv = document.createElement('div');   // the ouput
            finalDiv.style.perspective = "25px";
            finalDiv.style.transformStyle = "preserve-3d";
            finalDiv.style.transformOrigin = "50% 50%";
        let text = textToAnimate;
        let txt_array = text.split('');
        let div_array = [];
        // make letters into divs...
        txt_array.forEach( (v)=>{
            // create letter container
            let newdiv = document.createElement('div');
            // create text of letter
            let letter = v;
            if (v === " ") {  // if it's a space, use invisible underscore
                v = "_"; // just to make the spaces visible
                letter = document.createTextNode(v);
                newdiv.setAttribute('value', 'do not display')
            }
            else {  // for all letters that aren't spaces
                letter = document.createTextNode(v);
            }
            // add letter to its container
            newdiv.appendChild(letter);
            newdiv.style.fontSize = fontsize;
            div_array.push(newdiv);
        });

        // apply animation styling to divs containing letters...
        div_array.forEach( (v, i)=>{
            let computedDelay = (i * int_delayOffset) + 'ms';
            v.style.color = color;
            // v.style.backfaceVisibility = 'hidden';   // Uncomment this to hide inverted text before flip animation
            v.style.backgroundColor = rgba_bgColor;
            v.style.padding = "2px";
            v.style.textAlign = 'center';
            v.style.display = 'inline-block';
            v.style.animationDelay = computedDelay;  	// apply animation style and its delayed offset based on index of current letter
            v.style.animationName = 'altflashanimation';
            v.style.animationDuration = str_duration;
            v.style.animationFillMode = 'forwards';
            v.style.opacity = '0';
        });

        // attach all created divs to the output container...
        div_array.forEach( (v)=>{
            if (v.getAttribute('value') == 'do not display') {
                v.style.animationName = null;
                v.style.opacity = '0 !important';
            }
            finalDiv.appendChild(v);
        });

        // return attached to parent of the script tag that called this function...
        return parentOfScriptTag.appendChild(finalDiv);    
        // usage: <script> textEffect('text i want animated') </script>
    }
}



/* ABOUT: 

This script is free to use and modify and redistribute if you'd like, but mostly it's for education purposes since it's not very well optimized or anything like that.

Please show your support by engaging with likes, comments and subscriptions to my free services (youTube @paxdriver, twitter @paxdriver, facebook @emergencenovel, iTunes/Spotify artist: Kristopher Driver)

If you can afford to purchase my books / music / graphics, please head to www.krisdriver.com for links to these and other related creative products I've published. Every sale goes a long way to helping me release more free goodies of all sorts.

*/
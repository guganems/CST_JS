function js_style(){
    let div = document.getElementById('text');
    div.style.fontFamily = 'monospace';
    div.style.fontSize = '20px';
    // სკრიპტის მიბმა არ დაგავიწყდეს
    div.style.color = 'green';
}

function getFormvalue(){
    let firstname = document.forms['form1']['fname'].value;
    let lastname = document.forms['form1']['lname'].value;

    document.write(firstname + '<br />');
    document.write(lastname);
}

function setBackgroundColorOfParagraph(paragraphId, color){
    paragraph = document.getElementById(paragraphId);

    paragraph.style.background = color;
}

function getAttributes(){
    element = document.getElementById('w3r');

    href = element.getAttribute('href');
    hreflang = element.getAttribute('hreflang');
    rel = element.getAttribute('rel');
    target = element.getAttribute('target');
    type = element.getAttribute('type');
    
    document.write("href:  " + href + "<br />");
    document.write("hreflang:  " + hreflang + "<br />");
    document.write("rel:  " + rel + "<br />");
    document.write("target:  " + target + "<br />");
    document.write("type:  " + type);
}
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
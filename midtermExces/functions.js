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

function insert_Row(){
    let table = document.getElementById('sampleTable');
    
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");

    table.appendChild(row);
    row.appendChild(col1);
    row.appendChild(col2);

    let rowNum = document.getElementById('sampleTable').rows.length++;

    col1.innerHTML = "Row" + rowNum + " cell1";
    col2.innerHTML = "Row" + rowNum + " cell2";
    
}

function changeContent(rowNumber, columnNumber, text){
    row = document.getElementById('myTable').rows[rowNumber];
    // row-S !!!
    cell = row.getElementsByTagName('td')[columnNumber];

    cell.innerHTML = text;
}

function createTable(rowNum, colNum){
    let table = document.getElementById('myTable');

    for (let i = 1; i <= rowNum; i++){
        let row = document.createElement('tr');
        table.appendChild(row);
        for (let j = 1; j <= colNum; j++){
            let cell = document.createElement('td');
            row.appendChild(cell);
            cell.innerHTML = "Row-" + i + " Col-" + j;
        }
    }
}

function removecolor(){
    let select = document.getElementById('colorSelect');

    for (let i = 0; i < select.length; i++){
        if (select.options[i].value == select.value){
            select.remove(i);
        }
    }
}

function getOptions(){
    let select = document.getElementById('mySelect');

    let selectOptions = new Array();

    for (let i = 0; i < select.length; i++){
        selectOptions.push(select.options[i].value);
    }

    alert(select.length + "\n" + selectOptions.join("\n"));
}

function calculate(){
    let radius = document.forms['calculateRadius']['radius'].value;

    let volume = Math.pow(radius, 3) * Math.PI * (4/3);

    let volumeHTML = document.forms['calculateRadius']['volume'];
    volumeHTML.value = volume;
}

function showRandomImage(){
    let images = [
        {
            src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
            width: "240",
            height: "160"
        },

        {
            src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
            width: "320",
            height: "195"
        },

        {
            src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
            width: "500",
            height: "343"
        }
    ];

    let randomNumber = Math.floor(Math.random() * 3);

    let imageTag = document.getElementById('randomImage');

    imageTag.setAttribute('src', images[randomNumber].src);
    imageTag.setAttribute('width', images[randomNumber].width);
    imageTag.setAttribute('height', images[randomNumber].height);
}

function highlight(){
    let boldWordsCount = document.getElementsByTagName('b').length;

    for (let i = 0; i < boldWordsCount; i++){
        let boldWord = document.getElementsByTagName('b')[i];
        boldWord.style.background = 'green';
    }
}

function removeHighlight(){
    let boldWordsCount = document.getElementsByTagName('b').length;

    for (let i = 0; i < boldWordsCount; i++){
        let boldWord = document.getElementsByTagName('b')[i];
        boldWord.style.background = 'none';
    }
}
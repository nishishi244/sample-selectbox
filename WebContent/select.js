var csvZones = [
    { value: "関東", text: "関東" },
    { value: "関西", text: "関西" },
    { value: "九州", text: "九州" },
];

var  csvFiles = [
    { zone: "関東", value: "関東_ABC_20190101.csv", text: "関東_ABC_20190101.csv"},
    { zone: "関東", value: "関東_XYZ_20190202.csv", text: "関東_XYZ_20190202.csv" },
    { zone: "関西", value: "関西_ABC_20190202.csv", text: "関西_ABC_20190202.csv" },
    { zone: "関西", value: "関西_XYZ_20190202.csv", text: "関西_XYZ_20190202.csv" },
    { zone: "九州", value: "九州_ABC_20190202.csv", text: "九州_ABC_20190202.csv" },
    { zone: "九州", value: "九州_XYZ_20190303.csv", text: "九州_XYZ_20190303.csv" },
]

function init() {
    var selectZone = document.getElementById('zone');
    createOptionTop(selectZone);
    for (var i=0;i<csvZones.length;i++) {
        var option = document.createElement('option');
        option.setAttribute('value', csvZones[i].value);
        option.innerHTML = csvZones[i].text;
        selectZone.appendChild(option);
    }

    createOptionTop(document.getElementById('file'));
}

function createOptionTop (slectObj) {
    while (slectObj.lastChild) {
        slectObj.removeChild(slectObj.lastChild);
    }

    var option = document.createElement('option');
    option.setAttribute('value', '');
    option.innerHTML = '選択してください';
    option.selected = true;
//    option.disabled = true;

    slectObj.appendChild(option);
}
/**
 * selectタグにoptionタグを追加
 * @param {selectObj} selectObj
 * @param {string} optionValue
 * @param {string} optionText
 */
function createOption(selectObj, optionValue, optionText) {
    var option = document.createElement('option');
    option.setAttribute('value', optionValue);
    option.innerHTML = optionText;
    selectObj.appendChild(option);
}

function setFiles(selectZone) {
    var zone = selectZone.value;

    if (zone == '') {
        init();
    }
    else {
        var selectFile = document.getElementById('file');
        while (selectFile.lastChild) {
            selectFile.removeChild(selectFile.lastChild);
        }
        for (var i = 0; i < csvFiles.length; i++) {
            if (zone == csvFiles[i].zone) {
                createOption(selectFile, csvFiles[i].value, csvFiles[i].text);
            }
        }
    }
}
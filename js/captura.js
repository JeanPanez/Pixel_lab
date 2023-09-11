var node = document.getElementById('htmlcapture');
var imgUrl = null;

function enableButton(button) {
    button.disabled = false;
}

function htmlToImg() {

    domtoimage.toPng(node)
        .then(function (dataUrl) {
            node.style.marginTop = '';
            document.getElementById("showImg").src = dataUrl;
            imgUrl = dataUrl;
            enableButton(downloadButton);
        })
        .catch(function (error) {
            console.error('Oops, something went wrong!', error);
        });
}

var captureButton = document.getElementById('captureButton');
var downloadButton = document.getElementById('downloadButton');

captureButton.addEventListener('click', htmlToImg);

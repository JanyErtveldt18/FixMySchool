//https://stackoverflow.com/questions/31850732/save-a-file-image-to-localstorage-html



// Get all variables
var fotoNemen = document.getElementById('fotoNemen');
var result = document.getElementById('res');
var img = document.getElementById('foto');

// Add a change listener to the file input to inspect the uploaded file.
fotoNemen.addEventListener('click', function() {
    var file = this.files[0];
    // Basic type checking.
    if (file.type.indexOf('jpg') < 0) {
        res.innerHTML = 'invalid type';
        return;
    }

    // Create a file reader
    var fReader = new FileReader();

    // Add complete behavior
    fReader.onload = function() {
        // Show the uploaded image to banner.
        img.src = fReader.result;

        // Save it when data complete.
        // Use your function will ensure the format is png.
        localStorage.setItem("imgData", getBase64Image(img));
        // You can just use as its already a string.
        //localStorage.setItem("imgData", fReader.result);
    };

    // Read the file to DataURL format.
    fReader.readAsDataURL(file);
});

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function fetchimage () {
    var dataImage = localStorage.getItem('imgData');
    img.src = "data:image/png;base64," + dataImage;
    // If you don't process the url with getBase64Image, you can just use
    // img.src = dataImage;
}

// Call fetch to get image from localStorage.
// So each time you reload the page, the image in localstorage will be 
// put on tableBanner
fetchimage();

console.log(fetchimage);
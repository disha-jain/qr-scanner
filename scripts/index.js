var height = 300;
var width = 200;

function drawOnCanvas(file) {
    var reader = new FileReader();
    var idata;
    reader.onload = function (e) {
      var dataURL = e.target.result,
          c = document.querySelector('canvas'), // see Example 4
          ctx = c.getContext('2d'),
          img = new Image();
  
      img.onload = function() {
        c.width = img.width;
        c.height = img.height;
        ctx.drawImage(img, 0, 0,width,height);
        idata = ctx.getImageData(0, 0, width, height);
        const code = jsQR(idata.data, width, height);   
        console.log(code.data);
    };
  
      img.src = dataURL;
    };
  
    reader.readAsDataURL(file);
  }

function parseQRCode(fileList) {
    let file = null;

    for (let i = 0; i < fileList.length; i++) {
      if (fileList[i].type.match(/^image\//)) {
        file = fileList[i];
        break;
      }
    }

    if (file !== null) {
        console.log("Image not null");
        idata = drawOnCanvas(file);
        console.log(idata);
    }
  }

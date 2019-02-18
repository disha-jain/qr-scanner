const jsQR = require("jsqr");

function parseQRCode(fileList) {
    let file = null;

    for (let i = 0; i < fileList.length; i++) {
      if (fileList[i].type.match(/^image\//)) {
        file = fileList[i];
        break;
      }
    }

    if (file !== null) {
        var file = e.target.files[0],                  // reference first file BLOB
            url = URL.createObjectURL(file),           // create an Object URL
            img = new Image();                         // create a temp. image object
      
        img.onload = function() {                    // handle async image loading
            URL.revokeObjectURL(this.src);             // free memory held by Object URL
            c.getContext("2d").drawImage(this, 0, 0);  // draw image onto canvas (lazy method™)
        };
  
        img.src = url;
        var idata = context.getImageData(0, 0, 600, 400);
        const code = jsQR(idata, 600, 400);        
    }
  }

const input = document.getElementById('input');

input.addEventListener('change', (e) => parseQRCode(e.target.files));
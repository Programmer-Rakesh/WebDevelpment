function yeah() {
        let Okay = document.getElementById("a").value;
        let f = document.getElementById("f");
        let pp = document.getElementById("umm")

        let img = document.createElement("img");
        img.width = 300;
        

            if ( Okay<12){
                f.value ="yeh";
                img.src = "./images/B1 lancer.jpg"
            }
            else{
                f.value = "go daddy";
                img.src ="./images/B2 spirit.jpg"
            }  

            // img.onload = function () { 
            //     console.log('Image loaded successfully'); 
            // } 
            // img.onerror = function () { 
            //     console.error('Error loading image'); 
            //     pp.innerHTML = "Image failed to load. Please check the URL."; 
            //     return; }

            pp.innerHTML = "";
            pp.appendChild(img);
        }
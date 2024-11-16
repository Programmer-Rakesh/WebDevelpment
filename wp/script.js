function search() {
        let okay = document.getElementById("a").value;
        let f = document.getElementById("f");
        let pp = document.getElementById("um")
        let ww = document.getElementById("op")
        let vg = document.getElementById("ou")
        let vp = document.getElementById("ot")
        let vs = document.getElementById("os")

        let img = document.createElement("img");
        img.width = 250;
        

            if ( okay==12  ||  okay==11){
                f.value = "Rakesh Roy";
                img.src = "./images/B1 lancer.jpg"
                ww.value = "Roll no. : 24SECE130051"
                vg.value = "Date of Joining : 19/08/2024"
                vp.value = "Course : BTech ECE"
                vs.value = "Specialisation : AI & ML"
            }
            else{
                f.value = "B2";
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
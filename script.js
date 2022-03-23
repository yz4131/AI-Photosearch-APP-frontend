const image_input = document.querySelector("#image_input");
const label_input = document.querySelector("#fname");
const btn = document.querySelector("#btn");
var uploaded_image = "";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0])
})

btn.addEventListener("click", function(){
    fetch('http://www.example.net',{
        method:'PUT',
        headers:{
            'Content-Type': 'image/png, image/jpg',
            'x-amz-meta-customLabels': label_input,
            'x-api-key': 'FsGSZy92TQ2ciUyTD7cbD39eDIzpngEz5yn99XvU'
        },
        body: image_input
    })
})



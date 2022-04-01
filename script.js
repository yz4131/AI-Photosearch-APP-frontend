const image_input = document.querySelector("#image_input");
const label_input = document.querySelector("#fname");
var labels = document.getElementById("fname").value;  



image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0]);
    var labels = document.getElementById("fname").value;  
    console.log(labels);
    var x = this.files[0]['name']
    fetch(' https://dl2y7ow6n3.execute-api.us-east-1.amazonaws.com/S1/upload/b2photostorage/'+x,{
        method:'PUT',
        headers:{
            'Content-Type': this.files[0].type,
            "x-amz-meta-customLabels": labels,

        },
        body: this.files[0]
    }) 
    
})





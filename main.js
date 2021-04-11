
Webcam.set(

    {
        width : 300,
        height : 300,
        image_format : 'png',
        png_quality : 90,
        constraints : {facingMode : "environment"}
    }
);

Webcam.attach("camera");

function snapshot()
{
    Webcam.snap(function(sire)
    {
        
        document.getElementById("result").innerHTML='<img id="captured" src="'+sire+'">';

        
    });

}

console.log("ML5 VERSION = ",ml5.version);

Model = ml5.imageClassifier("MobileNet", right);

function right()
{
    console.log("Model Loaded.");
}

function check()
{
    Imager = document.getElementById("captured");
    Model.classify(Imager, results);
}

function results(error,result)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
       console.log(result); 
        document.getElementById("object").innerHTML = result[0].label;
    }
}




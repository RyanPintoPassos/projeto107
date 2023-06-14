//https://teachablemachine.withgoogle.com/models/YuAcVWMAp/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YuAcVWMAp/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotresults);
}
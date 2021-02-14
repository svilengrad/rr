const STEP = 100;

let dog = new blockLike.Sprite({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'http://assets.stickpng.com/thumbs/585bb5b2cb11b227491c32a2.png'
});

dog.addTo(stage);

dog.whenFlag(function() {
    this.changeX(-300);
    this.say("Run cat!");
});

dog.whenKeyPressed('w', function(){
    if(this.y < stage.height/2-STEP){
        this.changeY(STEP);
    }
});

dog.whenKeyPressed('s', function(){
    if(this.y > (stage.height/2 * -1) + STEP){
        this.changeY(-STEP);
    }
});

dog.whenKeyPressed('d', function(){
    if(this.x < stage.width/2-STEP){
        this.changeX(STEP);
    }
});

dog.whenKeyPressed('a', function(){
    if(this.x > (stage.width/2 * -1) + STEP){
        this.changeX(-STEP);
    }
});


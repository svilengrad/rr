let sprite = new blockLike.Sprite();
let costume = new blockLike.Costume({
    width: 20,
    height: 20,
    color: '#A2DAFF',
    image: 'https://www.blocklike.org/images/sheep_step.png'
});

// sprite.addTo(stage);

let answer;
sprite.whenFlag(function () {
    answer = this.ask('What is your name?');
    this.say('Hello, ' + answer);
});
sprite.whenClicked(function () {
    costume.addTo(sprite);
});

sprite.whenKeyPressed(39, function () {
    this.changeX(100);
});

sprite.whenKeyPressed(37, function () {
    this.changeX(-100);
});

sprite.whenKeyPressed(38, function () {
    this.changeY(100);
});

sprite.whenKeyPressed(40, function () {
    this.changeY(-100);
});
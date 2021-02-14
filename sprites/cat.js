let cat = new blockLike.Sprite({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'http://clipart-library.com/images_k/cats-silhouette-vector/cats-silhouette-vector-2.png'
});
let stretchCostume = new blockLike.Costume({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'https://www.vhv.rs/dpng/d/440-4405944_cat-vector-png-cat-stretching-silhouette-transparent-png.png'
})

cat.addTo(stage);
cat.setRotationStyle('left-right');
cat.pointInDirection(-90);

cat.whenFlag(function () {
    this.changeX(300);
    this.say("Catch me if you can!");
})
cat.whenClicked(function() {
    this.say("Ouch, you stepped on me!!!")
})

cat.whenKeyPressed(' ', function() {
    console.log('stretching')
    stretchCostume.addTo(cat);
    cat.nextCostume();
})

cat.whenKeyPressed(39, function () {// right arrow
    this.pointInDirection(-90);
    this.changeX(100);
});

cat.whenKeyPressed(37, function () {// left arrow
    this.pointInDirection(90);
    this.changeX(-100);
});

cat.whenKeyPressed(38, function () {// up arrow
    this.changeY(100);
});

cat.whenKeyPressed(40, function () {// down arrow
    this.changeY(-100);
});
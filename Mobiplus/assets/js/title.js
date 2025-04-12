var animeOpacity01 = {
    value: [0, 1],
    duration: 2000,
    easing: 'easeInOutSine',
    direction: 'alternate',
}

var animeOpacity10 = {
    value: [1, 0],
    duration: 2000,
    easing: 'easeInOutSine',
    direction: 'alternate',
}

var animeRotate2 = {
    value: [180, -180],
    duration: 5000,
    easing: 'easeInOutSine',
    direction: 'alternate',
}

anime({
    targets: ".title_container .icon:not(.title_tree_container)",
    rotate: {
        value: [360, -360],
        duration: 6000,
        easing: 'easeInOutSine',
        direction: 'alternate',
    },
    direction: 'alternate',
    loop: true
});



anime({
    targets: ".title_container .icon.title_tree_container .title_star:not(.title_star_2)",
    rotate: animeRotate2,
    direction: 'alternate',
    loop: true
});

var animeStar1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 4000,
    direction: 'alternate',
    loop: true
});
animeStar1
    .add({
        targets: '.title_container .icon.title_tree_container .title_star:not(.title_star_2)',
        opacity: animeOpacity01,
    })
    .add({
        targets: '.title_container .icon.title_tree_container .title_star:not(.title_star_2)',
        opacity: animeOpacity10,
    });

anime({
    targets: ".title_container .icon.title_tree_container .title_star.title_star_2",
    rotate: animeRotate2,
    direction: 'alternate',
    loop: true
});

var animeStar2 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 4000,
    direction: 'alternate',
    loop: true
});
animeStar2
    .add({
        targets: '.title_container .icon.title_tree_container .title_star.title_star_2',
        opacity: animeOpacity10,
    })
    .add({
        targets: '.title_container .icon.title_tree_container .title_star.title_star_2',
        opacity: animeOpacity01,
    });
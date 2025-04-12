





$(document).ready(e => {
    var vn = { lat: 21.0227387, lng: 105.8194541 };
    if (document.getElementById("map")) {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: vn,
        });
        var marker = new google.maps.Marker({
            position: vn,
            map: map,
        });
    }



    var animeContactUs = function () {
        var contactUsAnime = {};
        showInRight('.contract_us .contact_us_img .cu_img_1', 1000, 500);

        showInRight('.contract_us .contact_us_img .cu_img_2', 1000, 1500);
        showInLeft('.contract_us .contact_us_img .cu_img_6', 1000, 1500);
        //chat box
        showInCustom('.contract_us .contact_us_img .cu_img_4', [2, 0], [1, 0], 1000, 2000);
        showInCustom('.contract_us .contact_us_img .cu_img_9', [2, 0], [1, 0], 1000, 2000);
        showInCustom('.contract_us .contact_us_img .cu_img_5', [-0.5, 0], [-1, 0], 1000, 3000);
        showInCustom('.contract_us .contact_us_img .cu_img_7', [-0.5, 0], [-1, 0], 1000, 3000);
        showInCustom('.contract_us .contact_us_img .cu_img_3', [-0.5, 0], [2, 0], 1000, 4000);
        showInCustom('.contract_us .contact_us_img .cu_img_8', [-0.5, 0], [2, 0], 1000, 4000);

        shake('cu_img_3', '.contract_us .contact_us_img .cu_img_3', 2000, [0, -15], [0, 0]);
        shake('cu_img_4', '.contract_us .contact_us_img .cu_img_4', 2500, [0, 15], [0, -15]);
        shake('cu_img_5', '.contract_us .contact_us_img .cu_img_5', 3000, [0, -15], [0, -15]);
        setTimeout(e => {
            contactUsAnime.cu_img_3.play();
            contactUsAnime.cu_img_4.play();
            contactUsAnime.cu_img_5.play();
        }, 5000);

        //show in
        function showInCustom(id, X, Y, duration, delay) {
            anime.timeline({
                targets: id,
                delay: delay,
                duration: duration
            })
                .add({
                    translateX: function (el, i, l) {
                        return [$(el).width() * X[0], $(el).width() * X[1]];
                    },
                    translateY: function (el, i, l) {
                        return [$(el).height() * Y[0], $(el).height() * Y[1]];
                    },
                    duration: duration,
                    easing: 'spring(1, 80, 10, 0)'
                })
                .add({
                    opacity: [0, 1],
                    duration: duration,
                    easing: 'spring(1, 80, 10, 0)'
                }, 0)
        }
        function showInLeft(id, duration, delay) {
            var time = anime.timeline({
                targets: id,
                delay: delay,
                duration: duration
            })
                .add({
                    translateX: [-50, 0],
                    duration: duration,
                    easing: 'spring(1, 80, 10, 0)'
                })
                .add({
                    opacity: [0, 1],
                    duration: duration,
                    easing: 'spring(1, 80, 10, 0)'
                }, 0)
        }
        function showInRight(id, duration, delay) {
            var time = anime.timeline({
                targets: id,
                delay: delay,
                duration: duration
            })
                .add({
                    translateX: [50, 0],
                    duration: duration,
                    easing: 'spring(1, 80, 10, 0)'
                })
                .add({
                    opacity: [0, 1],
                    duration: duration,
                    easing: 'spring(1, 80, 10, 0)'
                }, 0)
        }
        // shake
        function shake(key, id, duration, X, Y) {
            contactUsAnime[key] = anime({
                targets: id,
                duration: duration,
                loop: true,
                translateX: X,
                translateY: Y,
                direction: 'alternate',
                easing: 'easeInQuad',
                autoplay: false,
            });
            //contactUsAnime1.play;
            //setTimeout(e => {
            //}, delay);
        }

    }();
});








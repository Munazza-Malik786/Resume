document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const element = document.querySelector(".fade-left");
        const positionFromTop = element.getBoundingClientRect().top;

        // Adjust the value below to control when the fade-in effect occurs
        const triggerPosition = window.innerHeight - 50;

        if (positionFromTop < triggerPosition) {
            element.classList.add("fade-in");
        } else {
            element.classList.remove("fade-in");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const element = document.querySelector(".fade-right");
        const positionFromTop = element.getBoundingClientRect().top;

        // Adjust the value below to control when the fade-in effect occurs
        const triggerPosition = window.innerHeight - 50;

        if (positionFromTop < triggerPosition) {
            element.classList.add("fade-in");
        } else {
            element.classList.remove("fade-in");
        }
    });
});

$(document).on("scroll", function() {
    // alert('okay');
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".fade-up ");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});

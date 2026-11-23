document.addEventListener("DOMContentLoaded", function () {
    var titlu = document.querySelector("#sectiune-galerie h2");
    var poze = document.querySelectorAll("#sectiune-galerie .poza-galerie");

    if (!titlu || poze.length === 0) return;

    var slideIndex = 0;
    var pornit = false;

    titlu.addEventListener("dblclick", function () {
        if (pornit) return;
        pornit = true;

        function showSlides() {
            for (var i = 0; i < poze.length; i++) {
                poze[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex > poze.length) {
                slideIndex = 1;
            }

            poze[slideIndex - 1].style.display = "inline-block";
            setTimeout(showSlides, 3000);
        }

        showSlides();
    });
});
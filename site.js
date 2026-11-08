// Click-to-play: the YouTube player (privacy-enhanced domain) loads only after the click.
document.querySelectorAll(".player").forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + a.dataset.id + "?autoplay=1&rel=0";
    f.title = "Vídeo da Sardinha Esperta";
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    a.replaceWith(Object.assign(document.createElement("div"), { className: "player" }));
    document.querySelector("div.player").appendChild(f);
  });
});
document.querySelectorAll(".print").forEach(function (b) {
  b.addEventListener("click", function () { window.print(); });
});

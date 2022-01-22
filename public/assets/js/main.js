!function e(t, n, o){function i(a, l){if (!n[a]){if (!t[a]){var u = "function" == typeof require && require; if (!l && u)return u(a, !0); if (r)return r(a, !0); var d = new Error("Cannot find module '" + a + "'"); throw d.code = "MODULE_NOT_FOUND", d}var s = n[a] = {exports:{}}; t[a][0].call(s.exports, function(e){var n = t[a][1][e]; return i(n || e)}, s, s.exports, e, t, n, o)}return n[a].exports}for (var r = "function" == typeof require && require, a = 0; a < o.length; a++)i(o[a]); return i}({1:[function(e, t, n){try{var o = new window.CustomEvent("test"); if (o.preventDefault(), !0 !== o.defaultPrevented)throw new Error("Could not prevent default")} catch (e){var i = function(e, t){var n, o; return t = t || {bubbles:!1, cancelable:!1, detail:void 0}, n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o = n.preventDefault, n.preventDefault = function(){o.call(this); try{Object.defineProperty(this, "defaultPrevented", {get:function(){return!0}})} catch (e){this.defaultPrevented = !0}}, n}; i.prototype = window.Event.prototype, window.CustomEvent = i}}, {}], 2:[function(e, t, n){"use strict"; function o(e, t){if (void 0 === e || null === e)throw new TypeError("Cannot convert first argument to object"); for (var n = Object(e), o = 1; o < arguments.length; o++){var i = arguments[o]; if (void 0 !== i && null !== i)for (var r = Object.keys(Object(i)), a = 0, l = r.length; a < l; a++){var u = r[a], d = Object.getOwnPropertyDescriptor(i, u); void 0 !== d && d.enumerable && (n[u] = i[u])}}return n}function i(){Object.assign || Object.defineProperty(Object, "assign", {enumerable:!1, configurable:!0, writable:!0, value:o})}t.exports = {assign:o, polyfill:i}}, {}], 3:[function(e, t, n){"use strict"; var o = e("../index"), i = function(e){e.fn.modalVideo = function(e){return"strings" == typeof e || new o(this, e), this}}; if ("function" == typeof define && define.amd)define(["jquery"], i); else{var r = window.jQuery?window.jQuery:window.$; void 0 !== r && i(r)}t.exports = i}, {"../index":5}], 4:[function(e, t, n){"use strict"; function o(e, t){if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n, "__esModule", {value:!0}); var i = function(){function e(e, t){for (var n = 0; n < t.length; n++){var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(e, o.key, o)}}return function(t, n, o){return n && e(t.prototype, n), o && e(t, o), t}}(); e("custom-event-polyfill"); var r = e("../lib/util"), a = e("es6-object-assign").assign, l = {channel:"youtube", facebook:{}, youtube:{autoplay:1, cc_load_policy:1, color:null, controls:1, disablekb:0, enablejsapi:0, end:null, fs:1, h1:null, iv_load_policy:1, list:null, listType:null, loop:0, modestbranding:null, origin:null, playlist:null, playsinline:null, rel:0, showinfo:1, start:0, wmode:"transparent", theme:"dark", nocookie:!1}, ratio:"16:9", vimeo:{api:!1, autopause:!0, autoplay:!0, byline:!0, callback:null, color:null, height:null, loop:!1, maxheight:null, maxwidth:null, player_id:null, portrait:!0, title:!0, width:null, xhtml:!1}, allowFullScreen:!0, animationSpeed:300, classNames:{modalVideo:"modal-video", modalVideoClose:"modal-video-close", modalVideoBody:"modal-video-body", modalVideoInner:"modal-video-inner", modalVideoIframeWrap:"modal-video-movie-wrap", modalVideoCloseBtn:"modal-video-close-btn"}, aria:{openMessage:"You just openned the modal video", dismissBtnMessage:"Close the modal by clicking here"}}, u = function(){function e(t, n){var i = this; o(this, e); var u = a({}, l, n), d = "string" == typeof t?document.querySelectorAll(t):t, s = document.querySelector("body"), c = u.classNames, f = u.animationSpeed; [].forEach.call(d, function(e){e.addEventListener("click", function(t){"A" === e.tagName && t.preventDefault(); var n = e.dataset.videoId, o = e.dataset.channel || u.channel, a = (0, r.getUniqId)(), l = e.dataset.videoUrl || i.getVideoUrl(u, o, n), d = i.getHtml(u, l, a); (0, r.append)(s, d); var v = document.getElementById(a), m = v.querySelector(".js-modal-video-dismiss-btn"); v.focus(), v.addEventListener("click", function(){(0, r.addClass)(v, c.modalVideoClose), setTimeout(function(){(0, r.remove)(v), e.focus()}, f)}), v.addEventListener("keydown", function(e){9 === e.which && (e.preventDefault(), document.activeElement === v?m.focus():(v.setAttribute("aria-label", ""), v.focus()))}), m.addEventListener("click", function(){(0, r.triggerEvent)(v, "click")})})})}return i(e, [{key:"getPadding", value:function(e){var t = e.split(":"), n = Number(t[0]); return 100 * Number(t[1]) / n + "%"}}, {key:"getQueryString", value:function(e){var t = ""; return Object.keys(e).forEach(function(n){t += n + "=" + e[n] + "&"}), t.substr(0, t.length - 1)}}, {key:"getVideoUrl", value:function(e, t, n){return"youtube" === t?this.getYoutubeUrl(e.youtube, n):"vimeo" === t?this.getVimeoUrl(e.vimeo, n):"facebook" === t?this.getFacebookUrl(e.facebook, n):""}}, {key:"getVimeoUrl", value:function(e, t){return"//player.vimeo.com/video/" + t + "?" + this.getQueryString(e)}}, {key:"getYoutubeUrl", value:function(e, t){var n = this.getQueryString(e); return!0 === e.nocookie?"//www.youtube-nocookie.com/embed/" + t + "?" + n:"//www.youtube.com/embed/" + t + "?" + n}}, {key:"getFacebookUrl", value:function(e, t){return"//www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/" + t + "&" + this.getQueryString(e)}}, {key:"getHtml", value:function(e, t, n){var o = this.getPadding(e.ratio), i = e.classNames; return'\n      <div class="' + i.modalVideo + '" tabindex="-1" role="dialog" aria-label="' + e.aria.openMessage + '" id="' + n + '">\n        <div class="' + i.modalVideoBody + '">\n          <div class="' + i.modalVideoInner + '">\n            <div class="' + i.modalVideoIframeWrap + '" style="padding-bottom:' + o + '">\n              <button class="' + i.modalVideoCloseBtn + ' js-modal-video-dismiss-btn" aria-label="' + e.aria.dismissBtnMessage + "\"></button>\n              <iframe width='460' height='230' src=\"" + t + "\" frameborder='0' allowfullscreen=" + e.allowFullScreen + ' tabindex="-1"/>\n            </div>\n          </div>\n        </div>\n      </div>\n    '}}]), e}(); n.default = u, t.exports = n.default}, {"../lib/util":6, "custom-event-polyfill":1, "es6-object-assign":2}], 5:[function(e, t, n){"use strict"; t.exports = e("./core/")}, {"./core/":4}], 6:[function(e, t, n){"use strict"; Object.defineProperty(n, "__esModule", {value:!0}); n.append = function(e, t){var n = document.createElement("div"); for (n.innerHTML = t; n.children.length > 0; )e.appendChild(n.children[0])}, n.getUniqId = function(){return(Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()}, n.remove = function(e){e && e.parentNode && e.parentNode.removeChild(e)}, n.addClass = function(e, t){e.classList?e.classList.add(t):e.className += " " + t}, n.triggerEvent = function(e, t, n){var o = void 0; window.CustomEvent?o = new CustomEvent(t, {cancelable:!0}):(o = document.createEvent("CustomEvent"), o.initCustomEvent(t, !1, !1, n)), e.dispatchEvent(o)}}, {}]}, {}, [3]);
        const $dropdown = $(".dropdown");
        const $dropdownToggle = $(".dropdown-toggle");
        const $dropdownMenu = $(".dropdown-menu");
        const showClass = "show";
        $(window).on("load resize", function () {
if (this.matchMedia("(min-width: 768px)").matches) {
$dropdown.hover(
        function () {
        const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
        const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
        }
);
} else {
$dropdown.off("mouseenter mouseleave");
}
});
        (function ($) {
        "use strict";
                jQuery(document).on('ready', function () {
        // Header Sticky
        $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
        $('.navbar-light').addClass("is-sticky");
        } else {
        $('.navbar-light').removeClass("is-sticky");
        }
        });
        });
        }(jQuery));
        jQuery(document).ready(function ($) {
$('.custom2').owlCarousel({
loop: true,
        items: 4,
        margin: 20,
        dots: true,
        nav: true,
        autoplay: true,
        stagePadding: 20,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        autoplayHoverPause: true,
        responsiveClass: true,
        center: false,
        navText : ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
        0: {items: 1}, 576: {items: 2}, 768: {items: 2}, 992: {items: 4},
        }
});
        });
        jQuery(document).ready(function ($) {
$('.custom1').owlCarousel({
loop: true,
        items: 1,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        animateOut: 'fadeOut'
});
        });
        jQuery(document).ready(function ($) {
$('.caseSlider').owlCarousel({
loop: true,
        items: 3,
        margin: 20,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        autoplayHoverPause: true,
        responsiveClass: true,
        center: false,
        navText : [" <img src='assets/img/a-left.svg'>", "<img src='assets/img/a-right.svg'>"],
        responsive: {
        0: {items: 1}, 576: {items: 2}, 768: {items: 2}, 992: {items: 3},
        }
});
        });
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        })


        $(function () {
        $("#slider-range").slider({
        range: true,
                min: 0,
                max: 15000,
                values: [2000, 8000],
                slide: function (event, ui) {
                $("#amount").val("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
                }
        });
                $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                " - $" + $("#slider-range").slider("values", 1));
        });
        function myFunction() {
        var input, filter, ul, li, a, i, txtValue;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                ul = document.getElementById("myUL");
                li = ul.getElementsByTagName("li");
                for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > - 1) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
        }
        }

function myColorFunction() {
var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myColorInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myColors");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > - 1) {
li[i].style.display = "";
} else {
li[i].style.display = "none";
}
}
}

function myTagsFunction() {
var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myTagsInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myTags");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > - 1) {
li[i].style.display = "";
} else {
li[i].style.display = "none";
}
}
}

$('.wish').click(function() {
$(this).toggleClass('active-wish');
        });
        $('.cart').click(function() {
$(this).toggleClass('active-cart');
        });
        /* thumbnail slider */
        $(document).ready(function () {
var bigimage = $("#big");
        var thumbs = $("#thumbs");
        //var totalslides = 10;
        var syncedSecondary = true;
        bigimage
        .owlCarousel({
        items: 1,
                slideSpeed: 2000,
                nav: false,
                autoplay: false,
                dots: false,
                loop: true,
                responsiveRefreshRate: 200,
        })
        .on("changed.owl.carousel", syncPosition);
        thumbs
        .on("initialized.owl.carousel", function () {
        thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
        items: 4,
                dots: false,
                nav: false,
                stagePadding: 20,
                margin: 20,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: 4,
                responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);
        function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
                var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
                if (current < 0) {
        current = count;
        }
        if (current > count) {
        current = 0;
        }
        //to this
        thumbs
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
                var onscreen = thumbs.find(".owl-item.active").length - 1;
                var start = thumbs
                .find(".owl-item.active")
                .first()
                .index();
                var end = thumbs
                .find(".owl-item.active")
                .last()
                .index();
                if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
        }

function syncPosition2(el) {
if (syncedSecondary) {
var number = el.item.index;
        bigimage.data("owl.carousel").to(number, 100, true);
}
}

thumbs.on("click", ".owl-item", function (e) {
e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
});
});

/* quantity increment */
function incrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (!isNaN(currentVal)) {
            parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }

    function decrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (!isNaN(currentVal) && currentVal > 0) {
            parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }

    $('.m-quantity').on('click', '.button-plus', function(e) {
        incrementValue(e);
    });

    $('.m-quantity').on('click', '.button-minus', function(e) {
        decrementValue(e);
    });
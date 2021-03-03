$(function () {
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    $(window).scroll(function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    var list = [
        {
            Name: "帳號管理、權限管理",
            Desc: "",
        },
        {
            Name: "通知系統",
            Desc: "",
        },
        {
            Name: "生產排程管理",
            Desc: "",
        },
        {
            Name: "維修系統",
            Desc: "",
        },
        {
            Name: "ESOP(無紙化作業)",
            Desc: "",
        },
        {
            Name: "生產履歷(QR、BARCODE)",
            Desc: "",
        },
        {
            Name: "上料系統",
            Desc: "",
        },
        {
            Name: "生產現場管控系統(SFIS)",
            Desc: "",
        },
        {
            Name: "預估輔助",
            Desc: "",
        },
    ];

    var target = document.getElementById("list")
    for (let i of list) {
        var p = document.createElement("p");
        p.className = "text-black-50 mb-0";
        p.innerText = i.Name;
        p.onclick = function () {
            document.getElementById("intro_title").innerText = i.Name;
            // document.getElementById("intro_desc").innerText = i.Desc;
        }
        target.appendChild(p);
    }
});

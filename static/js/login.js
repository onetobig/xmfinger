    $(function () {
        $("#GL_StandardCode").click(function () {
            var newSrc = "/home/GetImg" + "?t=" + (new Date()).getTime();
            $("#Codeimg").attr("src",newSrc);
            return false;
        });
    });
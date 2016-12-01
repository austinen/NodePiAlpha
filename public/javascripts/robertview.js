function HelloWorld() {
    var id = parseInt($("#RobertText").val());
    function GetGpio(id) {
        $.ajax({
            type: "GET",
            url: "/hello_world/" + id,
            cache: false,
            dataType: "json",
            success: function (results) {
                var html = '<h2>' + results + '</h2>';
                $("#TestResults").empty();
                $("#TestResults").append(html);
            },
            error: function (results) {
                var html = '<h2>' + results + ' Error</h2>';
                $("#TestResults").empty();
                $("#TestResults").append(html);

            }
        });
    }

}
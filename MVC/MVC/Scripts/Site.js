$(function () {
    $("#btnGetAllClients").click(function () {
        $.ajax({
            url: '/api/Clients/GetClients',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                ShowClients(data)
            },
            error: function (x, y, z) {
                alert(x + '\n' + y + '\n' + z);
            }
        });
    })

    function ShowClients(clients) {
        var strResult = "<table><th>ID</th><th>Name</th>";
        $.each(clients, function (index, client) {
            strResult += "<tr><td>" + client.Id + "</td><td> " + client.Name + "</td></tr>";
        });
        strResult += "</table>";
        $("#divClients").html(strResult);
    }
});
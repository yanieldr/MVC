$(function () {
    $("#btnGetAllClients").click(function () {
        $.ajax({
            url: '/api/Clients',
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

    $("#btnGetClient").click(function () {
        var id = 1;
        $.ajax({
            url: '/api/Clients/'+id,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                ShowClient(data)
            },
            error: function (x, y, z) {
                alert(x + '\n' + y + '\n' + z);
            }
        });
    })

    function ShowClient(client) {
        $("#divClients").html("<span>" + client.Id + " " + client.Name + "</span>");
    }

    $("#btnAddClient").click(function () {
            var client = {
                ID: '3',
                Name: 'client3'
            };
            $.ajax({
                url: 'api/Clients',
                type: 'POST',
                data: JSON.stringify(client),
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    ShowClients(data);
                },
                error: function (x, y, z) {
                    alert(x + '\n' + y + '\n' + z);
                }
            });
    })

    $("#btnDeleteClient").click(function () {
        var id = 1;
        $.ajax({
            url: 'api/Clients/'+id,
            type: 'Delete',
            success: function (data) {
                ShowClients(data);
            },
            error: function (x, y, z) {
                alert(x + '\n' + y + '\n' + z);
            }
        });
    })

    $("#btnUpdateClient").click(function () {
        var client = { id:1, Name:'Client1Updated'};
        $.ajax({
            url: 'api/Clients',
            type: 'Put',
            data: JSON.stringify(client),
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                ShowClients(data);
            },
            error: function (x, y, z) {
                alert(x + '\n' + y + '\n' + z);
            }
        });
    })
});
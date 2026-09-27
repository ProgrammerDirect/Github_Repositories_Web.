

function onClick() {
    var username = $("#name").val().trim();
    $("#repositories").empty();

    if (username == "") {
        alert("Please enter a username");
        return;
    }

    $.get("https://api.github.com/users/" + username + "/repos",
        function (showrepositories)
        {
            if (showrepositories.length > 0)
            {
                for (var i = 0; i < showrepositories.length; i++)
                {
                    var repository = showrepositories[i];

                    var fila =
                        "<tr>" +
                            "<td>" + repository.name + "</td>" +
                            "<td>" + repository.description + "</td>" +
                            "<td> "+ repository.stargazers_count + "</td>" +
                        "</tr>";
                    $("#repositories").append(fila);
                }


            }

    });
}

function onReady() {
    $("#btn-search").click(onClick);
}

$(document).ready(onReady);




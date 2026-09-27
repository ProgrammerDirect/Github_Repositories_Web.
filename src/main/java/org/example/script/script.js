
function onError() {
    alert("User not found or GitHub API is not working properly.");
}


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
                    var textDescription = repository.description;

                    if (repository.description == null)
                    {
                        textDescription = "No description";
                    }

                    var fila =
                        "<tr>" +
                            "<td>" + repository.name + "</td>" +
                            "<td>" + textDescription + "</td>" +
                            "<td> "+ repository.stargazers_count + "</td>" +
                        "</tr>";
                    $("#repositories").append(fila);
                }

            }

    }).fail(onError);
}

function onReady() {
    $("#btn-search").click(onClick);
}

$(document).ready(onReady);




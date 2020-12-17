$(document).ready(function(){

    $("#blogBut").click(function(){
        var newTitle = $("#title").val();
        var newPost = $("#post").val();

        var newTable = $('<table>').addClass('blogTable').css("width", "100%");;
        var header = $('<th/>').addClass('showcaseTitle').text(newTitle);
        newTable.append(header);
        var row = $('<tr/>').addClass('showcasePost').text(newPost);
        newTable.append(row);

        $('#blogPosts').append(newTable);
        // $("#newTitle").$("p").addClass(".showcaseTitle").val(newTitle);

        $("#title").val("");
        $("#post").val("");
    });

    $("[id^='colH']").click(function(){
        var color = $(this).css("background-color");
        $("#navbar").css("background", color);
        
    });

    $("[id^='colR']").click(function(){
        var color = $(this).css("background-color");
        $("#my-footer").css("background", color);
    });

    $("[id^='colT']").click(function(){
        var color = $(this).css("background-color");
        $("body").css("background", color);
        
    });

    $("#contact-icon").click(function () {
        $("#contact-popup").show();
    });

    $("#contact-form").on("submit", function () {
        var valid = true;
        $(".info").html("");
        $("inputBox").removeClass("input-error");
        
        var userName = $("#userName").val();
        var userEmail = $("#userEmail").val();
        var subject = $("#subject").val();
        var message = $("#message").val();

        if (userName == "") {
            $("#userName-info").html("Required.");
            $("#userName").addClass("input-error");
        }
        if (userEmail == "") {
            $("#userEmail-info").html("Required.");
            $("#userEmail").addClass("input-error");
            valid = false;
        }
        if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
        {
            $("#userEmail-info").html("Invalid input.");
            $("#userEmail").addClass("input-error");
            valid = false;
        }

        if (subject == "") {
            $("#subject-info").html("Required.");
            $("#subject").addClass("input-error");
            valid = false;
        }

        return valid;

    });
});
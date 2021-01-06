$(function () {
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $("#createburger").val().trim(),
      devoured: 0,
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      // Reloads the page to get the updated list
      location.reload();
    });
  });

  $(".eat").on("click", function () {
    let id = $(this).data("id");
    let newDevoured = $(this).data("newDevoured");

    let newDevouredBurger = {
      devoured: newDevoured,
    };

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: newDevouredBurger,
    }).then(() => {
      location.reload();
    });
  });

  $(".trash").on("click", function () {
    let id = $(this).data("id");
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE",
    }).then(() => {
      location.reload();
    });
  });

  // $(".trashBurger").on(
  //   let id = $(this).data("id");
  // )
});

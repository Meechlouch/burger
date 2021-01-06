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
      console.log("New Burger created!");
      // Reloads the page to get the updated list
      location.reload();
    });
  });

  $(".eat").on("click", function (event) {
    let id = $(this).data("id");
    let newDevoured = $(this).data("newDevoured") === 1;

    let newDevouredBurger = {
      devoured: newDevoured,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredBurger,
    }).then(() => {
      console.log(`You ate dat burger! ${newDevouredBurger}`);
      location.reload();
    });
  });

  // $(".trashBurger").on(
  //   let id = $(this).data("id");
  // )
});

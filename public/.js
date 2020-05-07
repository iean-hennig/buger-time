$(function() {
    $(".eat-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
  
      var newEatState = {
        burgers: newEat
      };
  
      
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("Eaten", newEat);
          
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
     
      event.preventDefault();

      var newBurger = {
        name: $("#ca").val().trim(),
        burger_name: $("#ca").val().trim(),
      };

      
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
         
          location.reload();
        }
      );
    });
  
  });
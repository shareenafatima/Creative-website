document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var messageBox = document.getElementById("messageBox");
    var closeButton = document.getElementById("closeButton");
    var commentForm = document.getElementById("commentForm");
    var commentList = document.getElementById("commentList");
  
    toggleButton.addEventListener("click", function() {
      messageBox.classList.toggle("hidden");
    });
  
    closeButton.addEventListener("click", function() {
      messageBox.classList.add("hidden");
    });
  
    commentForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get the values from the form
      var name = document.getElementById("name").value;
      var comment = document.getElementById("comment").value;
  
      // Create a new list item with the comment
      var listItem = document.createElement("li");
      listItem.innerHTML = "<strong>" + name + ":</strong> " + comment;
  
      // Add the new comment to the list
      commentList.appendChild(listItem);
  
      // Reset the form
      commentForm.reset();
    });
  });
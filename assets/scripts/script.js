document.addEventListener("DOMContentLoaded", (event) => {
  let recommendationForm = document.getElementById("recommendation-form");
  let backToTop = document.querySelector(".back-to-top");

  /* Add new recommendation */
  function addReview(event) {
    event.preventDefault();
    let message = document.getElementById("message").value;
    let errorField = document.querySelector(".error");
    let modal = document.querySelector(".modal");

    errorField.style.display = "none";

    if (!message.trim().length) {
      errorField.style.display = "flex";
      errorField.textContent = "Please enter recommendation";
      return false;
    }

    modal.style.display = "flex";
  }

  // Add recommendation
  recommendationForm.addEventListener("submit", addReview);

  document.getElementById("okay").addEventListener("click", () => {
    let reviewsList = document.querySelectorAll(".reviews-wrapper")[0];
    let message = document.getElementById("message").value;

    const node = document.createElement("div");
    const blockquoteNode = document.createElement("blockquote");
    const messageNode = document.createTextNode(message);
    node.classList.add("review");
    blockquoteNode.appendChild(messageNode);
    node.appendChild(blockquoteNode);
    reviewsList.appendChild(node);

    document.getElementById("message").value = "";
    document.querySelector(".modal").style.display = "none";
  });

  document.getElementById("cancel").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
    return false;
  });

  //Back to Home
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, null, " ");
  });

  //On scroll show/hide back to home button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      document.querySelector(".back-to-top").style.display = "block";
    } else {
      document.querySelector(".back-to-top").style.display = "none";
    }
  });
});

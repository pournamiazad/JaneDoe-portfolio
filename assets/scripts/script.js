/* Add new recommendation */
function addReview(event) {
  event.preventDefault();
  let message = document.getElementById("message").value;
  if (!message.trim().length) {
    alert("Please enter recommendation");
    return false;
  }
  let reviewsList = document.querySelectorAll(".reviews-wrapper")[0];

  const node = document.createElement("div");
  const blockquoteNode = document.createElement("blockquote");
  const messageNode = document.createTextNode(message);

  if (window.confirm("Do you want to submit the recommendation?")) {
    node.classList.add("review");
    blockquoteNode.appendChild(messageNode);
    node.appendChild(blockquoteNode);
    reviewsList.appendChild(node);

    document.getElementById("message").value = "";
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  let recommendationForm = document.getElementById("recommendation-form");
  let backToTop = document.querySelector(".back-to-top");

  // Add recommendation
  recommendationForm.addEventListener("submit", addReview);

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

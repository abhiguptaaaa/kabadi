// Get the URL of the landing page from the input box.
var url = document.getElementById("url").value;

// Check the landing page for policy violations.
var response = fetch("https://ads.google.com/api/adwords/v201809/landingPages/policyViolations?q={}".format(url));

// If the request was successful, parse the response and get the landing page's policy violations.
if (response.status === 200) {
  var policy_violations = await response.json();

  // If the landing page has any policy violations, display them.
  if (policy_violations.length > 0) {
    document.getElementById("results").innerHTML = policy_violations.join("<br>");
  } else {
    document.getElementById("results").innerHTML = "No policy violations found.";
  }
} else {
  // Display an error message.
  document.getElementById("results").innerHTML = "Error checking landing page for policy violations: " + response.status;
}

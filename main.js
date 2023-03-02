const URL = "https://rtfywmrchoke7i2dvsfclng2jm0ehnoc.lambda-url.us-west-2.on.aws/Tweets/";

const getQuote = function() {
  const apiUrl = $("#text-radio").prop("checked") ? URL + "text/" : URL;
  if (!$("#json-radio").prop("checked") && !$("#text-radio").prop("checked")) {
    return;
  }
  $.get(url = apiUrl, success = function(data) {
    if ($("#json-radio").prop("checked")) {
      $("#response").html(
        `{<br/>
        &emsp;"message": <span id="message">${data.message}</span><br/>
        &emsp;"author": <span id="author">${data.author}</span><br/>
        }`
      );
    }
    else if ($("#text-radio").prop("checked")) {
      $("#response").html(data);
    }
    $("#message").text(data.message);
    $("#author").text(data.author);
    return true;
  });
}

$(document).ready(function() {
  $("#json-radio").prop("checked",true);
  $("#url").text(URL);
  getQuote();

  $("#get-button").click(function() {
    getQuote();
  });

  $("input[type=radio][name=format]").change(function() {
    if (this.value === "json") {
      $("#url").text(URL);
    }
    else if (this.value === "text") {
      $("#url").text(URL + "text/");
    }
  });
});
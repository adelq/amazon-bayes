function numberRatings() {
  var reviewsRegex = /\d+/;
  var numberReviewsNode = document.getElementById("acrCustomerReviewText");
  var numberReviewsString = numberReviewsNode.textContent.match(reviewsRegex);
  return parseInt(numberReviewsString[0]);
}

function starRatingPercents() {
  var ratingNodes = jQuery('tr.a-histogram-row span.a-size-small:not(:has(*))');
  var ratings = [];
  ratingNodes.each(function(index, element) {
    var ratingText = element.textContent;
    var ratingPercent = ratingText.substring(0, ratingText.length - 1);
    ratings.push(parseInt(ratingPercent) * 0.01);
  });
  return ratings;
}

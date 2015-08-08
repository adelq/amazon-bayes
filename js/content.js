/**
 * Extract the number of ratings
 * @method numberRatings
 * @return {number} number of ratings
 */
function numberRatings() {
  var reviewsRegex = /\d+/;
  var numberReviewsNode = document.getElementById("acrCustomerReviewText");
  var numberReviewsString = numberReviewsNode.textContent.match(reviewsRegex);
  return parseInt(numberReviewsString[0]);
}

/**
 * Extract percentages for each star rating
 * @method starRatingPercents
 * @return array of rankings
 */
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

/**
 * Calculate a ranking using a Bayesian estimate
 * @method bayesianEstimate
 * @param {number} R average rating
 * @param {number} v number of votes
 * @param {number} m minimum number of votes
 * @param {number} C the mean vote across all of Amazon
 * @return weighted ranking
 */
function bayesianEstimate(R, v, m, C) {
  return (v / (v + m)) * R + (m / (v + m)) * C;
}

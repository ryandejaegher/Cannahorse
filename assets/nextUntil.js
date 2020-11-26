var nextUntil = function(elem, selector, filter) {

	// Setup siblings array
	var siblings = [];

	// Get the next sibling element
	elem = elem.nextElementSibling;

	// As long as a sibling exists
	while (elem) {

		// If we've reached our match, bail
		if (elem.matches(selector)) break;

		// If filtering by a selector, check if the sibling matches
		if (filter && !elem.matches(filter)) {
			elem = elem.nextElementSibling;
			continue;
		}

		// Otherwise, push it to the siblings array
		siblings.push(elem);

		// Get the next sibling element
		elem = elem.nextElementSibling;

	}

	return siblings;

};

var faqs = document.querySelectorAll('[data-faq="question"]');
faqs.forEach(faq => {
  nextUntil(faq,'[data-faq="question"]').forEach(item => item.classList.add('faq-hide','transition','cursor'))
  faq.addEventListener('click', function(e) {
    nextUntil(this,'[data-faq="question"]').forEach(item => item.classList.toggle('faq-hide'))
  })
})
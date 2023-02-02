// Include sticky menu
// ----------------------------------------------------------------------------
// var sticky = document.getElementsByClassName('js-sticky');
// if (sticky.length > 0) {
// 	var sticky_menu = new StickyMenu({ });
// 	sticky_menu.init();
// }




// Include drop downs
// ----------------------------------------------------------------------------
var dropdowns = document.getElementsByClassName('js-drop');

if (dropdowns.length > 0) {
	var menus = [];

	Array.prototype.forEach.call(dropdowns, function(el) {
		menus.push(new Dropdown({'hook': el.id, 'menu': el.dataset.menu}));	
	});

	Array.prototype.forEach.call(menus, function(m) {
		m.init();
	}); 
}




// Pagination with list.js (https://listjs.com/)
// ----------------------------------------------------------------------------


// // Get list.js up and running if needed
// const perPage = 25;
// const itemCount = document.getElementById('js-upcoming-events').getElementsByClassName('list')[0].getElementsByTagName('li').length;

// if( itemCount > perPage ){

// 	const options = {
// 	  page: perPage,
// 	  pagination: [{
// 	      outerWindow: 1	 
// 	    }]
// 	};

// 	const upcomingList = new List('js-upcoming-events', options);


// 	// Add prev and next buttons
// 	let prev, 
// 			next,
// 			current;

// 	// Find total pages
// 	const pageCount = Math.ceil(upcomingList.size() / perPage);

// 	// Grab and add relevant elements
// 	const pagination = document.getElementById('js-pagination');
// 	pagination.insertAdjacentHTML('beforebegin', '<div id="js-prev" class="btn-prev"> Prev </div>');
// 	pagination.insertAdjacentHTML('afterend', '<div id="js-next" class="btn-next"> Next </div>');

// 	// function to set everything up and update as needed
// 	const position = function(){
// 		prev = document.getElementById('js-prev');
// 		next = document.getElementById('js-next');
// 		current = Math.ceil(upcomingList.i / perPage);
// 	}

// 	// call the function to set up values
// 	position();

// 	// set up event listeners
// 	prev.addEventListener("click", function(){
// 		if(current > 1) {
// 			upcomingList.show(upcomingList.i - perPage, upcomingList.page);
// 			position();
// 		}
// 	});
// 	next.addEventListener("click", function(){
// 		if(current < pageCount) {
// 			upcomingList.show(upcomingList.i + perPage, upcomingList.page);
// 			position();
// 		} 	
// 	});
	
// }




// Load embedded video when click on cover image
// ----------------------------------------------------------------------------

var videocovers = document.getElementsByClassName('js-videocover');

// if length is > 0
if (videocovers.length > 0) {

	var videoloader = function( el ) {
		var embedCode = el.dataset.embed;
		el.innerHTML = "<div>" + embedCode + "</div>";
	}

	Array.prototype.forEach.call(videocovers, function(el) {
		el.addEventListener("click", function(e){
			videoloader(el);
		});	
	});


}
// add event listeners for clicks
// grab the embed code from the data element
// replace the img tag with the video embed code

const contentTypes = ['about-content', 'work-content', 'connect-content'];

let hideAllContent = function() {
    contentTypes.forEach(ctype => {
        document.getElementById(ctype).hidden = true;
    });
};

let showContent = function(contentType) {
    // we hide each content types
    // then show the current content
    hideAllContent();
    document.getElementById(contentType).hidden = false;
};


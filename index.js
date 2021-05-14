const contentTypes = ['about-content', 'work-content', 'connect-content'];
/*
    hides all other content
    show the content if hidden,
    hides the content if shown
*/
let showContent = function(contentType) {
    contentTypes.forEach(cType => {
        if (cType !== contentType) {
            document.getElementById(cType).hidden = true;
        }
    });

    let element = document.getElementById(contentType);
    element.hidden = !element.hidden;
};


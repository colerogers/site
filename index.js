const contentTypes = ['about-content', 'work-content', 'connect-content'];
/*
    hides all other content
    show the content if hidden,
    hides the content if shown
*/
const showContent = function(contentType) {
    for (const type of contentTypes) {
        if (type === contentType) {
            const element = document.getElementById(contentType);
            element.hidden = !element.hidden;
        } else {
            document.getElementById(type).hidden = true;
        }
    }
};


/** Site Functions */

type content = 'about-content' | 'work-content' | 'connect-content';

const CONTENT_TYPES: content[] = ['about-content', 'work-content', 'connect-content'];

/**
 * Shows the content that was clicked and hides all other content.
 * @param contentType the type of content that was clicked by the user
 */
function showContent(contentType: content) {
    for (const type of CONTENT_TYPES) {
        if (type === contentType) {
            const element = document.getElementById(type);
            element!.hidden = !element!.hidden;
        } else {
            document.getElementById(type)!.hidden = true;
        }
    }
};


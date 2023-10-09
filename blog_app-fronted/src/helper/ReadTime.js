import {stripHtml} from 'string-strip-html';
 export default function calculateReadingTime(htmlContent) {
    // Remove HTML tags and get plain text content
    const plainTextContent = stripHtml(htmlContent).result;

    // Calculate reading time (average reading speed: 200 words per minute)
    const words = plainTextContent.split(/\s+/).length;
    const readingTimeInMinutes = Math.ceil(words / 200);

    // Return reading content and reading time
    return readingTimeInMinutes;

    // return {
    //     readingContent: plainTextContent,
    //     readingTimeInMinutes: readingTimeInMinutes
    // };
}




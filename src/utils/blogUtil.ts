// Function to calculate reading time
export const calculateReadingTime = (text: string) => {
    const wordsPerMinute = 200; // Average reading speed
    const textLength = text.split(' ').length;
    const readingTime = Math.ceil(textLength / wordsPerMinute);
    return readingTime;
};

function slugify(title) {
    const wordTitle = title.toLowerCase();
    const arrTitle = wordTitle.split(' ');
    const dashTitle = arrTitle.join('-');
    return dashTitle
}

console.log(slugify("Arrays for begginers")); 
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 
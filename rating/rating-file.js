const fs = require('fs').promises;

async function makeRatingFile(path, arr) {
    const ratingFile = await fs.readFile(path, 'utf8');

    const ratingArray = JSON.parse(ratingFile);

    arr.forEach(item => {
        if (!ratingArray.find((el) => el.id === item.id)) {
            let obj = {
                id: item.id,
                title: item.title,
                image: item.image,
                link: item.link,
                description: item.description,
                rating: 0,
            };
            ratingArray.push(obj);
        }
    });
    fs.writeFile(path, JSON.stringify(ratingArray));
}

module.exports = makeRatingFile;
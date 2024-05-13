function createRating(obj, weight) {
    return (
        obj.gameplay * weight.gameplay +
        obj.design * weight.design +
        obj.idea * weight.idea
    )
}

function updateRaiting(array, id, rating) {
    const index = array.findIndex((item) => item.id === id);
    array[index].rating += rating;
    return array
}

module.exports = { createRating, updateRaiting }
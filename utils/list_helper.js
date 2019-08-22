const dummy = (blogs) => {
    return 1
}

const Likes = (blogs) => {
    let result = 0
    const likes = blogs.map(item =>  {
        blogs.length > 0
            ? result += Number(item.likes)
            : result
    })
    return result
}

const favoriteBlog = (blogs) => {
    let likeCount = 0
    let result = {}
    blogs.forEach(element => {
        if(element.likes > likeCount){
            likeCount = element.likes
            result = {title: element.title}
        }
    })
    console.log(likeCount)
    console.log(result)
    return result
}

module.exports = {
    dummy,
    Likes,
    favoriteBlog
}


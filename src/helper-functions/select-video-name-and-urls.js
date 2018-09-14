module.exports = function (video) {
  console.log(video, 'video')
  return {
    id: video.id,
    poster: video.images[0].url,
    title: video.title,
    href: video.contents[0].url,
    type: 'video/mp4'
  }
}

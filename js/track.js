$(function() {
  let tracks = $('.track')
  let modal = $('#track-info-modal')

  tracks.each(function(index, track) {
    $(track).click(function(event) {
      trackObj = objTimes[$(track).attr('id')]
      setVideo(trackObj.video)
      stopVideo()
      setVolume(10)

      $('.modal-content > .stm-info').html('Track #' + trackObj.id)
      $('.modal-content > .times > .stm > .time').html(trackObj.stm)
      $('.modal-content > .times > .sg > .time').html(trackObj.sg)
      $('.modal-content > .times > .ss > .time').html(trackObj.ss)
      $('.modal-content > .times > .sb > .time').html(trackObj.sb)
      $('.modal-content > .times > .rtm > .time').html(trackObj.rtm)

      $(modal).show()
    })
  })

  $(document).click((event) => {
    if ($(event.target).hasClass('modal')) {
      stopVideo()
      $(modal).hide()
    }
  })
});
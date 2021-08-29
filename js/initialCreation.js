$(function () {
  let modal = $('#track-info-modal')
  let currentTrack = -1
  let tierColors = {
    t1: '#00FF28',
    t2: '#7BE900',
    t3: '#A8D000',
    t4: '#C8B600',
    t5: '#E09800',
    t6: '#F17700',
    t7: '#FB5000',
    t8: '#FF0000',
  }

  function setModalInfo(trackObject) {

    setVideo(trackObject.video)
    stopVideo()
    setVolume(10)

    $('.stm-info').html('Track #' + trackObject.id)
    $('#stm').html(trackObject.stm)
    $('#sg').html(trackObject.sg)
    $('#ss').html(trackObject.ss)
    $('#sb').html(trackObject.sb)
    $('#rtm').html(trackObject.rtm)
    $('#rg').html(trackObject.rg)
    $('#rs').html(trackObject.rs)
    $('#rb').html(trackObject.rb)

    // setting color for css variable since I made
    // the inverse borders via ::before and ::after
    // and you can't access them directly :\
    document.body.style.setProperty(
      '--rr-color',
      '0 -10px 0 0 ' + tierColors[`t${9 - trackObject.tier}`]
    )
    $('.modal-tier-text').html(`Tier ${9 - trackObject.tier}`)
    $('.modal-tier-text').css('background-color', tierColors[`t${9 - trackObject.tier}`])
    $('.modal-tier-line').css('background-color', tierColors[`t${9 - trackObject.tier}`])

    if (trackObject.id === '001') {
      $('.previous').addClass('inactive')
    } else {
      $('.previous').removeClass('inactive')
    }

    if (trackObject.id === '200') {
      $('.next').addClass('inactive')
    } else {
      $('.next').removeClass('inactive')
    }

  }

  function createTracksAndBehaviour() {
    for (i = 1; i <= 200; i++) {
      let series = 'Not defined'
      if (i <= 40) series = 'white'
      else if (i >= 41 && i <= 80) series = 'green'
      else if (i >= 81 && i <= 120) series = 'blue'
      else if (i >= 121 && i <= 160) series = 'red'
      else if (i >= 161) series = 'black'

      let tmp = i % 40
      let environment = 'Not defined'
      if (tmp >= 1 && tmp <= 10) environment = 'canyon'
      else if (tmp >= 11 && tmp <= 20) environment = 'valley'
      else if (tmp >= 21 && tmp <= 30) environment = 'lagoon'
      else if ((tmp >= 31 && tmp <= 40) || tmp === 0) environment = 'stadium'

      $(`.${environment}.${series}.track-list`).append(
        `<li class="track" id="${('00' + i).slice(-3)}"><div class="button">${
          i < 10 ? ('0' + i).slice(-2) : i
        }</div>
        <div class="difficulty"></div>
        </li>`
      )
    }

    $('.difficulty').hide()
    $('.tier-button').click(() => {
      $('.difficulty').toggle()
      $('.track').toggleClass('short')
    })

    let bodyStyles = window.getComputedStyle(document.body)
    document.body.style.setProperty('--rr-color', '0 -10px 0 0 #ff0000')

    let tracks = $('.track')
    tracks.each((index, track) => {
      let trackObj = objTimes[$(track).attr('id')]
      $(track)
      .find('.difficulty')
      .addClass(`t${9 - trackObj.tier}`)
      .css('width', `${((9 - trackObj.tier) / 8) * 100}%`)

      $(track).click(() => {
        currentTrack = index + 1
        setModalInfo(trackObj)
        $(modal).show()
      })
    })

    // everything here seems very bad :Sadge:
    $('.previous').click(() => {
      if ($(modal).is(':visible') && currentTrack != 1) {
        let trackObj = objTimes[('00' + (currentTrack - 1)).slice(-3)]
        currentTrack -= 1
        setModalInfo(trackObj)
      }
    })

    $('.next').click(() => {
      if ($(modal).is(':visible') && currentTrack != 200) {
        let trackObj = objTimes[('00' + (currentTrack + 1)).slice(-3)]
        currentTrack += 1
        setModalInfo(trackObj)
      }
    })

    let filters = $('.tier')
    filters.each((index, tier) => {
      $(tier).click(() => {
        $(tier).toggleClass('inactive')
        $(tracks)
          .find(`.${$(tier).attr('id')}`)
          .parent()
          .toggleClass('inactive')
      })
    })
  }

  createTracksAndBehaviour()

  $(document).click((event) => {
    if ($(event.target).hasClass('modal')) {
      stopVideo()
      $(modal).hide()
    }
  })
})

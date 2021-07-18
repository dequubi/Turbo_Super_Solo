$(function () {
  let modal = $('#track-info-modal')
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
        setVideo(trackObj.video)
        stopVideo()
        setVolume(10)

        $('.stm-info').html('Track #' + trackObj.id)
        $('#stm').html(trackObj.stm)
        $('#sg').html(trackObj.sg)
        $('#ss').html(trackObj.ss)
        $('#sb').html(trackObj.sb)
        $('#rtm').html(trackObj.rtm)
        $('#rg').html(trackObj.rg)
        $('#rs').html(trackObj.rs)
        $('#rb').html(trackObj.rb)

        // setting color for css variable since I made
        // the inverse borders via ::before and ::after
        // and you can't access them directly :\
        document.body.style.setProperty(
          '--rr-color',
          '0 -10px 0 0 ' + tierColors[`t${9 - trackObj.tier}`]
        )
        $('.modal-tier-text').html(`Tier ${9 - trackObj.tier}`)
        $('.modal-tier-text').css('background-color', tierColors[`t${9 - trackObj.tier}`])
        $('.modal-tier-line').css('background-color', tierColors[`t${9 - trackObj.tier}`])

        $(modal).show()
      })
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

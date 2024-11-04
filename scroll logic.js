var scrollTracked = {
    25: false,
    50: false,
    75: false,
    100: false
  }
  window.addEventListener('scroll', function() {
    var scrollcurrent = window.scrollY + window.innerHeight
    var pageheight = document.documentElement.scrollHeight
    var percentage = (scrollcurrent / pageheight) * 100
    if (percentage >=25 && !scrollTracked[25]) {
      scrollTracked[25] = true
      console.log('25%')
      dataLayer.push({'event': 'scroll', 'scroll_threshold': 25, 'scroll_direction': 'vertical'})
    }
    if (percentage >=50 && !scrollTracked[50]) {
      scrollTracked[50] = true
      console.log('50%')
      dataLayer.push({'event': 'scroll', 'scroll_threshold': 50, 'scroll_direction': 'vertical'})
    }
    if (percentage >=75 && !scrollTracked[75]) {
      scrollTracked[75] = true
      console.log('75%')
      dataLayer.push({'event': 'scroll', 'scroll_threshold': 75, 'scroll_direction': 'vertical'})
    }
    if (percentage >=100 && !scrollTracked[100]) {
      scrollTracked[100] = true
      console.log('100%')
      dataLayer.push({'event': 'scroll', 'scroll_threshold': 100, 'scroll_direction': 'vertical'})
    }


  })
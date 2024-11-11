(function() {
    var cookieMatch = document.cookie.match(/ga1\.\w\.\w+\.\w+/i)
    var cookieValue = cookieMatch ? cookieMatch[0] : ''
    var client_id = cookieValue ? cookieValue.split('.')[2] + '.' + cookieValue.split('.')[3] : ''
    var pageType = window.location.pathname.split('/')[2]?.split('.')[0] || 'Home'
  
    if (localStorage.getItem('login_status') === 'true') {
      var user_id = localStorage.getItem('user_id')
      dataLayer.push({
        'event': 'log_in',
        'page_type': pageType,
        'login_status': 'true',
        'client_id': client_id,
        'user_id': user_id
      })
    } else {
      dataLayer.push({
        'event': 'log_out',
        'page_type': pageType,
        'login_status': 'false',
        'client_id': client_id,
        'user_id': null
      })
    }
  })()

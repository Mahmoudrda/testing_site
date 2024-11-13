(function() {
    login_status = false
    user_id = null
    var cookieMatch = document.cookie.match(/ga1\.\w\.\w+\.\w+/i)
    var cookieValue = cookieMatch ? cookieMatch[0] : ''
    var client_id = cookieValue ? cookieValue.split('.')[2] + '.' + cookieValue.split('.')[3] : ''
    var page_type = window.location.pathname.split('/')[2].split('.')[0] || 'Home'
    if (page_type === 'index') { page_type = 'Home'; }
    dataLayer = window.dataLayer || []
    dataLayer.push({
        'login_status': login_status,
        'client_id': client_id,
        'user_id': user_id,
        'page_type': page_type
    })
    document.querySelector('.login_btn').addEventListener('click', function(event) {
        if(login_status === false) {
            document.querySelector('.login_btn').innerHTML = 'Logout'
            event.preventDefault()
            login_status = true
            dataLayer.push({
                'login_status': login_status,
                'client_id': client_id,
                'user_id': Math.floor(Math.random() * 10000000),
                'page_type': page_type
            })
        }   
        else {
            document.querySelector('.login_btn').innerHTML = 'Login'
            event.preventDefault()
            login_status = false
            user_id = null
            dataLayer.push({
                'login_status': login_status,
                'client_id': client_id,
                'user_id': user_id,
                'page_type': page_type
            })
        }

    })
})()

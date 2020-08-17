import tokenService from '../../src/utils/tokenService'

const BASE_URL = '/api/posts'

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json())
}

export function create(post) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization':  'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(post)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function update(post) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(post)
    }
    return fetch(`${BASE_URL}/${post._id}`, options).then(res => res.json())
}

export function getOne(post) {
    return fetch(`${BASE_URL}/${post._id}`).then(res => res.json())
}

export function deleteOne(id) {
    const options = {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
}

export function addComment (post_id, postComment){
    const options = {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          }, 
        body: JSON.stringify({'post_id': post_id, 'postComment': postComment})
    }
    return fetch(`${BASE_URL}/${post_id}/comment`, options).then(res => res.json())
}

export function deleteComment(post_id, postComment_id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          },
        body: JSON.stringify({'post_id': post_id})
    }
    return fetch(`${BASE_URL}/delete/${postComment_id}`, options).then(res => res.json())
}
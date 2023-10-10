import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> Index toys
export const indexToys = () => {
    return axios(`${apiUrl}/toys`)
}

// READ -> Show/detail page
export const detailToy = (id) => {
    return axios(`${apiUrl}/toys/${id}`)
}

// CREATE -> Add Toy
export const createToy = (user, newToy) => {
    return axios({
        url: `${apiUrl}/toys`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { toy: newToy }
    })
}
// UPDATE -> Edit Toy
export const updateToy = (user, updatedToy) => {
    return axios({
        url: `${apiUrl}/toys/${updatedToy._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { toy: updatedToy }
    })
}

// DELETE -> Delete toy
export const deleteToy = (user, toyId) => {
    return axios({
        url: `${apiUrl}/toys/${toyId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
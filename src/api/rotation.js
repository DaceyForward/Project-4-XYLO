import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> Index rotations
export const indexRotations = () => {
    return axios(`${apiUrl}/rotations`)}
    // return axios({
    //     url: `${apiUrl}/rotations`,
    //     method: 'GET',
    //     headers: {
    //         Authorization: `Token token=${user.token}`
    //     },
    //     data: { rotation: newRotation }
    // })}

// READ -> Show/detail page
export const detailRotation = (id) => {
    return axios(`${apiUrl}/rotations/${id}`)
}
    // return axios({
    //     url: `${apiUrl}/rotations`,
    //     method: 'GET',
    //     headers: {
    //         Authorization: `Token token=${user.token}`
    //     },
    //     data: { rotation: newRotation }
    // })}

// CREATE -> Add Rotation
export const createRotation = (user, newRotation) => {
    return axios({
        url: `${apiUrl}/rotations`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { rotation: newRotation }
    })
}
// UPDATE -> Edit Rotation
export const updateRotation = (user, updatedRotation) => {
    return axios({
        url: `${apiUrl}/rotations/${updatedRotation.id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { rotation: updatedRotation }
    })
}

// DELETE -> Delete rotation
export const deleteRotation = (user, rotationId) => {
    return axios({
        url: `${apiUrl}/rotations/${rotationId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
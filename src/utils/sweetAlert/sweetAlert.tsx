import SweetAlert from 'sweetalert2';

export const onSuccessAlert = (title: string, message: string) => {
    SweetAlert.fire({
        title:title,
        text:message,
        icon:'success',
        timer:3000,
        showConfirmButton:false
      })

}


export const onErrorAlert = (title: string, message: string) => {
    SweetAlert.fire({
        title: title,
        text: message,
        icon: 'error',
        timer: 3000,
        showConfirmButton: false,
      })
}

export const onInfoAlert = (title: string, message: string) => {
    SweetAlert.fire({
        title: title,
        text: message,
        icon: 'info',
        timer: 3000,
        showConfirmButton: false,
      })
}

// export const apiResponseHandler = (data) => {
//     if(data.status == 'success'){
//         onSuccessAlert(data.message, '')
//     } else if (data.status == 'info'){
//         onErrorAlert(data.message,'')
//     } else {
//         onErrorAlert(data.message,'')
//     }
// }
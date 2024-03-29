window.submitForm = function (event) {
    event.preventDefault();
    const imgWel = '';
    const URL = 'https://script.google.com/macros/s/AKfycbwUfyRtgAa8e0cX5_1bmw8E0QGqTqcuGu1PpQzoGC5LO1Xue_qDpZoYYFDLamZGGGr_/exec';
    const form = document.getElementById('Details');
    fetch(URL, { method: 'POST', body: new FormData(form) })
        .then(Response => {
            if (Response.ok) {
                Swal.fire({
                    title: 'Now you can join our Whatsapp.',
                    iconHtml: '<img src="image/undraw_welcome_cats_thqn.png" style="width: 200px; height: 100px">',
                    customClass: {
                        icon: 'no-border'
                    }
                })
                    .then(() => {
                        window.location.href = "https://chat.whatsapp.com/LXdUJj2ZMCI3hRqYUN4H6L";
                    })
            } else {
                throw new Error('sorry please try later')
            }
        })
        .catch(error => {
            console.error('error!', error.message);
            Swal.fire(
                'error!'
            );

        });
}

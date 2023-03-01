import Swal from 'sweetalert2';

export default function paymentSucces(goBack) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn billSubmit',
            cancelButton: 'btn billSubmit'
        },
        buttonsStyling: true
    });

    swalWithBootstrapButtons
        .fire({
            title: 'Gasto Realizado correctamente',
            text: '¿Desea cargar otro gasto?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'No, volver a página principal',
            cancelButtonText: 'Si',
            reverseButtons: true
        })
        .then((result) => {
            if (result.isConfirmed) {
                goBack();
            }
        });
}

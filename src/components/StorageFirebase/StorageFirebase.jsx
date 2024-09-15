import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const StorageFirebase = () => {
        const storage = getStorage();
        const storageRef = ref(storage, ''); // Reemplaza con la ruta de tu archivo

        // Sube un archivo
        const file = '';
        uploadBytes(storageRef, file)
        .then((snapshot) => {
            console.log('¡Archivo subido correctamente!');
            // Obtén la URL de descarga
            getDownloadURL(snapshot.ref)
            .then((url) => {
                console.log('Archivo disponible en', url);
            })
            .catch((error) => {
                console.error('Error al obtener la URL de descarga:', error);
            });
        })
        .catch((error) => {
            console.error('Error al subir el archivo:', error);
        });

        // Descarga un archivo
        getDownloadURL(storageRef)
        .then((url) => {
            // Usa la URL de descarga para obtener el archivo
            fetch(url)
            .then((response) => {
                // ... maneja la respuesta ...
            })
            .catch((error) => {
                console.error('Error al descargar el archivo:', error);
            });
        })
        .catch((error) => {
            console.error('Error al obtener la URL de descarga:', error);
        });
}

export default StorageFirebase;
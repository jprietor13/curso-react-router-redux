import md5 from 'md5';

const gravatar = email => {
    //url base de la imagen del gravatar
    const base = 'https://gravatar.com/avatar/';
    //formateamos el correo, eliminamos espacios y convertimos el texto a miniscula
    const formatEmail = (email).trim().toLowerCase();
    //creamis el hash, pasamos el correo formateado y el formato binario
    const hash = md5(formatEmail, { encoding: "binary" });

    return `${base}${hash}`;
}

export default gravatar;
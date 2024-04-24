import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Usuario() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsuarios(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Error al obtener los datos', err);
            });
    }, []);

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold'>Lista de Usuarios</h1>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.name} - {usuario.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default Usuario;

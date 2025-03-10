import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExampleAxios() {
  // Estado para almacenar los posts obtenidos
  const [posts, setPosts] = useState([]);
  // Estado para manejar el estado de carga
  const [loading, setLoading] = useState(true);
  // Estado para manejar los errores
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función que obtiene los datos de la API usando Axios
    const fetchPosts = async () => {
      try {
        // Hacemos la solicitud GET a la API
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data); // Guardamos los datos en el estado
        setLoading(false); // Cambiamos el estado de carga a falso
      } catch (err) {
        setError('Error al obtener los posts'); // Establecemos un mensaje de error si la solicitud falla
        setLoading(false); // Aseguramos que se deje de mostrar el estado de carga
      }
    };

    fetchPosts(); // Llamamos a la función al montar el componente
  }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

  // Si está cargando, mostramos un mensaje de carga
  if (loading) return <p>Cargando...</p>;

  // Si hubo un error, mostramos el mensaje de error
  if (error) return <p className="text-red-500">{error}</p>;

  // Si no hay errores y ya se cargaron los posts, los mostramos en una lista
  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2 p-4 border border-gray-200 rounded">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleAxios;

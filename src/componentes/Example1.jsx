import React, { useState, useEffect } from 'react';

function Example1() {
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función que obtiene los datos de post y usuario
    const fetchData = () => {
      const postPromise = fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json());
      const userPromise = fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json());

      // Usamos Promise.all para esperar ambas respuestas
      Promise.all([postPromise, userPromise])
        .then(([postData, userData]) => {
          setPost(postData); // Guardamos el post
          setUser(userData); // Guardamos el usuario
        })
        .catch((error) => {
          setError(error.message); // Si ocurre un error, lo almacenamos
        })
        .finally(() => {
          setLoading(false); // Finalmente, terminamos de cargar
        });
    };

    fetchData(); // Llamamos a la función al montar el componente
  }, []);

  // Si está cargando, mostramos un mensaje
  if (loading) return <p>Cargando...</p>;

  // Si ocurrió un error, lo mostramos
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Post:</h1>
      <p>{post?.title}</p>
      <h2>User:</h2>
      <p>{user?.name}</p>
    </div>
  );
}

export default Example1;

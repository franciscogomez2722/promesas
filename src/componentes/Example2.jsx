import React, { useState, useEffect } from 'react';

function Example2() {
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función asincrónica que obtiene los datos de post y usuario
    const fetchData = async () => {
      try {
        const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        const postData = await postResponse.json();
        const userData = await userResponse.json();

        setPost(postData); // Guardamos el post
        setUser(userData); // Guardamos el usuario
      } catch (error) {
        setError(error.message); // Si ocurre un error, lo almacenamos
      } finally {
        setLoading(false); // Finalmente, terminamos de cargar
      }
    };

    fetchData(); // Llamamos a la función asincrónica al montar el componente
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

export default Example2;

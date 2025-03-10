import { useState, useEffect } from "react"; // Importamos los hooks useState y useEffect

function SimplePromise() {
  // Estado para almacenar los comentarios obtenidos
  const [comentarios, setComentarios] = useState([]);
  // Estado para indicar si la solicitud aún está en proceso
  const [loading, setLoading] = useState(true);
  // Estado para almacenar errores si ocurre alguno
  const [error, setError] = useState(null);
  

  useEffect(() => {

    
    
    // Función que obtiene los comentarios desde la API
    const fetchComentarios = async () => {
      setLoading(true); // Indicamos que la carga ha iniciado

      fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((response) => {
          if (!response.ok) {
            // Si la respuesta no es exitosa, lanzamos un error
            throw new Error("Error al obtener los comentarios");
          }
          return response.json(); // Convertimos la respuesta a JSON
        })
        .then((resultado) => {
          console.log("Éxito:", resultado); // ✅ Se ejecuta si la promesa se resuelve con éxito
          setComentarios(resultado); // Guardamos los comentarios en el estado
        })
        .catch((error) => {
          console.error("Error:", error); // ❌ Se ejecuta si la promesa se rechaza
          setError(error.message); // Guardamos el mensaje de error en el estado
        })
        .finally(() => {
          console.log("La promesa ha finalizado"); // 🔄 Se ejecuta siempre, éxito o error
          setLoading(false); // Indicamos que la carga ha finalizado
        });
    };

    fetchComentarios(); // Llamamos a la función cuando el componente se monta
  }, []); // El array vacío [] asegura que useEffect solo se ejecute una vez

  // Si aún está cargando, mostramos un mensaje de carga
  if (loading) return <p className="text-center text-lg">Cargando comentarios...</p>;

  // Si ocurrió un error, mostramos un mensaje de error
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  // 
  

  return (
    <div className="p-5 flex flex-wrap gap-4 justify-center">
      {comentarios.map((comentario) => (
        <div key={comentario.id} className="w-96 bg-white shadow-lg rounded-lg flex p-4">
          {/* Lado izquierdo - Muestra el ID, nombre y correo */}
          <div className="w-2/3 p-2">
            <h2 className="text-lg font-bold">ID: {comentario.id}</h2>
            <p className="text-gray-700"><strong>Nombre:</strong> {comentario.name}</p>
            <p className="text-gray-500"><strong>Email:</strong> {comentario.email}</p>
          </div>

          
        </div>
      ))}
    </div>
  );
}

export default SimplePromise;



//const comentariosLimitados = comentarios.slice(0, 3);
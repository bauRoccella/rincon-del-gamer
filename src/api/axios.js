import axios from 'axios';

// Crear una instancia de Axios
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1', // URL de la API
});

// Agregar un interceptor para incluir el JWT en los headers
axiosInstance.interceptors.request.use( 
    async (config) => {
        // Verifica si la ruta es pública
        if (!config.url.startsWith('/public')) {
            const token = localStorage.getItem('jwt'); // Obtener el token del localStorage
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`; // Agregar el token a los headers
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error); // Manejo de errores
    }
);

export default axiosInstance;


// esto lo que hace es enviar el jwt a todos los endpoints excepto por los que empiezan con /public en su url
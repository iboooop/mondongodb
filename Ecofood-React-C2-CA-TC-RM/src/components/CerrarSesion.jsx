import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function CerrarSesion() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      Swal.fire(
        "Sesión cerrada",
        "Has cerrado sesión correctamente",
        "success"
      );
      navigate("/login");
      
    } catch (error) {
      Swal.fire("Error", "No se pudo cerrar la sesión", "error");
    }
  };
  return (
    <button onClick={handleLogout} className="btn cerrar-sesion-btn">
      Cerrar Sesión
    </button>
  );
}

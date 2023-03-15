import { Navigate } from "react-router-dom";
import { useSelector } from"react-redux"
import Swal from "sweetalert2";


export default function Privateroutes({ children }) {
  const { isAuth } = useSelector((state)=>state.auth)
  
  if (!isAuth) {
   alert("Login Please!")
   
    return <Navigate to="/login" />;
  }
  return children;
}
import { userLocalStorage } from "../../services/localStorage";

export default function PrivateRoute({ children }) {
  let user = userLocalStorage.get();
  if (user) {
    return children;
  }
  window.location.href = "/login";
}

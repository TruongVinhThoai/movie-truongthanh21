import { userLocalStorage } from "../../services/localStorage";
import { USER_LOGIN } from "../../services/Config";

export default function PrivateRoute({ children }) {
  let user = userLocalStorage.get();
  if (user) {
    return children;
  }
  window.location.href = "/login";
}

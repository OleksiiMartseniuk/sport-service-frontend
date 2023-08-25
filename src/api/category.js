import { api } from "boot/axios";
import authHeader from "src/api/auth-header";

export default function getCategories() {
  return api.get('categories/', { headers: authHeader() })
}

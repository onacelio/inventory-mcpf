import AuthGoogle from "./contexts/authGoogle";
import AppRoutes from "./routes/routes";

export default function App() {
  return (
    <AuthGoogle>
      <AppRoutes />
    </AuthGoogle>
  );
}

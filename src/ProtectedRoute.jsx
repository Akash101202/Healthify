import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  const hasRedirected = useRef(false); // prevents multiple toasts

  useEffect(() => {
    if (isLoaded && !isSignedIn && !hasRedirected.current) {
      toast.warning("Please sign in to continue");
      hasRedirected.current = true;
    }
  }, [isSignedIn, isLoaded]);

  if (!isLoaded) return <div>Loading...</div>;

  return isSignedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

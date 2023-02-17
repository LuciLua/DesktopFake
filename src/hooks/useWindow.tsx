import { useContext } from "react";
import { WindowContext } from "../contexts/WindowContext";

export default function useUser() {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error("useNome must be used withim an nomeProvider");
  }
}
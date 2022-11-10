import { useState } from "react";

export function useModal() {
  const [showModal, setShowModal] = useState(false);

  return { setShowModal, showModal };
}

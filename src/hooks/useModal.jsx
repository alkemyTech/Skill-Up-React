import { useState } from "react";

export function useModal() {
  const [showModal, setShowModal] = useState(false);
  const [surePay, setSurePay] = useState(false);

  return { setShowModal, setSurePay, showModal, surePay };
}

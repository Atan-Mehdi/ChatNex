"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("7ba1cd6f-2221-4950-8772-3d753f9bce94");
  }, []);

  return null;
};

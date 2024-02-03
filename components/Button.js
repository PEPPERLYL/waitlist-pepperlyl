"use client";
import React, { useState } from "react";
import { GiClick } from "react-icons/gi";
import Modal from "./Modal"; // Import your Modal component

const Button = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div
        className="w-40 h-12 bg-emerald-700 rounded-lg items-center gap-2.5 inline-flex justify-between px-2 cursor-pointer"
        onClick={openModal}
      >
        <div className="text-white text-base font-semibold hover:underline leading-snug pl-3">
          Join Now!
        </div>
        <div className="text-3xl text-white pr-2 animate-pulse">
          <GiClick />
        </div>
      </div>

      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default Button;

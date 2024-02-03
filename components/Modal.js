import React from "react";
import { IoClose } from "react-icons/io5";
import Form from "./Form.js";
import { motion } from "framer-motion";

const Modal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
    >
      <div className="absolute w-full h-full bg-black opacity-70"></div>
      <div className="relative lg:w-7/12 w-11/12 bg-emerald-700 rounded-lg lg:p-5 p-2">
        {/* Your modal content goes here */}
        <div className="flex justify-end">
          <div onClick={onClose} className="text-4xl text-white cursor-pointer">
            <IoClose />
          </div>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;

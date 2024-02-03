"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { db } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    // Fetch the total number of users from the Firestore database
    const fetchTotalUsers = async () => {
      try {
        const usersCollection = collection(db, "New User");
        const usersSnapshot = await getDocs(usersCollection);
        const totalUsersCount = usersSnapshot.size;
        setTotalUsers(totalUsersCount + 1000);
      } catch (error) {
        console.error("Error fetching total users:", error);
      }
    };

    fetchTotalUsers();
  }, []); // Empty dependency array to run the effect only once

  return (
    <main className="w-full p-4 lg:p-10 flex flex-col min-h-screen">
      <div className="mb-10 lg:mb-5">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center lg:gap-y-3 gap-y-5">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-white text-3xl lg:text-5xl font-bold text-center"
        >
          COMING SOON
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-white lg:text-2xl text-lg font-normal"
        >
          Unlock Endless Creativity in First NFT & Metaverse Marketplace
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" lg:w-6/12 md:w-5/6 opacity-65 text-center text-opacity-50 text-white lg:text-lg sm:text-sm font-normal"
        >
          We are currently building Pepperlyl - NFT & Metaverse Marketplace. An
          ecosystem for web3 gaming, NFT artists, digital artists, art
          collectors, gamers, and game developers. Kindly bear with us.
        </motion.div>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 items-center justify-center lg:pt-8 pt-5"
        >
          <div>
            <Button />
          </div>
          <div className="opacity-60 text-white text-sm font-normal">
            {totalUsers === 0 ? " " : `${totalUsers} others just joined`}
          </div>
        </motion.div>
      </div>

      <div className="mt-auto pb-8 lg:pb-5">
        <Footer />
      </div>
    </main>
  );
}

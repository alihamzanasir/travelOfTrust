"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/services/firebase";
import { collection, getDocs } from "firebase/firestore";

interface Package {
  id: string;
  price: string;
  title: string;
  days: string;
  offerTitle: string;
  offerDescription: string;
  facilities: string[];
  image: string;
}

const PackagesPage = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "packages"));
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Package[];
      setPackages(docs);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Packages</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white shadow rounded-lg p-4 space-y-2">
            <img src={pkg.image} alt={pkg.title} className="h-48 w-full object-cover rounded" />
            <h3 className="font-bold text-lg">{pkg.title}</h3>
            <p><strong>Price:</strong> {pkg.price}</p>
            <p><strong>Days:</strong> {pkg.days}</p>
            <p><strong>Offer:</strong> {pkg.offerTitle}</p>
            <p className="text-sm">{pkg.offerDescription}</p>
            <p className="text-sm text-gray-700">
              <strong>Facilities:</strong> {pkg.facilities.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesPage;

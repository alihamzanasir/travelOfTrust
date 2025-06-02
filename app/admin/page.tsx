"use client";

import React, { useState } from "react";
import { FaMoneyBill, FaPlane, FaHotel, FaClock } from "react-icons/fa";
import { db, storage } from "@/services/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const facilitiesList = [
  "Accommodation",
  "Transportation",
  "Visa Processing",
  "Return Air Ticket",
];

const PackageForm = () => {
  const [formData, setFormData] = useState({
    price: "",
    title: "",
    days: "",
    offerTitle: "",
    offerDescription: "",
    facilities: [] as string[],
    image: null as File | null,
  });

  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFacilityChange = (facility: string) => {
    setFormData((prev) => {
      const newFacilities = prev.facilities.includes(facility)
        ? prev.facilities.filter((f) => f !== facility)
        : [...prev.facilities, facility];
      return { ...prev, facilities: newFacilities };
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const file : any = formData.image;
  const storageRef = ref(storage, `packages/${file.name}`);

  // Upload file to Firebase Storage
  await uploadBytes(storageRef, file);

  // ✅ Firebase will return the correct download URL
  const imageUrl = await getDownloadURL(storageRef);
  const data = {
    ...formData,
    image: imageUrl,
    createdAt: new Date().toISOString(),
  };

  await addDoc(collection(db, "packages"), data);

  alert("Package saved successfully!");
};




  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6"
    >
      <h2 className="text-xl font-bold mb-4">Create Package</h2>

      <div className="space-y-2">
        <label className="block font-medium">
          <FaMoneyBill className="inline mr-2" />
          Price
        </label>
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium">
          <FaHotel className="inline mr-2" />
          Title
        </label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium">
          <FaClock className="inline mr-2" />
          Days
        </label>
        <input
          name="days"
          type="number"
          value={formData.days}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium">Offer Title</label>
        <input
          name="offerTitle"
          value={formData.offerTitle}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium">Offer Description</label>
        <textarea
          name="offerDescription"
          value={formData.offerDescription}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          rows={3}
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium">Facilities</label>
        <div className="flex flex-wrap gap-4">
          {facilitiesList.map((facility) => (
            <label key={facility} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.facilities.includes(facility)}
                onChange={() => handleFacilityChange(facility)}
              />
              <span>{facility}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block font-medium">Upload Picture</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-2 h-40 w-40 object-cover rounded-md"
          />
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default PackageForm;

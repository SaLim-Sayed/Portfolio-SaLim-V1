// components/ContactList.tsx
"use client";
import React, { useEffect, useState } from "react";
import { firebase } from "@/libs/firebaseConfig"; // Adjust the import path as needed
import { collection, getDocs } from "firebase/firestore";

const ContactList = () => {
  const [contacts, setContacts] = useState<any[]>([]); // Define state for contacts
  const [loading, setLoading] = useState(true); // Define loading state
  const [error, setError] = useState<string | null>(null); // Define error state

  const fetchContacts = async () => {
    try {
      const querySnapshot = await getDocs(collection(firebase, "contacts"));
      const contactsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContacts(contactsData);
    } catch (err) {
      console.error("Error fetching contacts: ", err);
      setError("Failed to fetch contacts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts(); // Fetch contacts when the component mounts
  }, []);

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Message: {contact.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

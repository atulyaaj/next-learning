'use client';
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
};

export default function Home() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      // console.log(data);
      setUsers(data);
    }
    catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <h1>Using RESTful API</h1>
      <ul>
        {users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

import { useState } from "react";

import { SearchList } from "./components/SearchList";
import { UserDetails } from "./components/UserDetails";

import styles from "./App.module.css";

export function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className={styles.container}>
      <div>
        <SearchList
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      </div>
      <div>
        <UserDetails selectedUser={selectedUser} />
      </div>
    </div>
  );
}

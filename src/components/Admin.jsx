export default function Admin() {
  const users = [
    { name: "Daniel Pasatyuk", role: "Backend Dev", joined: "Jan 2025" },
    { name: "Victor Shunevych", role: "Documenter", joined: "Feb 2025" },
    { name: "Rodrick", role: "Frontend Dev", joined: "Mar 2025" },
    { name: "GuestUser1", role: "Member", joined: "Apr 2025" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Admin Panel</h1>
      <table className="w-full text-left border dark:border-gray-700">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="p-2">User</th>
            <th className="p-2">Role</th>
            <th className="p-2">Joined</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, idx) => (
            <tr key={idx} className="border-t dark:border-gray-700">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.role}</td>
              <td className="p-2">{u.joined}</td>
              <td className="p-2">
                <button className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded">Promote</button>
                <button className="px-2 py-1 bg-red-500 text-white rounded">Ban</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

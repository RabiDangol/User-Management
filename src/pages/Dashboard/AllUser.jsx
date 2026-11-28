import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const users = [
  {
    id: 1,
    username: "John Doe",
    email: "john@example.com",
    profilePicture: "https://placehold.co/100x100",
    role: "User",
    createdAt: "2026-10-12",
  },
  {
    id: 2,
    username: "Jane Smith",
    email: "jane@example.com",
    profilePicture: "https://placehold.co/100x100",
    role: "Admin",
    createdAt: "2026-10-15",
  },
  {
    id: 3,
    username: "Alex Johnson",
    email: "alex@example.com",
    profilePicture: "https://placehold.co/100x100",
    role: "User",
    createdAt: "2026-10-20",
  },
];

const AllUser = () => {
  return (
    <div className="max-w-6xl mx-auto p-3">
      <h1 className="text-3xl font-semibold mb-2">All Users</h1>

      <p className="text-gray-500 mb-6">
        View all registered users on the platform.
      </p>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell>Profile</TableHeadCell>
              <TableHeadCell>Username</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Role</TableHeadCell>
              <TableHeadCell>Joined Date</TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody className="divide-y">
            {users.map((user) => (
              <TableRow key={user.id} className="bg-white">
                <TableCell>
                  <img
                    src={user.profilePicture}
                    alt={user.username}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </TableCell>

                <TableCell className="font-medium text-gray-900">
                  {user.username}
                </TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>{user.role}</TableCell>

                <TableCell>{user.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllUser;

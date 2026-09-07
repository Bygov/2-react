import { UserCard } from "./UserCard";

const users = [
  {
    name: "Kurt Cobain",
    age: 27,
    city: "Aberdeen",
    active: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzVVIMFJT7gNAZqmg3HlOuLB0HJJevlEti9nHP_Y_8vfQAm8UUewwEDXbcjzSXAq78V2B_hxuFHrDh5DQ5Te_j2c-5L91sJ_DHG7DhaBQ&s=10",
  },
  {
    name: "Axl Rose",
    age: 62,
    city: "Lafayette",
    active: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLunu1iqzv0-MHzVTEARYH9q6hqE2W4xGj8bAXLPRWQ&s=10",
  },
  {
    name: "Dave Mustaine",
    age: 62,
    city: "La Mesa",
    active: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKlWfieQesq-vD6YdwfweUZnKtNI9RHFuJ0LSlDTapQ&s=10",
  },
  {
    name: "Ozzy Osbourne",
    age: 75,
    city: "Birmingham",
    active: false,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8heFzULVNLZWyf0WpfGZc_CAXNY-XObdrYwYfq083Q&s=10",
  },
];

export const UserList = () => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

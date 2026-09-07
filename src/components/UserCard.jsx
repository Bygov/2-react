import { EnvironmentOutlined, UserOutlined, FireOutlined } from '@ant-design/icons';

export const UserCard = ({ user }) => {
  if (!user.active) return null;

  return (
    <div className="user-card">
      <img src={user.img} alt={user.name} className="user-card-img" />
      
      <h2 className="user-card-title">
        <FireOutlined style={{ marginRight: 8, color: 'var(--accent)' }} />
        {user.name}
      </h2>

      <p className="user-card-text">
        <UserOutlined style={{ marginRight: 8 }} />
        <strong>Age:</strong> {user.age}
      </p>

      <p className="user-card-text">
        <EnvironmentOutlined style={{ marginRight: 8 }} />
        <strong>City:</strong> {user.city}
      </p>
    </div>
  );
};
import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
      {/* Avatar */}
      <div className="flex justify-center">
        <img
          src={`https://ui-avatars.com/api/?name=${user.name.firstname}+${user.name.lastname}&background=0D8ABC&color=fff&size=128`}
          alt="avatar"
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
      </div>

      {/* Name */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold text-gray-800 capitalize">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p className="text-gray-500">@{user.username}</p>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-3 text-gray-700">
        <div className="flex items-center gap-2">
          <span className="font-semibold">📧 Email:</span>
          <span className="truncate">{user.email}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold">📱 Phone:</span>
          <span>{user.phone}</span>
        </div>

        <div className="flex items-start gap-2">
          <span className="font-semibold">📍 Address:</span>
          <span className="capitalize">
            {user.address.number}, {user.address.street},
            <br />
            {user.address.city}, {user.address.zipcode}
          </span>
        </div>
      </div>

      {/* Button */}
      <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;
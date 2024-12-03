import React from 'react';

const ProjectIntro = ({ title, members }) => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 text-white shadow-md p-4 flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold text-center">{title}</h1>
      <ul className="mt-2 space-x-2 flex flex-wrap justify-center">
        {members.map((member, index) => (
          <li key={index} className="bg-white text-black px-3 py-1 rounded-full text-sm">
            {member}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectIntro;

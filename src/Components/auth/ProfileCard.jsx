const ProfileCard = ({ name, progress, image }) => {
  return (
    <div className="max-w-5xl rounded shadow-lg flex  h-[100px] bg-white">
      <div>
        <img className="w-[150px] h-full object-cover" src={image} alt={name} />
      </div>
      <div className="px-2 py-4 w-full pr-4">
        <div className="font-bold text-sm mb-2">{name}</div>

        <div className="mt-5">
          <div className="w-full bg-[#eee] rounded-full">
            <div
              className="text-white font-bold text-xs leading-none  text-center bg-cta rounded-full"
              style={{ width: `${progress}%` }}>
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

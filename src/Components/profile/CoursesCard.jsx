import Card from "antd";
const CourseCard = ({ name, lessons, completion, image }) => {
  return (
    <Card className="max-w-5xl rounded shadow-lg flex  h-[100px] bg-white">
      <div>
        <img className="w-[150px] h-full object-cover" src={image} alt={name} />
      </div>
      <div className="px-2 py-4">
        <div className="font-bold text-sm mb-2">{name}</div>

        <div className="mt-5">
          <div className="w-full bg-white rounded-full">
            <div
              className="bg-blue text-xs leading-none  text-center text-white rounded-full"
              style={{ width: `${completion}%` }}
            >
              {completion}%
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;

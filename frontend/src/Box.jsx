import { useContext } from 'react';
import { SeedContext } from './SeedProvider';
export default function Box() {
  const { Seed } = useContext(SeedContext)
  const contents = Seed;
    console.log("From box", Seed);
  return (
    <div className="w-[800px] h-24 bg-raisinBlack ' m-2  grid text-white grid-cols-6 gap-2 p-2  rounded-lg">
    {contents.split(' ').map((content, index) => (
        <div key={index} className="text-center border rounded-lg border-gray-700 p-1">
    { console.log("From box", content)}{content.toUpperCase()}
        </div>
      ))}
    </div>
  );
}

interface LearnMoreLocalOfficials {
  title: string;
  tag: string;
  office: string;
  power: string;
}

function LearnMoreLocalOfficials({
  title,
  tag,
  office,
  power,
}: LearnMoreLocalOfficials) {
  return (
    <div className="shadow-lg flex flex-col justify-evenly rounded-[6px] w-full p-2 h-[192px]">
      <h3 className="font-bold">{title}</h3>
      <p>{office}</p>
      <button className="bg-red w-[117px] h-[29px] text-white">{tag}</button>
      <p>⚫ {power}</p>
    </div>
  );
}

export default LearnMoreLocalOfficials;

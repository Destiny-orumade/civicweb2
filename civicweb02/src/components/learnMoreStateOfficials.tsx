interface LearnMoreStateOfficials {
  title: string;
  tag: string;
  office: string;
  power: string;
}

function LearnMoreStateOfficials({
  title,
  tag,
  office,
  power,
}: LearnMoreStateOfficials) {
  return (
    <div className="shadow-lg flex flex-col justify-evenly rounded-[6px] w-full px-2 md:w-[520px] p-2 h-[192px]">
      <h3 className="font-bold">{title}</h3>
      <p>{office}</p>
      <button className="bg-yellow w-[117px] h-[29px] text-white">{tag}</button>
      <p>⚫ {power}</p>
    </div>
  );
}

export default LearnMoreStateOfficials;

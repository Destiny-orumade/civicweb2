interface LearnMoreOfficials {
  title: string;
  tag: string;
  office: string;
  power: string;
}

function LearnMoreFederalOfficials({
  title,
  tag,
  office,
  power,
}: LearnMoreOfficials) {
  return (
    <div className="shadow-lg flex flex-col justify-evenly rounded-[6px] w-full px-2 md:w-[520px] p-2 h-[192px]">
      <h3 className="font-bold">{title}</h3>
      <p>{office}</p>
      <button className="bg-home w-[117px] h-[29px] text-white">{tag}</button>
      <p>⚫ {power}</p>
    </div>
  );
}

export default LearnMoreFederalOfficials;

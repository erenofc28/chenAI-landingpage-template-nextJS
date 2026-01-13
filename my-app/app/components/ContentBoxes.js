export default function ContentBoxes() {
  return (
    <>
        <section className="w-full bg-white py-20 md:py-28 px-4 md:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
        {/* Blue Box */}
        <div className="flex-[3] md:flex-[2] bg-blue-500 rounded-[32px] min-h-[300px] md:min-h-[350px]"></div>

        {/* White Outlined Box */}
        <div className="flex-1 border-[1.5px] border-black rounded-[32px] bg-white min-h-[300px] md:min-h-[350px]"></div>
      </div>
    </section>

<div className="w-full flex justify-center">
  {/* Outer Container */}
  <div className="flex w-full max-w-6xl gap-4 p-4 bg-white rounded-3xl shadow-sm border border-gray-200">
    
    {/* Active Tab */}
    <div className="h-25 flex-1 rounded-2xl bg-blue-100 border border-blue-400" />

    {/* Inactive Tabs */}
    <div className="h-25 flex-1 rounded-2xl bg-white border border-gray-200" />
    <div className="h-25 flex-1 rounded-2xl bg-white border border-gray-200" />

  </div>
</div>


    </>

  );
}

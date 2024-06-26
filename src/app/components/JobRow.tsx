export default function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="flex grow gap-4">
          <div className="content-center">
            <img className="size-12" src="image1.png" alt="company logo" />
          </div>
          <div className="grow md:flex">
            <div className="grow">
              <div className="text-gray-500 text-sm">Amazon</div>
              <div className="font-bold text-lg mb-1">Product designer</div>
              <div className="text-gray-400 text-sm">Remote &middot; Frankfurt, Germany &middot; Full-time</div>
            </div>
          </div>
          <div className="content-end text-gray-500 text-sm">2 week ago</div>
        </div>
      </div>
    </>
  );
}

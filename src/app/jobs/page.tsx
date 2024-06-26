import JobRow from "../components/JobRow";
import Job from "../components/Job";

export default function Jobs() {
  return (
    <section className="container my-16">
     <div> <h1 className="text-3xl font-bold text-center">Work remotely for German-based companies!</h1>
      <p className="text-center text-gray-600 mt-2">
        We connect skilled professionals in India  with remote job opportunites in Germany. 
        Join us in reshaping the future of work, where your skills are valued.</p>
        <br/>
        <br/>
        <p className="text-center text-gray-600 mt-2">
        Explore exciting career prospects grow your expetise, and contribute to innovative projects with leading German Companies.
        </p>
        </div>
        <br/>
        <div> 
      <h2 className="text-2xl font-bold text-center">Find your next dream job</h2>

      <form className="flex gap-2 mt-4 max-w-md mx-auto">
        <input type="search" className="border border-gray-400 w-full py-2 px-3 rounded-md" placeholder="Search phrase.." />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
      </form>
      </div>
      <div className="bg-slate-200 py-4 ">
      <Job />
      </div>
    </section>
  );
}

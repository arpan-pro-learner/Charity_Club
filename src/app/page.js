
// app/page.js
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">CharityClub</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        We are currently working on something amazing. Stay tuned as we build a new platform dedicated to supporting charitable causes.
      </p>
      <button className="bg-blue-600 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-700 transition" >
       <a href="https://github.com/arpan-pro-learner/Charity_Club">Learn More</a> 
      </button>
    </div>
  );
}

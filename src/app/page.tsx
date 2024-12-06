export default function page (){
  return (
    <main className="py-9 bg-gray-200">
      <title>Login Page</title>

      {/*Background*/}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded-lg max-w-md w-full">
      {/*Main Text*/}
      <h1 className="text-5xl font-extrabold mb-6 text-center text-blue-600">facebook</h1>
      <br />
      <p className="mb-4 text-center text-gray-700 font -semibold font-sans">Facebook help you contact and share <br />with the people in your life</p>
       {/*Form*/}
       <form>
        <div className="mb-4">
          <input type="email" 
          placeholder="Email address or Phone number"
          className="w-full rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
        </div>
        {/*Password*/}
        <div className="mb-4">
          <input type="email"
          placeholder="Password"
          className="w-full rounded-lg border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
        </div>
        <button type="submit" className="w-full rounded-none bg-blue-600 text-white p-3 hover:bg-blue-700 font-bold transition">Log in</button>
       </form>
       {/*Forget Password*/}
       <a href="#" className="text-blue-900 font-semibold block text-center mt-4">Forgotten Password</a>
        
        <hr className="my-6"/>
        <button className="rounded-none bg-lime-600 text-white p-3 hover:bg-lime-700 font-bold tansition  place-content-center w-64 ml-16">Create new account</button>
        </div>
        <p className="text-center mt-6 text-gray">
          <a href="#">Create a Page </a>
          for a celebrity,brand or bussiness.
        </p>
      </div>
    </main>
  );
}
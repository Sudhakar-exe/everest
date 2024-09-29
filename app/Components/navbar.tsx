import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between shadow-lg border bg-slate-500 border-emerald-900">
        <div>
          <img src="/Logo_de_Facebook.png" alt="Logo img"></img>
        </div>
        <div className="flex justify-center">
          <button className=" p-4 px-6 hover:bg-green-700"><Link href="/">Home</Link></button>
          <button className=" p-4 px-6 hover:bg-green-700">
            <Link href="about">About</Link>
          </button>
          <button className=" p-4 px-6 hover:bg-green-700"><Link href="help">Help</Link></button>
        </div>
        <div className="flex justify-end">
          <form>
            <input
              type="text"
              placeholder="Search Here"
              className="m-1 p-1 rounded-lg"
            ></input>
          </form>
          <button className="m-1 p-1 bg-blue-500 rounded-lg hover:bg-blue-600 active:bg-blue-700">
            Profile
          </button>
        </div>
      </div>
    </>
  );
}

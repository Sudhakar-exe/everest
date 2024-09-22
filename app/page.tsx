export default function Home() {
  return (
    <div className="bg-gray-400">
      <h4 className="text-center font-bold">Starter Project</h4>
      <div>
        <p className="text-left m-1 p-1">My name is Sudhakar Chaulagain.</p>
      </div>
      <div>
        <p className="text-right m-1 p-1">I am from Nepal.</p>
      </div>
      <div>
        <hr className="border-gray-900"></hr>
      </div>
      <div className="list-disc">
        <li className="text-red-800">Ram eats rice.</li>
        <li className="text-green-800">Ram is eating rice.</li>
        <li className="text-blue-800">Ram ate rice.</li>
      </div>
      <div className="flex justify-center">
        <button className="m-1 p-1 bg-blue-500 rounded-lg hover:bg-blue-600 active:bg-blue-700">
          Click me
        </button>
      </div>
      <div className="flex justify-center">
        <button className="m-1 p-1 bg-green-500 rounded-lg hover:bg-green-700">
          Hover Over Me
        </button>
      </div>
      <div className="border border-slate-800 rounded-lg m-4 p-4">
        <p>This section has a border and rounded corners.</p>
      </div>
      <div className="p-4 m-4 bg-slate-500 rounded-lg">
        <p>This section has padding and margin</p>
      </div>
      <div className="grid grid-cols-2">
        <div className="p-4 m-4 bg-slate-500">Grid 1</div>
        <div className="p-4 m-4 bg-slate-500">Grid 2</div>
      </div>
      <div className="p-4 m-4 bg-zinc-500">
        <p className="font-bold">Hi, I am learning Tailwind CSS</p>
      </div>
      <div className="shadow-lg m-4 p-4 border border-emerald-900">
        This section has a shadow effect.
      </div>
      <footer className="bg-slate-500 text-center p-3">
        <p>Contact</p>
        <p>sudhakar.chaulagainselu.edu</p>
        <p>{"(985) 956-2987"}</p>
      </footer>
    </div>
  );
}

export default function Companies() {
  return (
    <div className="flex flex-col items-center  w-full">
      <h1 className="font-serif text-4xl py-3">Where I’ve Worked</h1>
      <div className="flex flex-col justify-center gap-3">
        <h1 className="font-sans font-semibold self-center text-xl">
          Xetid, Cuba September, 2014- Jun, 2021{" "}
          <span className="bg-slate-300 px-1 underline">
            Web application developer
          </span>
        </h1>
        <div className="flex flex-row gap-3 md:gap-5 mb-10">
          <div className="flex flex-col justify-center items-center">
            <div className="border-x-2 border-y-2 px-1 border-gray-500">
              <p className="font-serif text-xl font-semibold">2021</p>
            </div>
            <div className="h-full bg-gray-500 w-1" />
            <div className="border-x-2 border-y-2 px-1 border-gray-500">
              <p className="font-serif text-xl font-semibold">2014</p>
            </div>
          </div>
          <ul className="list-disc text-lg px-3 space-y-4">
            <li>
              Participation in the FrontEnd development of a flight reservation
              system for the Cuban airline Aerogaviota. Implemented with the
              React JS library.
            </li>
            <li>
              Implementation of the FrontEnd and participation in the
              development of the Backend of a telephone bill management system.
              Implemented with the React JS library and (the Node JS web
              application framework) Express JS.
            </li>
            <li>
              Implementation of the FrontEnd of a people directory system.
              Implemented with the React JS library
            </li>
            <li>
              Implementation of the FrontEnd and participation in the
              development of the Backend of a visitor control system.
              Implemented with the React JS library and (the Node JS web
              application framework) Express JS.
            </li>
            <li>
              {`Development and support of modules in the company's development
              framework. Implemented with Ext JS (JavaScript framework) and the
              PHP programming language`}
            </li>
            <li>
              Implementation of a system for managing web application clusters.
              Implemented with Ext JS (JavaScript framework) for Frontend
              development and Perl programming language for Backend development.
            </li>
            <li>
              Participation in the development (FrontEnd and Backend) of a
              printing operations control system. Implemented with the framework
              developed and used by the company.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

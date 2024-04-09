import Image from "next/image";

import Link from "next/link";

const people = [
  {
    name: "Jessica Randall",
    state: "London United Kingdom",
    role: "Front-end developer and avid reader",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];
export default function Home() {
  return (
    <>
      <div className="sm:mx-auto xs:max-w-sm sm:max-w-xs my-20 rounded-lg dark:bg-stone-900 text-whit">
        {people.map((person) => (
          <div
            key={person.email}
            className="col-span-1 flex flex-col  rounded-lg  text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                // src={person.imageUrl}
                src="/avatar-jessica.jpeg"
                alt=""
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900 dark:text-white">
                {person.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">State</dt>
                <dd className="text-sm text-gray-500 dark:text-yellow-400">
                  {person.state}
                </dd>
                <dt className="sr-only">Role</dt>
                <div className="mt-5 ">
                  <div className=" items-center rounded-full  px-2 text-xs font-medium text-gray-400">
                    {person.role}
                  </div>
                </div>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex col-span-1 mb-4 mx-5 bg-stone-600 rounded-md hover:bg-yellow-400">
                <div className="-ml-px flex w-0 flex-1">
                  <Link
                    href="http://gevalinho.github.io/"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-2 text-sm font-semibold text-white"
                  >
                    Github
                  </Link>
                </div>
              </div>
              <div className="-mt-px flex col-span-1 mb-4 mx-5 bg-stone-600 rounded-md hover:bg-yellow-400">
                <div className="-ml-px flex w-0 flex-1">
                  <Link
                    href="https://www.frontendmentor.io/profile/gevalinho"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-2 text-sm font-semibold text-white"
                  >
                    Frontend Mentor
                  </Link>
                </div>
              </div>
              <div className="-mt-px flex col-span-1 mb-4 mx-5 bg-stone-600 rounded-md hover:bg-yellow-400">
                <div className="-ml-px flex w-0 flex-1">
                  <Link
                    href="https://www.linkedin.com/in/geva-eval-egbe-836b61a2/"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-2 text-sm font-semibold text-white"
                  >
                    Linkedin
                  </Link>
                </div>
              </div>
              <div className="-mt-px flex col-span-1 mb-4 mx-5 bg-stone-600 rounded-md hover:bg-yellow-400">
                <div className="-ml-px flex w-0 flex-1">
                  <Link
                    href="https://twitter.com/Gevalinho"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-2 text-sm font-semibold text-white"
                  >
                    Twitter
                  </Link>
                </div>
              </div>
              <div className="-mt-px flex col-span-1 mb-4 mx-5 bg-stone-600 rounded-md hover:bg-yellow-400">
                <div className="-ml-px flex w-0 flex-1">
                  <Link
                    href="https://www.instagram.com/gevalinho/"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-2 text-sm font-semibold text-white"
                  >
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section>
        <footer className="flex gap-2 justify-center mb-5">
          <span className="text-gray-500">© {new Date().getFullYear()}</span>
          <Link
            className="hover:text-yellow-400"
            href="http://gevalinho.github.io/"
          >
            <span>Gevalinho</span>
          </Link>
          <span className="text-gray-500 text-right">
            front-end coding challenge.
          </span>
        </footer>
      </section>
    </>
  );
}

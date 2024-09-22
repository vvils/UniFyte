import LogoutButton from "@/components/login/logoutButton";
import Image from "next/image";
import Link from "next/link";

export const DashboardPage: React.FC = () => {
  return (
    <main className="h-full">
      <div className="absolute top-0 left-0 p-4">
        <Link href={"/"}>
          <Image src="/favicon.ico" alt="" width={52} height={52} />
        </Link>
      </div>
      
      <div className="items-center flex flex-col gap-4 mt-8">
        <h1 className="text-4xl font-bold">Edit Profile</h1>
        <Image
          className="border-3 rounded-full"
          src="/favicon.ico"
          alt=""
          width={200}
          height={200}
        />
        <button className="border-2 p-2 rounded-2xl border-orange-300 text-orange-300">
          Upload an Image
        </button>
      </div>

      <div>
        <label>
          <div>
            <span className="font-bold">First Name</span>
          </div>
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 rounded-md border-2"
          />
        </label>
      </div>

      <div>
        <label>
          <div>
            <span className="font-bold">Last Name</span>
          </div>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 rounded-md border-2"
          />
        </label>
      </div>

      <div>
        <label>
          <div>
            <span className="font-bold">About Me</span>
          </div>
          <input
            type="text"
            placeholder="Write a short description about yourself"
            className="w-full p-2 rounded-md border-2"
          />
        </label>
      </div>
      <LogoutButton className="text-md text-gray-800 py-2 px-4 mr-4 rounded-full hover:bg-gray-200 transition ease-in-out duration-200 transform hover:scale-105" />
    </main>
  );
};

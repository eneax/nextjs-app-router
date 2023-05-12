import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className="bg-slate-300 p-0 w-40">
      <Image
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
        width={160}
        height={120}
        className="object-cover mb-2"
      />
      <div className="py-0 px-2">
        <h3 className="mt-0 mb-4 font-bold text-blue-600">
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}

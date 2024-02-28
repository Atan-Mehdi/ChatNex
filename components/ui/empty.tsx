import Image from "next/image";

//In TypeScript, an interface is a way to define a contract for the structure of an object. It allows you to specify the shape of an object by defining the properties it should have and their corresponding types.
interface EmptyProps {
  label: string;
}

export const Empty = ({
  label
}: EmptyProps) => {
  return (
    <div className="h-full p-4 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image src="/empty.png" fill alt="Empty" />
      </div>
      <p className="text-muted-foreground text-sm text-center">
        {label}
      </p>
    </div>
  );
};

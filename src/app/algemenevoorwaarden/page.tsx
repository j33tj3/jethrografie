import { Terms } from "@/components/algemenevoorwaarden/terms";

const AVPage = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="flex w-full max-w-5xl flex-1 flex-col gap-9 py-12">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold uppercase md:text-3xl">
            Algemene voorwaarden Jethrografie
          </h1>
          <p>E-mail: jethrografie@gmail.com</p>
        </div>
        <Terms />
      </div>
    </div>
  );
};

export default AVPage;

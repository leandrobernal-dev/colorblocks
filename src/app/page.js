import { ShareDocument } from "@/components/ShareDoc";

export default function Home() {
  return (
    <main className="flex justify-center p-2">
      <section className="mx-10 mt-16 grid w-10/12 max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-text mb-8 text-7xl font-bold">
            Real Time
            <div className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
              <p>Color</p>
            </div>
            Palette & <i className="font-serif">Font</i> Visualization Tool.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            distinctio?
          </p>
        </div>
        <ShareDocument />
      </section>
    </main>
  );
}

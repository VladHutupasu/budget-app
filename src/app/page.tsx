import Progress from "./components/Progress";
import SpeedDial from "./components/SpeedDial";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center font-knewave bg-linear-to-b from-zinc-800 to-zinc-500">
    // <div className="flex min-h-screen items-center justify-center font-knewave bg-stone-800">
    <div className="flex min-h-screen items-center justify-center font-knewave">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-10 py-32 px-16 sm:items-start">
        <h1 className="text-4xl">Budget app</h1>
        <div className="flex gap-8">
          <Progress value={70} />
          <Progress value={30} primary={false} />
        </div>
        <Timeline />
        <SpeedDial />
      </main>
    </div>
  );
}

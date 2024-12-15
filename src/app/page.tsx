import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-mo sm:bg-desktop bg-no-repeat bg-contain bg-primary-paleBlue">
      <section className="flex flex-col w-96 bg-white rounded-xl shadow-card">
        <div className="">
          <Image
            src={"/images/illustration-hero.svg"}
            alt="Illustration"
            width={450}
            height={220}
            className="rounded-t-xl"
          />
        </div>
        <div className="flex flex-col items-center p-10 gap-4 ">
          <h1 className="font-extrabold text-2xl text-second-darkBlue">
            Order Summary
          </h1>
          <p className="text-sm text-second-desaturatedBlue text-center">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="w-full rounded-xl bg-second-veryPaleBlue flex items-center justify-between p-4">
            <div className="flex gap-4">
              <div>
                <Image
                  src={"/images/icon-music.svg"}
                  alt="Music Icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-extrabold text-second-darkBlue">
                  Annual Plan
                </p>
                <p className="text-xs text-second-desaturatedBlue">
                  $59.99/year
                </p>
              </div>
            </div>
            <div>
              <button className="text-xs font-extrabold underline text-primary-brightBlue ">
                Change
              </button>
            </div>
          </div>
          <div className="w-full flex items-center">
            <button className="w-full rounded-xl bg-primary-brightBlue shadow-button text-sm font-semibold text-white p-2.5">
              Proceed to Payment
            </button>
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="text-xs font-extrabold text-second-desaturatedBlue p-1">
              Cancel Order
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function HeroLanding() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/landing-poster.jpg"
      >
        <source src="/videos/landing-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient + dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <img
          src="/logo/light.svg"
          alt="JPEG Logo"
          className="mb-6 h-10 md:h-14 opacity-95"
        />
        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
          The social game of attention.
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 text-lg md:text-xl">
          Create. Collect. Predict.  
          <br />Where photos become culture — and culture becomes currency.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="/overview"
            className="rounded-full bg-white px-5 py-2 font-medium text-black hover:bg-gray-200 transition"
          >
            Explore Docs
          </a>
          <a
            href="https://jpeg.fun"
            className="rounded-full border border-white/60 px-5 py-2 text-white hover:bg-white/10 transition"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}

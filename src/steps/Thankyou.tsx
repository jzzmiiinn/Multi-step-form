export const Thankyou = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 text-center">
      <img
        src="/icon-thank-you.svg"
        alt="Thank you"
        className="mb-6 h-20 w-20"
      />

      <h1 className="text-3xl font-bold text-blue-950">Thank you!</h1>

      <p className="mt-4 max-w-md leading-relaxed text-gray-500">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us.
      </p>
    </section>
  );
};

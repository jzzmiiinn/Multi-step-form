export const Thankyou = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <img src="/icon-thank-you.svg" alt="" />

      <h2 className="text-2xl font-bold text-blue-950">Thank you!</h2>

      <p className="text-gray-500 leading-relaxed">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at{" "}
        <a
          href="mailto:support@loremgaming.com"
          className="text-blue-950 underline"
        >
          support@loremgaming.com
        </a>
      </p>
    </div>
  );
};

export const PersonalInfo = () => {
  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-950">Personal Info</h1>

      <p className="mt-3 text-gray-500">
        Please provide your name, email address, and phone number.
      </p>

      <form className="mt-8 space-y-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Stephen King"
            required
            className="rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            required
            className="rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            required
            className="rounded-lg border border-gray-300 p-3"
          />
        </div>
      </form>
    </section>
  );
};

import { validatePersonalInfo } from "../utils/validation";

interface PersonalInfoProps {
  values: {
    name: string;
    email: string;
    phone: string;
  };
  setValues: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phone: string;
    }>
  >;
  showErrors: boolean;
}

export const PersonalInfo = ({
  values,
  setValues,
  showErrors,
}: PersonalInfoProps) => {
  const errors = validatePersonalInfo(values);
  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-950">Personal Info</h1>

      <p className="mt-3 text-gray-500">
        Please provide your name, email address, and phone number.
      </p>

      <form className="mt-8 space-y-5" noValidate>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <label htmlFor="name">Name</label>
            {showErrors && errors.name && (
              <span className="text-sm font-bold text-red-500">
                {errors.name}
              </span>
            )}
          </div>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Stephen King"
            value={values.name}
            onChange={(event) =>
              setValues((previous) => ({
                ...previous,
                name: event.target.value,
              }))
            }
            aria-invalid={showErrors && !!errors.name}
            className={`rounded-lg border p-3 ${
              showErrors && errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <label htmlFor="email">Email Address</label>
            {showErrors && errors.email && (
              <span className="text-sm font-bold text-red-500">
                {errors.email}
              </span>
            )}
          </div>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={values.email}
            onChange={(event) =>
              setValues((previous) => ({
                ...previous,
                email: event.target.value,
              }))
            }
            aria-invalid={showErrors && !!errors.email}
            className={`rounded-lg border p-3 ${
              showErrors && errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <label htmlFor="phone">Phone number</label>
            {showErrors && errors.phone && (
              <span className="text-sm font-bold text-red-500">
                {errors.phone}
              </span>
            )}
          </div>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            value={values.phone}
            onChange={(event) =>
              setValues((previous) => ({
                ...previous,
                phone: event.target.value,
              }))
            }
            aria-invalid={showErrors && !!errors.phone}
            className={`rounded-lg border p-3 ${
              showErrors && errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
      </form>
    </section>
  );
};

import { useAuth } from "../AuthenticationProvider";

/** Round div with initials */
export function Avatar() {
  const { authUser } = useAuth();

  if (!authUser) {
    return null;
  }
  const { firstName, lastName } = authUser;

  return (
    <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 text-white font-bold rounded-full">
      {firstName[0]}
      {lastName[0]}
    </div>
  );
}

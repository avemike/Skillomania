import { z } from "zod";
import { useForm } from "react-hook-form";

export function AddNewSeries() {
  const { handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input type="text" placeholder="New Series name" />
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Description" />
      <button type="submit">Submit</button>
    </form>
  );
}

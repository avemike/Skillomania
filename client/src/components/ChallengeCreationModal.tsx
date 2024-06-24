import { Controller, useForm } from "react-hook-form";
import { useChallengeSeries } from "../api/useChallenges";
import { Select } from "./form/Select";
import { TextAreaInput } from "./form/TextAreaInput";
import { TextInput } from "./form/TextInput";
import { Modal } from "./Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./form/Button";

const schema = z.object({
  title: z.string().min(5).max(100),
  description: z.string().min(10).max(1000),
  challengeSeriesId: z.string().optional(),
});

const DEFAULT_VALUES: z.infer<typeof schema> = {
  title: "",
  description: "",
  challengeSeriesId: "",
};

interface ChallengeCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChallengeCreationModal({
  isOpen,
  onClose,
}: ChallengeCreationModalProps) {
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(schema),
  });
  const { data = [], isLoading, isError } = useChallengeSeries();

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  const handleReset = () => {
    form.reset();
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  return (
    <Modal.Wrapper isOpen={isOpen} onClose={handleClose}>
      <form className="contents" onSubmit={handleSubmit}>
        <Modal.Header>
          <h3 className="text-lg font-bold">Create Challenge</h3>
        </Modal.Header>
        <Modal.Content>
          <TextInput
            label="Title"
            placeholder="Challenge title"
            {...form.register("title")}
            error={form.formState.errors.title?.message}
          />
          <TextAreaInput
            label="Description"
            placeholder="Challenge description"
            {...form.register("description")}
            error={form.formState.errors.description?.message}
          />
          <Controller
            name="challengeSeriesId"
            control={form.control}
            render={({ field }) => (
              <Select
                label="Series"
                options={data.map((series) => ({
                  value: series.id,
                  label: series.title,
                }))}
                value={field.value}
                onChange={field.onChange}
                error={form.formState.errors.challengeSeriesId?.message}
              />
            )}
          />
        </Modal.Content>
        <Modal.Footer>
          <Button type="submit" variant="outline">
            Create
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Wrapper>
  );
}

import { Controller, useForm } from "react-hook-form";
import { useChallengeSeries } from "../api/useChallengeSeries";
import { Select } from "./form/Select";
import { TextAreaInput } from "./form/TextAreaInput";
import { TextInput } from "./form/TextInput";
import { Modal } from "./Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./form/Button";
import { useChallengeMutation } from "../api/useChallengeMutation";

const schema = z.object({
  title: z.string().min(5).max(100),
  description: z.string().min(10).max(1000),
  challengeSeriesId: z.number().optional().nullable(),
});

const DEFAULT_VALUES: z.infer<typeof schema> = {
  title: "",
  description: "",
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
  const { data: response } = useChallengeSeries();
  const challengeMutation = useChallengeMutation();

  const handleSubmit = form.handleSubmit((data) => {
    challengeMutation.mutate({
      body: {
        title: data.title,
        description: data.description,
        seriesId: data.challengeSeriesId,
      },
    });
  });

  const handleReset = () => {
    form.reset();
    challengeMutation.reset();
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const seriesList =
    response?.data?.map((series) => ({
      value: series.id,
      label: series.title,
    })) ?? [];

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
                options={seriesList}
                value={field.value}
                onChange={(val) => field.onChange(Number(val))}
                error={form.formState.errors.challengeSeriesId?.message}
              />
            )}
          />
        </Modal.Content>
        <Modal.Footer>
          {challengeMutation.isError && (
            <div className="text-red-500">An error occurred</div>
          )}
          <Button
            type="submit"
            variant="outline"
            isLoading={challengeMutation.isLoading}
          >
            Create
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Wrapper>
  );
}

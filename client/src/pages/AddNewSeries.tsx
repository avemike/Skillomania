import { useForm } from "react-hook-form";
// import { Select } from "../components/form/Select";
// import { TextAreaInput } from "../components/form/TextAreaInput";
// import { TextInput } from "../components/form/TextInput";
// import { Modal } from "../components/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import { Button } from "../components/form/Button";
import { useChallengeSeries } from "../api/useChallengeSeries";
import { useChallengeMutation } from "../api/useChallengeMutation";

const schema = z.object({
  seriesName: z.string().min(5).max(30),
  title: z.string().min(5).max(100),
  description: z.string().min(10).max(1000),
  challengeSeriesId: z.number().optional().nullable(),
});

const DEFAULT_VALUES: z.infer<typeof schema> = {
  seriesName: "",
  title: "",
  description: "",
};

interface SeriesCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SeriesCreationModal({
  isOpen,
  onClose,
}: SeriesCreationModalProps) {
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(schema),
  });

  const { data = [] } = useChallengeSeries();

  const challengeMutation = useChallengeMutation();

  const handleSubmit = form.handleSubmit((data) => {
    challengeMutation.mutate({
      seriesName: data.seriesName,
      title: data.title,
      description: data.description,
      seriesId: data.challengeSeriesId,
    });
  });

  return (
    <Modal.Wrapper>
      <form className="contents" onSubmit={handleSubmit}>
        <Modal.Header>
          <h3 className="text-lg font-bold">Create Series</h3>
        </Modal.Header>
        <Modal.Content>
          <TextInput
            label="Series"
            placeholder="Series title"
            {...form.register("seriesName")}
            error={form.formState.errors.seriesName?.message}
          />
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
                onChange={(val) => field.onChange(Number(val))}
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

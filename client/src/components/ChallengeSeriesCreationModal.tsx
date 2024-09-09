import { useForm } from "react-hook-form";
import { TextAreaInput } from "./form/TextAreaInput";
import { TextInput } from "./form/TextInput";
import { Modal } from "./Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./form/Button";
import { useChallengeSeriesMutation } from "../api/useChallengeSeriesMutation";

const schema = z.object({
  name: z.string().min(5).max(30),
  description: z.string().min(10).max(1000),
});

const DEFAULT_VALUES: z.infer<typeof schema> = {
  name: "",
  description: "",
};

interface ChallengeSeriesCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChallengeSeriesCreationModal({
  isOpen,
  onClose,
}: ChallengeSeriesCreationModalProps) {``
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(schema),
  });

  const challengeSeriesMutation = useChallengeSeriesMutation();

  const handleSubmit = form.handleSubmit((formValues) => {
    challengeSeriesMutation.mutate({
      body: {
        title: formValues.name,
        description: formValues.description,
      },
    });
  });

  return (
    <Modal.Wrapper isOpen={isOpen} onClose={onClose}>
      <form className="contents" onSubmit={handleSubmit}>
        <Modal.Header>
          <h3 className="text-lg font-bold">Create Series</h3>
        </Modal.Header>
        <Modal.Content>
          <TextInput
            label="Series"
            placeholder="Series title"
            {...form.register("name")}
            error={form.formState.errors.name?.message}
          />
          <TextAreaInput
            label="Description"
            placeholder="Challenge description"
            {...form.register("description")}
            error={form.formState.errors.description?.message}
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

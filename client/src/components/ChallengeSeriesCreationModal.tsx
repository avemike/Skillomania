import { Controller, useForm } from "react-hook-form";
import { TextAreaInput } from "./form/TextAreaInput";
import { TextInput } from "./form/TextInput";
import { Modal } from "./Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./form/Button";
import { useChallengeSeriesMutation } from "../api/useChallengeSeriesMutation";
import { Challenge } from "../api/openapi";
import { Select } from "./form/Select";
import { useCategories } from "../api/useCategories";

const schema = z.object({
  name: z.string().min(5).max(30),
  description: z.string().min(10).max(1000),
  categoryId: z.number().nullable(),
  effortLevel: z.number().int().min(1).max(5).nullable(),
  requiredExpertise: z.number().int().min(0).max(3).nullable(),
});

const DEFAULT_VALUES: z.infer<typeof schema> = {
  name: "",
  description: "",
  categoryId: null,
  effortLevel: null,
  requiredExpertise: null,
};

interface ChallengeSeriesCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChallengeSeriesCreationModal({
  isOpen,
  onClose,
}: ChallengeSeriesCreationModalProps) {
  const { data: categoriesResponse } = useCategories();
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
        categoryId: formValues.categoryId!,
        effortLevel: formValues.effortLevel as Challenge["effortLevel"],
        requiredExpertise:
          formValues.requiredExpertise as Challenge["requiredExpertise"],
      },
    });
  });

  const handleReset = () => {
    form.reset();
    challengeSeriesMutation.reset();
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const categoriesList =
    categoriesResponse?.data?.map((category) => ({
      value: category.id,
      label: category.name,
    })) ?? [];

  return (
    <Modal.Wrapper isOpen={isOpen} onClose={handleClose}>
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
          <Controller
            name="requiredExpertise"
            control={form.control}
            render={({ field }) => (
              <Select
                label="Required expertise"
                options={[
                  { value: 0, label: "Beginner" },
                  { value: 1, label: "Intermediate" },
                  { value: 2, label: "Advanced" },
                  { value: 3, label: "Expert" },
                ]}
                value={field.value}
                onChange={(val) => field.onChange(Number(val))}
                error={form.formState.errors.requiredExpertise?.message}
              />
            )}
          />
          <Controller
            name="effortLevel"
            control={form.control}
            render={({ field }) => (
              <Select
                label="Effort level"
                options={[
                  { value: 1, label: "Low" },
                  { value: 2, label: "Medium" },
                  { value: 3, label: "High" },
                  { value: 4, label: "Very high" },
                  { value: 5, label: "Extreme" },
                ]}
                value={field.value}
                onChange={(val) => field.onChange(Number(val))}
                error={form.formState.errors.effortLevel?.message}
              />
            )}
          />
          <Controller
            name="categoryId"
            control={form.control}
            render={({ field }) => (
              <Select
                label="Category"
                options={categoriesList}
                value={field.value}
                onChange={(val) => field.onChange(Number(val))}
                error={form.formState.errors.categoryId?.message}
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

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
import { Challenge } from "../api/openapi";
import { useCategories } from "../api/useCategories";

const schema = z.object({
  title: z.string().min(5).max(100),
  description: z.string().min(10).max(1000),
  challengeSeriesId: z.number().optional().nullable(),
  categoryId: z.number().nullable(),
  effortLevel: z.number().int().min(1).max(5).nullable(),
  requiredExpertise: z.number().int().min(0).max(3).nullable(),
});

const DEFAULT_VALUES: z.infer<typeof schema> = {
  title: "",
  description: "",
  challengeSeriesId: null,
  categoryId: null,
  effortLevel: null,
  requiredExpertise: null,
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
  const { data: challengeSeriesResponse } = useChallengeSeries();
  const { data: categoriesResponse } = useCategories();
  const challengeMutation = useChallengeMutation();

  const validateForm = (data: z.infer<typeof schema>) => {
    let isError = false;

    if (!data.categoryId) {
      isError = true;
      form.setError("categoryId", { message: "Category is required" });
    }

    if (!data.effortLevel) {
      isError = true;
      form.setError("effortLevel", { message: "Effort level is required" });
    }

    if (!data.requiredExpertise) {
      isError = true;
      form.setError("requiredExpertise", {
        message: "Required expertise is required",
      });
    }

    return !isError;
  };

  const handleSubmit = form.handleSubmit((data) => {
    if (!validateForm(data)) {
      return;
    }

    challengeMutation.mutate({
      body: {
        title: data.title,
        description: data.description,
        seriesId: data.challengeSeriesId!,
        categoryId: data.categoryId!,
        effortLevel: data.effortLevel as Challenge["effortLevel"],
        requiredExpertise:
          data.requiredExpertise as Challenge["requiredExpertise"],
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
    challengeSeriesResponse?.data?.map((series) => ({
      value: series.id,
      label: series.title,
    })) ?? [];

  const categoriesList =
    categoriesResponse?.data?.map((category) => ({
      value: category.id,
      label: category.name,
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

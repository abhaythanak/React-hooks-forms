import React from "react";
import { Stack, TextField } from "@mui/material";

import RHFAutocomplete from "../../components/RHFAutocomplete";
import { useFormContext } from "react-hook-form";
import { FormSchema } from "../types/schema";
import RHFToggleButtonGroup from "../../components/RHFToggleButtonGroup";
import { useStates, useLanguages } from "../services/queries";

function Users() {
  const statesQuery = useStates();
  const languagesQuery = useLanguages();
  const {
    register,
    formState: { errors },
  } = useFormContext<FormSchema>();

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register("name")}
        label="Enter your name"
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("email")}
        label="Enter your email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RHFAutocomplete<FormSchema> name="states" label="states" 
        options={[
          { id: "AL", label: "Alabama" },
          { id: "AK", label: "Alaska" },
          { id: "AZ", label: "Arizona" },
        ]} />
        <RHFToggleButtonGroup<FormSchema> name="languages" label="languages" options={languagesQuery.data || []}/>
    </Stack>
  );
}

export default Users;

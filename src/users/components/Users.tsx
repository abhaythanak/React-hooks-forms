import React from "react";
import { Stack, TextField } from "@mui/material";

import RHFAutocomplete from "../../components/RHFAutocomplete";
import { useFormContext } from "react-hook-form";
import { FormSchema } from "../types/schema";
import RHFToggleButtonGroup from "../../components/RHFToggleButtonGroup";
import { useStates, useLanguages, useGenders } from "../services/queries";
import RHFRadioGroup from "../../components/RHFRadioGroup";

function Users() {
  const statesQuery = useStates();
  const languagesQuery = useLanguages();
  const gendersQuery = useGenders();
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
      <RHFAutocomplete<FormSchema>
        name="states"
        label="states"
        options={statesQuery.data}
      />

      <RHFToggleButtonGroup<FormSchema>
        name="languages"
        options={languagesQuery.data || []}
      />

      <RHFRadioGroup<FormSchema>
        name="gender"
        options={gendersQuery.data}
        label="Gender"
      />
    </Stack>
  );
}

export default Users;

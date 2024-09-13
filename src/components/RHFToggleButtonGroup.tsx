import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { Option } from '../types/options';

type Props<T extends FieldValues> = {
    name: Path<T>;
    options: Option[];
};

export default function RHFToggleButtonGroup<T extends FieldValues>({
    name,
    options,
}: Props<T>) {
    const { control } = useFormContext<T>();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value = [], onChange }, ...restField }) => (
                <ToggleButtonGroup
                    onChange={(_, newValue) => {
                        if (newValue.length) {
                            onChange(newValue);
                        }
                    }}
                    value={value.length ? value : [options[0]?.id]} // Ensure default value is set correctly
                    {...restField}
                >
                    {options.map((option) => (
                        <ToggleButton value={option.id} key={option.id}>
                            {option.label}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            )}
        />
    );
}

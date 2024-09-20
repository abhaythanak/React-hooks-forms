import React from 'react'
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from '@mui/material';
import { Option } from '../types/option';

type Props<T extends FieldValues> = {
	name: Path<T>;
	options?: Option[];
	label: string;
};

export default function RHFCheckbox<T extends FieldValues>({
	name,
	options,
	label,
}: Props<T>) {
	const { control } = useFormContext<T>();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: {value, onChange}, fieldState: { error } }) => (
				<FormControl error={!!error}>
					<FormLabel>{label}</FormLabel>
					
				</FormControl>
			)}
		/>
	);
}

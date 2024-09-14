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

export default function RHFRadioGroup<T extends FieldValues>({
	name,
	options,
	label,
}: Props<T>) {
	const { control } = useFormContext<T>();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<FormControl error={!!error}>
					<FormLabel>{label}</FormLabel>
					<RadioGroup
						{...field} // This ensures the value and onChange are connected to react-hook-form
						value={field.value}
						onChange={field.onChange}
					>
						{options?.map((option) => (
							<FormControlLabel
								value={option.id}
								control={<Radio />}
								label={option.label}
								key={option.id}
							/>
						))}
					</RadioGroup>
				</FormControl>
			)}
		/>
	);
}

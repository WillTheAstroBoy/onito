import { Autocomplete, TextField } from "@mui/material";

interface EditableSelect {
    options: any,
    onSelect: Function,
    placeholder: string,
    register: any,
    name: string
}

const EditableSelect: React.FC<EditableSelect> = ({ options, onSelect, name, placeholder, register }) => {
    return (
        <Autocomplete
            autoComplete={false}
            freeSolo
            options={options}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={placeholder}
                    margin="normal"
                    variant="outlined"
                    {...register(name)}

                />
            )}
        />
    );
};

export default EditableSelect;
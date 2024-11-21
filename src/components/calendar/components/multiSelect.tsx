import React from 'react';
import Multiselect from 'multiselect-react-dropdown';

interface Option {
    id: number;
    name: string;
}

interface MultiSelectProps {
    options: Option[];
    selectedValues: Option[];
    onSelect: (selectedList: Option[]) => void;
    onRemove: (selectedList: Option[]) => void;
    className: string
}

const MultiSelectDropdown: React.FC<MultiSelectProps> = ({
    options,
    selectedValues,
    onSelect,
    onRemove,
    className
}) => {
    return (
        <div className="w-full max-w-xs mx-auto">
            <Multiselect
                options={options}
                selectedValues={selectedValues}
                onSelect={onSelect}
                onRemove={onRemove}
                displayValue="name" // Specify the key to display in the dropdown
                className={className}
            />
        </div>
    );
};

export default MultiSelectDropdown;
